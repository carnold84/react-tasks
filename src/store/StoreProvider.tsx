import { createContext, useReducer } from 'react';
import reducer from './reducer';
import { ProviderProps, Store } from '../types/store';

const initialState = { tasks: [] };

export const StoreContext = createContext<Store>({
  state: initialState,
  dispatch: () => null,
});

const StoreProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
