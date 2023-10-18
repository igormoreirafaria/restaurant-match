package com.moreira.restaurant.models

import lombok.Data
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.data.mongodb.core.mapping.Field

@Data
@Document(collection = "restaurants")
data class Restaurant(
    val name: String,
    @Field("customer_rating")
    val customerRating: Int,
    val distance: Int,
    val price: Int,
    @Field("cuisine_id")
    val cuisineId: String,
)