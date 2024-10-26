import { createContext, useContext, useReducer } from "react";

const educationContext = createContext();

const initialEducationState = {
  currentEducation: null,
  educations: [
    {
      id: "1",
      name: "London City University",
      degree: "Bachelors in Economics",
      from: "08/2020",
      to: "present",
      location: "London, UK",
    },
  ],
  isEdited: false,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "education/toggleEdit":
      return { ...state, currentEducation: action.payload, isEdited: true };
    case "education/created":
      return {
        ...state,
        educations: [...state.educations, action.payload],
        currentEducation: null,
        isEdited: false,
      };
    case "education/edited":
      return {
        ...state,
        educations: state.educations.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp,
        ),
        isEdited: false,
      };
    case "education/deleted":
      return {
        ...state,
        educations: state.educations.filter((exp) => exp.id !== action.payload),
        isEdited: false,
      };
    case "toggleEdit":
      return { ...state, isEdited: !state.isEdited, currentEducation: null };
    default:
      return { ...state };
  }
};

export default function EducationProvider({ children }) {
  const [{ currentEducation, educations, isEdited }, dispatch] = useReducer(
    reducer,
    initialEducationState,
  );

  return (
    <educationContext.Provider
      value={{ currentEducation, educations, isEdited, dispatch }}
    >
      {children}
    </educationContext.Provider>
  );
}

export const useEducation = function () {
  const context = useContext(educationContext);
  if (context === undefined) {
    return new Error("context is called outside the provider");
  }
  return context;
};
