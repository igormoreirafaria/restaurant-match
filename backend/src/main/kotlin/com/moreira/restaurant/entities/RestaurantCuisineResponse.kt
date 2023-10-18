package com.moreira.restaurant.entities
import lombok.Data

@Data
class RestaurantCuisineResponse (
    val restaurants: List<RestaurantCuisine>,
    val total: Int,
)