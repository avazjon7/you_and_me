import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface StateContextInterface {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
}

interface CategoryContextProviderInterface {
  children: React.JSX.Element;
}

const StateContext = createContext<StateContextInterface>(null!);

const CategoryContextProvider: React.FC<CategoryContextProviderInterface> = ({
  children,
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <StateContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </StateContext.Provider>
  );
};

export const StateProvider = CategoryContextProvider;
export const useCategoryContext = () => useContext(StateContext);
