import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextType {
  name: string;
  setName: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");

  return (
    <SearchContext.Provider value={{ name, setName }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
