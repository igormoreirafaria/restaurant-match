package com.moreira.restaurant.services

import com.moreira.restaurant.entities.FilterParams
import com.moreira.restaurant.entities.RestaurantCuisine
import com.moreira.restaurant.exceptions.BlankInputException
import com.moreira.restaurant.exceptions.RatingException
import com.moreira.restaurant.models.Cuisine
import com.moreira.restaurant.repositories.RestaurantRepository
import com.moreira.restaurant.services.impl.RestaurantServiceImpl
import com.moreira.restaurant.utils.Constants.BLANK_INPUT_ERROR
import com.moreira.restaurant.utils.Constants.CUISINE
import com.moreira.restaurant.utils.Constants.INVALID_RATING
import com.moreira.restaurant.utils.Constants.RESTAURANT_NAME
import junit.framework.Assert.assertEquals
import org.junit.Before
import org.junit.Test
import org.junit.jupiter.api.assertThrows
import org.mockito.Mockito.*
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.ActiveProfiles

@DataMongoTest
@ActiveProfiles("test")
@SpringBootTest(classes = [RestaurantServiceImpl::class])
class RestaurantServiceTest {
    private lateinit var restaurantService : RestaurantServiceImpl

    @Before
    fun setUp(){
        val mockRepository: RestaurantRepository = mock(RestaurantRepository::class.java)
        restaurantService = RestaurantServiceImpl(mockRepository)
    }


    @Test
    fun `exception is thrown when restaurant name is blank`() {
        val params = FilterParams(" ", null, null, null, null)
        assertThrows<BlankInputException> {
            restaurantService.validateParams(params)
        }
    }

    @Test
    fun `exception is thrown when cuisine is blank`() {
        val params = FilterParams(null, null, null, null, " ")
        assertThrows<BlankInputException> {
            restaurantService.validateParams(params)
        }
    }

    @Test
    fun `blank input exception message is valid for reataurant name`() {
        val params = FilterParams(" ", null, null, null, null)
        val exception = assertThrows<BlankInputException> {
            restaurantService.validateParams(params)
        }
        assertEquals(BLANK_INPUT_ERROR + RESTAURANT_NAME, exception.message)
    }

    @Test
    fun `blank input exception message is valid for cuisine`() {
        val params = FilterParams(" ", null, null, null, null)
        val exception = assertThrows<BlankInputException> {
            restaurantService.validateParams(params)
        }
        assertEquals(BLANK_INPUT_ERROR + CUISINE, exception.message)
    }


    @Test
    fun `customer rating is higher than maximum`() {

        val params = FilterParams(null, "6", null, null, null)
        val exception = assertThrows<RatingException> {
            restaurantService.validateParams(params)
        }
        assertEquals(INVALID_RATING, exception.message)
    }
}