package com.moreira.restaurant.models

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "cuisines")
data class Cuisine(
    val id : String,
    val name: String
)