import { createContext, useContext, useReducer } from "react";

const experienceContext = createContext();

const initialExperienceState = {
  currentExperience: null,
  experiences: [
    {
      id: "1",
      name: "Umbrella Inc.",
      title: "UX & UI Designer",
      from: "08/2020",
      to: "present",
      location: "New York City, US",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      id: "2",
      name: "Umbrella Inc.",
      title: "UX & UI Designer",
      from: "08/2020",
      to: "present",
      location: "New York City, US",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
    {
      id: "3",
      name: "Umbrella Inc.",
      title: "UX & UI Designer",
      from: "08/2020",
      to: "present",
      location: "New York City, US",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
    },
  ],
  isEdited: false,
};

const reducer = function (state, action) {
  switch (action.type) {
    case "exp/toggleEdit":
      console.log(action);
      return { ...state, currentExperience: action.payload, isEdited: true };
    case "exp/created":
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
        currentExperience: null,
        isEdited: false,
      };
    case "exp/edited":
      return {
        ...state,
        experiences: state.experiences.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp,
        ),
        isEdited: false,
      };
    case "exp/deleted":
      return {
        ...state,
        experiences: state.experiences.filter(
          (exp) => exp.id !== action.payload,
        ),
        isEdited: false,
      };
    case "toggleEdit":
      return { ...state, isEdited: !state.isEdited, currentExperience: null };
    default:
      return { ...state };
  }
};

export default function ExperienceProvider({ children }) {
  const [{ currentExperience, experiences, isEdited }, dispatch] = useReducer(
    reducer,
    initialExperienceState,
  );
  return (
    <experienceContext.Provider
      value={{ currentExperience, experiences, isEdited, dispatch }}
    >
      {children}
    </experienceContext.Provider>
  );
}

export function useExperience() {
  const context = useContext(experienceContext);
  if (context === undefined) {
    return new Error("context is called outside the provider");
  }
  return context;
}
