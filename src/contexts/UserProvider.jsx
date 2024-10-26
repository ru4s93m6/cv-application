import { createContext, useContext, useReducer } from "react";

const userContext = createContext();
const initialPersonalState = {
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1 123-456-7890",
  location: "New York, NY",
};

const reducer = function (state, action) {
  switch (action.type) {
    case "name/updated":
      return { ...state, name: action.payload };
    case "email/updated":
      return { ...state, email: action.payload };
    case "phone/updated":
      return { ...state, phone: action.payload };
    case "location/updated":
      return { ...state, location: action.payload };
    default:
      return { ...state };
  }
};

export default function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialPersonalState);
  const { name, email, phone, location } = state;
  return (
    <userContext.Provider value={{ name, email, phone, location, dispatch }}>
      {children}
    </userContext.Provider>
  );
}

export function useUser() {
  const context = useContext(userContext);
  if (context === undefined) {
    return new Error("context is called outside the provider");
  }
  return context;
}
