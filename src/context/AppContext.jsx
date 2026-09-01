import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [pickedErrandId, setPickedErrandId] = useState(null);

  return (
    <AppContext value={{ pickedErrandId, setPickedErrandId }}>
      {children}
    </AppContext>
  );
}
