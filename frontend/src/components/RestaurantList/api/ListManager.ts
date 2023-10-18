import { FilterParams } from "../../../shared/filters/FilterParams";
import { RestaurantCuisine } from "../../../shared/types/RestaurantCuisine/RestaurantCuisine";
import { getRestaurantData, getRestaurantDataByParams } from "./ListService";

export interface RestaurantCuisineResponse {
    restaurants: RestaurantCuisine[];
    total : number;
}

const getAllRestaurant = async (): Promise<RestaurantCuisineResponse> => {
    const response = await getRestaurantData();
    return ({
        restaurants: response.data.restaurants,
        total: response.data.total
    });
}

const getRestaurantByParams = async (params:FilterParams): Promise<RestaurantCuisineResponse> => {
    const response = await getRestaurantDataByParams(params);
    return ({
        restaurants: response.data.restaurants,
        total: response.data.total
    });
}


export {
    getAllRestaurant,
    getRestaurantByParams,
}