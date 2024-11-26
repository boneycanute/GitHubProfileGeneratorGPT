// app/api/generate/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { formData, user } = await req.json();

  const prompt = `Create a GitHub profile README.md for a developer. Return ONLY the markdown content, no explanations or additional text.

User Information:
- Name: ${user.user_metadata?.full_name || user.email}
- GitHub Profile: ${user.user_metadata?.user_name || ""}
- Avatar URL: ${user.user_metadata?.avatar_url || ""}
- Email: ${user.email}

Professional Information:
- Title: ${formData.professionalTitle}
- Work Focus: ${formData.workFocus}
- Primary Programming Languages/Tools: ${formData.expertise.join(", ")}
- Learning Goals: ${formData.learningGoals}
- Collaboration Interests: ${formData.collaborationInterests}
- Areas of Expertise: ${formData.expertiseTopics.join(", ")}
- Help Topics: ${formData.helpTopics.join(", ")}

Personal Information:
- Fun Facts: ${formData.funFacts}
- Pronouns: ${formData.pronouns}
- Languages Spoken: ${formData.languages.join(", ")}
- Availability: ${formData.availability}

Styling Preferences:
- Primary Color: ${formData.theme.primaryColor}
- Selected GitHub Stats to Show: ${formData.stats.selectedStats.join(", ")}

Include:
- HTML/CSS header with name and avatar
- Professional and personal sections with emojis
- GitHub stats widgets (using provided GitHub username)
- Technology badges
- Section headers and dividers
- Contact information
- Visitor counter

Return only valid markdown content for README.md.`;

  // Log the prompt being sent to OpenAI
  console.log("Prompt being sent to OpenAI:", prompt);

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4-turbo-preview",
        messages: [
          {
            role: "system",
            content:
              "You are an expert at creating modern, visually appealing GitHub profile READMEs using markdown. You know how to use HTML within markdown, badges, GitHub stats widgets, and other visual elements to create engaging profiles.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
        stream: true,
      }),
    });

    // Ensure the response is OK
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    // Create a TransformStream to process the response
    const stream = new TransformStream({
      async transform(chunk, controller) {
        const text = new TextDecoder().decode(chunk);
        const lines = text.split("\n").filter((line) => line.trim() !== "");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              return;
            }
            try {
              const parsedData = JSON.parse(data);
              const content = parsedData.choices?.[0]?.delta?.content || "";
              if (content) {
                controller.enqueue(new TextEncoder().encode(content));
              }
            } catch (error) {
              // Skip JSON parse errors for incomplete chunks
              if (error instanceof SyntaxError) {
                continue;
              }
              console.error("Error processing stream:", error);
            }
          }
        }
      },
    });

    return new Response(response.body?.pipeThrough(stream), {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to generate profile" },
      { status: 500 }
    );
  }
}
