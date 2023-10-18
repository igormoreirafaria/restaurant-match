package com.moreira.restaurant.entities

import com.moreira.restaurant.models.Cuisine
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field
@Document(collection = "restaurants")
class RestaurantCuisine (
    val name: String,
    @Field("customer_rating")
    val customerRating: Int,
    val distance: Int,
    val price: Int,
    @Field("cuisine_id")
    val cuisineId: String,
    val cuisineDetails: Cuisine
)
