import {createContext, Dispatch, SetStateAction} from 'react';

export const SetIndexContext = createContext<Dispatch<SetStateAction<number>>>(
  () => {},
);
