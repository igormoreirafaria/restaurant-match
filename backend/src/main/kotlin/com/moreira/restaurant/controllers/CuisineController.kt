package com.moreira.restaurant.controllers

import com.moreira.restaurant.entities.FilterParams
import com.moreira.restaurant.models.Restaurant
import com.moreira.restaurant.entities.RestaurantCuisine
import com.moreira.restaurant.models.Cuisine
import com.moreira.restaurant.services.impl.CuisineServiceImpl
import com.moreira.restaurant.services.impl.RestaurantServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/cuisine")
class CuisineController {
    @Autowired
    private lateinit var cuisineService: CuisineServiceImpl

    @GetMapping("/findAll")
    fun findAll() : List<Cuisine> {
        return cuisineService.findAll()
    }
}