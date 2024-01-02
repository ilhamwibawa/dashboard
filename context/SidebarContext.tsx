import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface SidebarContextProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SIDEBAR_KEY = "sidebarState";

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const storedState =
    typeof window !== "undefined" ? localStorage.getItem(SIDEBAR_KEY) : null;
  const initialIsOpen = storedState ? JSON.parse(storedState) : false;

  const [isOpen, setIsOpen] = useState<boolean>(initialIsOpen);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    localStorage.setItem(SIDEBAR_KEY, JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
