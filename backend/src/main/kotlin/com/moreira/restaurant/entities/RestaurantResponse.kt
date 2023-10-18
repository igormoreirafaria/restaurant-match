package com.moreira.restaurant.entities

import com.moreira.restaurant.models.Restaurant
import lombok.Data

@Data
class RestaurantResponse(
    val restaurants: List<Restaurant>,
    val total: Int,
)