package com.moreira.restaurant.entities

import com.moreira.restaurant.models.Cuisine
import lombok.Data

@Data
class FilterParams(
    val restaurantName: String?,
    val customerRating: String?,
    val distance: String?,
    val price: String?,
    val cuisine: String?
)