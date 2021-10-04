import { useContext } from 'react';
import { StoreContext } from '../store/StoreProvider';

export const useStore = () => {
  const context = useContext(StoreContext);
  return context;
};

export default useStore;
