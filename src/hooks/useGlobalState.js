import { useContext } from 'react';
import { GlobalStateContext } from '../context/GlobalStateContext';

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error('useGlobalState outside of GlobalContext provider');
  }

  return context;
};

export default useGlobalState;
