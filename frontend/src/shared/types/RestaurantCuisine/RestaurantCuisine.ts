import { Cuisine } from "../Cuisine/Cuisine";

export interface RestaurantCuisine {
    name:string,
    customerRating:string,
    distance:string,
    price:string,
    cuisineId:string,
    cuisineDetails: Cuisine
}