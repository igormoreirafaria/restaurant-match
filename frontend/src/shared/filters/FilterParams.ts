import { useReducer } from "react";

export interface FilterParams {
    restaurantName: string | null;
    customerRating: string | null;
    distance: string | null;
    price: string | null;
    cuisine: string | null;
}

export type SetFiltersType = {
    restaurantName: (newValue: string | null) => void;
    customerRating: (newValue: string | null) => void;
    distance: (newValue: string | null) => void;
    price: (newValue: string | null) => void;
    cuisine: (newValue: string | null) => void;
}

export type UseFiltersType = [
    FilterParams,
    SetFiltersType,
    () => void,
    () => boolean,
  ]

export enum ActionsEnum {
    restaurantName = 'restaurantName',
    customerRating = 'customerRating',
    distance = 'distance',
    price = 'price',
    cuisine = 'cuisine',  
}

export interface ActionProps{
type: ActionsEnum;
payload: string | null;
}

const reducer = (state: FilterParams, action: ActionProps): FilterParams => {
    switch (action.type) {
        case ActionsEnum.restaurantName:
            return { ...state, restaurantName: action.payload };
  
        case ActionsEnum.customerRating:
            return { ...state, customerRating: action.payload };
  
        case ActionsEnum.distance:
            return { ...state, distance: action.payload };
  
        case ActionsEnum.price:
            return { ...state, price: action.payload };
  
        case ActionsEnum.cuisine:
            return { ...state, cuisine: action.payload };
  
        default:
            return state;
    }
};

const initialState: FilterParams = {
    restaurantName: null,
    customerRating: null,
    distance: null,
    price: null,
    cuisine: null,
};


const useFilters = (): UseFiltersType => {
    const [filters, dispatch] = useReducer(reducer, initialState);
  
    const setFilters: SetFiltersType = {
      restaurantName: (newValue: string | null) => dispatch({ type: ActionsEnum.restaurantName, payload: newValue }),
      customerRating: (newValue: string | null) => dispatch({ type: ActionsEnum.customerRating, payload: newValue }),
      distance: (newValue: string | null) => dispatch({ type: ActionsEnum.distance, payload: newValue }),
      price: (newValue: string | null) => dispatch({ type: ActionsEnum.price, payload: newValue }),
      cuisine: (newValue: string | null) => dispatch({ type: ActionsEnum.cuisine, payload: newValue }),
    };
    const clearFilters = () : void => {
      setFilters.restaurantName(null);
      setFilters.customerRating(null);
      setFilters.distance(null);
      setFilters.price(null);
      setFilters.cuisine(null);
    };
    const areFiltersEmpty = () : boolean => filters.price === null
    && (filters.cuisine === '' || filters.cuisine === null) && (filters.restaurantName === '' || filters.restaurantName === null )
    && filters.customerRating === null && filters.distance === null;
  
    return [filters, setFilters, clearFilters, areFiltersEmpty];
  };
  
  export { useFilters };
  
