import { useEffect, useState } from "react";
import { RestaurantItem } from "./RestaurantItem/RestaurantItem";
import { RestaurantCuisineResponse, getAllRestaurant, getRestaurantByParams } from "./api/ListManager";
import { StyledContainer, StyledList } from "./styles";
import { GostList } from "../../shared/ghost/list/GhostList";
import { Filters } from "./Filters/Filters";
import { FilterParams, useFilters } from "../../shared/filters/FilterParams";
import axios, { AxiosError } from "axios";

const RestaurantList = () :JSX.Element => {

    const [restaurantResponse, setRestaurantResponse] = useState<RestaurantCuisineResponse>(
        {} as RestaurantCuisineResponse,
    )
    const [isFetching, setIsFetching] = useState<boolean>(false)
    const [filters, setFilter, clearFilters, areFiltersEmpty] = useFilters();
    const [nameError, setNameError] = useState<boolean>(false)
    const [cuisineError, setCuisineError] = useState<boolean>(false)

    const fetchRestaurantByFilter = async (
        filter: FilterParams,
        callback: () => void,
    ) => {
        try {
            setIsFetching(true);
            const response = await getRestaurantByParams(filter);
            console.log(restaurantResponse.restaurants);
            setRestaurantResponse(response);
        } catch (error) 
        {   
            const axiosError:AxiosError = error as AxiosError;
            const errorField: string = axiosError.response?.data as string

            setNameError(errorField.includes("Restaurant name"))
            console.log(errorField)
            setCuisineError(errorField.includes("Cuisine"))
        } finally {
            setIsFetching(false)    
        }
    };

    const reFetch = async () => {

        if (areFiltersEmpty()) {
            fetchAllRestaurant()
        } else {
            await fetchRestaurantByFilter(filters, () => null);
        }

        

        
      };

    const fetchAllRestaurant = async () => {
        setIsFetching(true);
        const response = await getAllRestaurant();
        setRestaurantResponse(response);
        setIsFetching(false)    
    };

    useEffect(() => {
        (async () => {
            await Promise.all([
                fetchAllRestaurant(),
            ]);
        })();
    }, []);

    const renderList = () => (
        <div>
            {  restaurantResponse.restaurants.map((el) => {
                return (
                    <RestaurantItem
                        key={el.name}
                        name={el.name}
                        customerRating={el.customerRating}
                        distance={el.distance}
                        price={el.price}
                        cuisineName={el.cuisineDetails.name}
                    />
                )
            })}
        </div>
    );

    return (
        <StyledContainer maxWidth="md">
            <Filters
                onSearch={reFetch}
                filters={filters}
                setFilter={setFilter}
                clearFilters={clearFilters}
                nameError={nameError}
                setNameError={setNameError}
                cuisineError={cuisineError}
                setCuisineError={setCuisineError}
            />
            
            <StyledList>
                {isFetching ? <GostList/> : restaurantResponse.restaurants && renderList()}            
            </StyledList>
            
        </StyledContainer>
    )
}
export { RestaurantList };
