package com.moreira.restaurant.controllers
import com.moreira.restaurant.entities.FilterParams
import com.moreira.restaurant.models.Restaurant
import com.moreira.restaurant.entities.RestaurantCuisine
import com.moreira.restaurant.entities.RestaurantCuisineResponse
import com.moreira.restaurant.entities.RestaurantResponse
import com.moreira.restaurant.exceptions.BlankInputException
import com.moreira.restaurant.services.impl.RestaurantServiceImpl
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/api/restaurants")
class RestaurantController {
    @Autowired
    private lateinit var restaurantService: RestaurantServiceImpl

    @GetMapping("/findAll")
    fun findAll() : ResponseEntity<out Any> {
        return try {
            val result: List<RestaurantCuisine> = restaurantService.findAllRestaurantCuisine()
            val restaurantResponse = RestaurantCuisineResponse(
                result,
                result.size
            )
            ResponseEntity.status(HttpStatus.OK).body(restaurantResponse)
        }catch (exception: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception.message)
        }

    }

    @PostMapping("/findByParameters",
        consumes = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun findAll(@RequestBody params: FilterParams ) : ResponseEntity<out Any> {
        return try {
            val result = restaurantService.findBy(params)
            val restaurantCuisineResponse = RestaurantCuisineResponse(
                result,
                result.size
            )
            ResponseEntity.status(HttpStatus.OK).body(restaurantCuisineResponse)
        }  catch (exception: BlankInputException) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception.message)
        } catch (exception: Exception) {
            ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(exception.message)
        }

    }
}