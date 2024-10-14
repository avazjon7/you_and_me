import React from "react";

interface UserInterface {
  firstName: string;
  gender: string;
  number: string;
  role: string;
  password: string;
  email: string | null;
  image: string | null;
}

interface MerchantInterface {
  companyName: string;
  companyPhone: string;
  companyOwner: string;
  companyOwnerPhone: string;
  companyEmail: string;
  companyCategory: string;
  companyTimetable: Date;
  companyPassword: string;
  companyImage: string | null;
}

interface StateInterface {
  user?: UserInterface;
  merchant?: MerchantInterface;
  isMerchant: boolean;
  isAuth: boolean;
}

interface AppContextInterface {
  appState: StateInterface;
  setAppState: React.Dispatch<React.SetStateAction<StateInterface>>;
}

export const AppContext = React.createContext<AppContextInterface>(null!);

interface AppContextInterfaceProvider {
  children: React.JSX.Element;
}

const AppContextProvider: React.FC<AppContextInterfaceProvider> = ({ children }) => {
  const [state, setState] = React.useState<StateInterface>({ isMerchant: false, isAuth: false });

  return (
    <AppContext.Provider value={{ appState: state, setAppState: setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
