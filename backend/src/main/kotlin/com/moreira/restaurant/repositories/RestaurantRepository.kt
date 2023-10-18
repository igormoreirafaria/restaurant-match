package com.moreira.restaurant.repositories

import com.moreira.restaurant.models.Restaurant
import org.springframework.stereotype.Repository

@Repository
interface RestaurantRepository : AbstractRepository<Restaurant> {
}