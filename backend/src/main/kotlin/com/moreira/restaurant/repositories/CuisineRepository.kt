package com.moreira.restaurant.repositories

import com.moreira.restaurant.models.Cuisine
import org.springframework.stereotype.Repository

@Repository
interface CuisineRepository : AbstractRepository<Cuisine> {
}