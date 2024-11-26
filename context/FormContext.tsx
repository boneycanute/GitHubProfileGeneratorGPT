"use client";

import React, { createContext, useContext, useReducer, useEffect } from "react";

// Define the form state interface
interface FormState {
  name?: string;
  bio?: string;
  professionalTitle?: string;
  workFocus?: string;
  expertise?: string[];
  learningGoals?: string;
  collaborationInterests?: string;
  helpTopics?: string[];
  expertiseTopics?: string[];
  funFacts?: string;
  pronouns?: string;
  languages?: string[];
  timeZone?: string;
  availability?: string;
  theme?: {
    mode?: string;
    primaryColor?: string;
    layout?: string;
  };
  stats?: {
    selectedStats?: string[];
    graphHeight?: number;
  };
}

// Define action types
type FormAction =
  | { type: "SET_FORM_DATA"; payload: Partial<FormState> }
  | { type: "UPDATE_FIELD"; payload: { field: keyof FormState; value: any } }
  | { type: "RESET_FORM" };

// Create the context
const FormContext = createContext<{
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
} | null>(null);

// Reducer function
const formReducer = (state: FormState, action: FormAction): FormState => {
  let newState: FormState;

  switch (action.type) {
    case "SET_FORM_DATA":
      newState = { ...state, ...action.payload };
      console.log("Form Data Updated:", newState);
      return newState;

    case "UPDATE_FIELD":
      newState = { ...state, [action.payload.field]: action.payload.value };
      console.log(`Field "${action.payload.field}" Updated:`, {
        value: action.payload.value,
        newState,
      });
      return newState;

    case "RESET_FORM":
      console.log("Form Reset");
      return {};

    default:
      return state;
  }
};

// Provider component
export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, {});

  // Load saved form data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      console.log("Loading saved form data:", parsedData);
      dispatch({ type: "SET_FORM_DATA", payload: parsedData });
    }
  }, []);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(state).length > 0) {
      console.log("Saving form data to localStorage:", state);
      localStorage.setItem("profileData", JSON.stringify(state));
    }
  }, [state]);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use the form context
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};