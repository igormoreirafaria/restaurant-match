import { AxiosResponse } from "axios";
import api from "../../../shared/api";
import { RestaurantCuisineModel } from "../../../shared/types/RestaurantCuisine/RestaurantCuisineMode";
import { FilterParams } from "../../../shared/filters/FilterParams";

const getRestaurantData = ():
    Promise<AxiosResponse<RestaurantCuisineModel>> => api.get<RestaurantCuisineModel>(`api/restaurants/findAll`, {});


const getRestaurantDataByParams = (params: FilterParams):
    Promise<AxiosResponse<RestaurantCuisineModel>> => api.post<RestaurantCuisineModel>(`api/restaurants/findByParameters`, params);    
export {
    getRestaurantData,
    getRestaurantDataByParams,
}    