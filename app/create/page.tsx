"use client";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedForm } from "@/components/AnimatedForm";
import { MultiSelect } from "@/components/ui/multi-select";
import { ColorPicker } from "@/components/ui/color-picker";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import ProfileReview from "@/components/ProfileReview";

interface StepComponentProps {
  value: any;
  onChange: (value: any) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<any>;
}

// Basic Information Inputs
const ProfessionalTitleInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.input
    ref={inputRef}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="e.g., Senior Frontend Developer"
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  />
);

const WorkFocusInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.textarea
    ref={inputRef}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="Describe your current work and interests..."
    rows={4}
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  />
);

const ExpertiseInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <MultiSelect
    ref={inputRef}
    value={value || []}
    onChange={onChange}
    onKeyDown={onKeyDown}
    options={[
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "Java",
      "DevOps",
      "Cloud Computing",
      "Machine Learning",
    ]}
    placeholder="Select your areas of expertise"
    className="w-full"
  />
);

const LearningGoalsInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.textarea
    ref={inputRef}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="What are you currently learning or planning to learn?"
    rows={4}
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  />
);

const CollaborationInterestsInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.textarea
    ref={inputRef}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="What kind of projects would you like to collaborate on?"
    rows={4}
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  />
);

const HelpTopicsInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <MultiSelect
    ref={inputRef}
    value={value || []}
    onChange={onChange}
    onKeyDown={onKeyDown}
    options={[
      "Code Review",
      "Architecture",
      "Best Practices",
      "Career Advice",
      "Technical Writing",
      "Open Source",
    ]}
    placeholder="Select areas where you need help"
    className="w-full"
  />
);

const ExpertiseTopicsInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <MultiSelect
    ref={inputRef}
    value={value || []}
    onChange={onChange}
    onKeyDown={onKeyDown}
    options={[
      "Frontend Development",
      "Backend Development",
      "System Design",
      "Database Design",
      "UI/UX",
      "Testing",
      "DevOps",
    ]}
    placeholder="Select topics you can help others with"
    className="w-full"
  />
);

const FunFactsInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.textarea
    ref={inputRef}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="Share some interesting facts about yourself..."
    rows={4}
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  />
);

const PronounsInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <ToggleGroup
    ref={inputRef}
    value={value}
    onValueChange={onChange}
    onKeyDown={onKeyDown}
    type="single"
    className="w-full justify-start space-x-4"
  >
    <ToggleGroupItem value="he/him">He/Him</ToggleGroupItem>
    <ToggleGroupItem value="she/her">She/Her</ToggleGroupItem>
    <ToggleGroupItem value="they/them">They/Them</ToggleGroupItem>
    <ToggleGroupItem value="custom">Custom</ToggleGroupItem>
  </ToggleGroup>
);

const LanguagesInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <MultiSelect
    ref={inputRef}
    value={value || []}
    onChange={onChange}
    onKeyDown={onKeyDown}
    options={[
      "English",
      "Spanish",
      "French",
      "German",
      "Chinese",
      "Japanese",
      "Korean",
      "Hindi",
    ]}
    placeholder="Select languages you speak"
    className="w-full"
  />
);

const TimeZoneInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.select
    ref={inputRef}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  >
    <option value="">Select your time zone</option>
    {/* Add time zone options dynamically */}
  </motion.select>
);

const AvailabilityInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <motion.textarea
    ref={inputRef}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={onKeyDown}
    placeholder="Describe your availability for collaboration..."
    rows={4}
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 lg:p-6 text-lg lg:text-xl bg-background border-2 border-input rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-foreground"
  />
);

// Theme Customization Inputs
const ThemeCustomizationInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <div className="space-y-6">
    <ToggleGroup
      ref={inputRef}
      value={value?.mode || "light"}
      onValueChange={(mode) => onChange({ ...value, mode })}
      onKeyDown={onKeyDown}
      type="single"
      className="w-full justify-start space-x-4"
    >
      <ToggleGroupItem value="light">Light Mode</ToggleGroupItem>
      <ToggleGroupItem value="dark">Dark Mode</ToggleGroupItem>
      <ToggleGroupItem value="system">System</ToggleGroupItem>
    </ToggleGroup>
    <ColorPicker
      value={value?.primaryColor || "#000000"}
      onChange={(primaryColor) => onChange({ ...value, primaryColor })}
      label="Primary Color"
    />
    <ToggleGroup
      value={value?.layout || "single"}
      onValueChange={(layout) => onChange({ ...value, layout })}
      type="single"
      className="w-full justify-start space-x-4"
    >
      <ToggleGroupItem value="single">Single Column</ToggleGroupItem>
      <ToggleGroupItem value="double">Double Column</ToggleGroupItem>
    </ToggleGroup>
  </div>
);

// Stats Configuration
const StatsConfigInput: React.FC<StepComponentProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
}) => (
  <div className="space-y-6">
    <MultiSelect
      ref={inputRef}
      value={value?.selectedStats || []}
      onChange={(selectedStats) => onChange({ ...value, selectedStats })}
      onKeyDown={onKeyDown}
      options={[
        "Overall Stats",
        "Top Languages",
        "Streak Stats",
        "Contribution Graph",
        "Trophy Showcase",
        "Activity Graph",
      ]}
      placeholder="Select stats to display"
      className="w-full"
    />
    <div className="space-y-2">
      <Label>Graph Height</Label>
      <Slider
        value={value?.graphHeight || 200}
        onValueChange={(graphHeight) => onChange({ ...value, graphHeight })}
        min={100}
        max={300}
        step={10}
      />
    </div>
  </div>
);

// Define all steps
const steps = [
  {
    title: "Professional Title",
    key: "professionalTitle",
    component: ProfessionalTitleInput,
  },
  {
    title: "Current Work Focus",
    key: "workFocus",
    component: WorkFocusInput,
  },
  {
    title: "Areas of Expertise",
    key: "expertise",
    component: ExpertiseInput,
  },
  {
    title: "Learning Goals",
    key: "learningGoals",
    component: LearningGoalsInput,
  },
  {
    title: "Collaboration Interests",
    key: "collaborationInterests",
    component: CollaborationInterestsInput,
  },
  {
    title: "Seeking Help With",
    key: "helpTopics",
    component: HelpTopicsInput,
  },
  {
    title: "Ask Me About",
    key: "expertiseTopics",
    component: ExpertiseTopicsInput,
  },
  {
    title: "Fun Facts",
    key: "funFacts",
    component: FunFactsInput,
  },
  {
    title: "Pronouns",
    key: "pronouns",
    component: PronounsInput,
  },
  {
    title: "Languages Spoken",
    key: "languages",
    component: LanguagesInput,
  },
  {
    title: "Time Zone",
    key: "timeZone",
    component: TimeZoneInput,
  },
  {
    title: "Availability",
    key: "availability",
    component: AvailabilityInput,
  },
  {
    title: "Theme Customization",
    key: "theme",
    component: ThemeCustomizationInput,
  },
  {
    title: "Stats Configuration",
    key: "stats",
    component: AvailabilityInput,
  },

  {
    title: "Review your profile information",
    key: "review",
    component: ProfileReview,
  },
];

export default function CreatePage() {
  const handleSubmit = async (formData: any) => {
    console.log("Form submitted:", formData);
    // Handle form submission and profile generation here
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatedForm steps={steps} onSubmit={handleSubmit} />
    </div>
  );
}
