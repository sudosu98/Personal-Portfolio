import { Dispatch, createContext, useContext, useReducer } from "react";
import { HOME_ACTIONS, HOME_DEFAULT_STATE } from "./HomeContextConstants";
import { Experience } from "../Experience";

export interface Actions {
  type: string;
  payload: any;
}
export interface State {
  activeTab: string;
  experienceActive: boolean;
  experienceTab: string;
  experienceData: Experience
}

const defaultVal = {
  ...HOME_DEFAULT_STATE,
} as State;

export interface HomeContextType {
  state: State;
  dispatch: Dispatch<Actions>;
}

export const HomeContext = createContext<HomeContextType>({
  state: defaultVal,
  dispatch: () => null,
});

const HomeReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case HOME_ACTIONS.SET_ACTIVE_TAB:
      return { ...action.payload };
    case HOME_ACTIONS.SET_EXPERIENCES:
      return { ...action.payload };
    case HOME_ACTIONS.SET_EXPERIENCE_TAB:
      return { ...action.payload };
    default:
      return state;
  }
};

export const HomeCtxWrapper = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(HomeReducer, HOME_DEFAULT_STATE);
  return (
    <HomeContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
