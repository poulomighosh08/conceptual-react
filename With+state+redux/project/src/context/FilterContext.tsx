import React, { createContext, useReducer, useContext, ReactNode } from 'react';
// Types
export type FilterState = {
  timeRange: string;
  isFilterOpen: boolean;
};

type Action =
  | { type: 'SET_TIME_RANGE'; payload: string }
  | { type: 'TOGGLE_FILTER'; payload: boolean };

const initialState: FilterState = {
  timeRange: 'Last 24 hours',
  isFilterOpen: false,
};

function filterReducer(state: FilterState, action: Action): FilterState {
  switch (action.type) {
    case 'SET_TIME_RANGE':
      return { ...state, timeRange: action.payload };
    case 'TOGGLE_FILTER':
      return { ...state, isFilterOpen: action.payload };
    default:
      return state;
  }
}

const FilterContext = createContext<{
  state: FilterState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error('useFilter must be used within FilterProvider');
  return context;
};