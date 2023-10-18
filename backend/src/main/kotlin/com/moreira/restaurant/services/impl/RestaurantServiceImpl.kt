package com.moreira.restaurant.services.impl

import com.moreira.restaurant.entities.FilterParams
import com.moreira.restaurant.models.Restaurant
import com.moreira.restaurant.entities.RestaurantCuisine
import com.moreira.restaurant.exceptions.BlankInputException
import com.moreira.restaurant.exceptions.RatingException
import com.moreira.restaurant.repositories.AbstractRepository
import com.moreira.restaurant.utils.Constants.BLANK_INPUT_ERROR
import com.moreira.restaurant.utils.Constants.CASE_INSENTIVE
import com.moreira.restaurant.utils.Constants.CUISINE
import com.moreira.restaurant.utils.Constants.CUISINES
import com.moreira.restaurant.utils.Constants.CUISINE_DETAILS
import com.moreira.restaurant.utils.Constants.CUISINE_DETAILS_NAME
import com.moreira.restaurant.utils.Constants.CUISINE_ID
import com.moreira.restaurant.utils.Constants.CUSTOMER_RATING
import com.moreira.restaurant.utils.Constants.DISTANCE
import com.moreira.restaurant.utils.Constants.ID
import com.moreira.restaurant.utils.Constants.INVALID_RATING
import com.moreira.restaurant.utils.Constants.NAME
import com.moreira.restaurant.utils.Constants.PRICE
import com.moreira.restaurant.utils.Constants.RESTAURANTS
import com.moreira.restaurant.utils.Constants.RESTAURANT_NAME
import org.springframework.data.domain.Sort
import org.springframework.data.mongodb.core.aggregation.Aggregation
import org.springframework.data.mongodb.core.aggregation.AggregationResults
import org.springframework.data.mongodb.core.aggregation.LookupOperation
import org.springframework.data.mongodb.core.aggregation.SortOperation
import org.springframework.data.mongodb.core.query.Criteria


import org.springframework.stereotype.Service


@Service
class RestaurantServiceImpl(repository: AbstractRepository<Restaurant>) : AbstractServiceImpl<Restaurant>(repository) {

    fun findAllRestaurantCuisine():List<RestaurantCuisine> {

        val lookupOperation = LookupOperation.newLookup()
            .from(CUISINES)
            .localField(CUISINE_ID)
            .foreignField(ID)
            .`as`(CUISINE_DETAILS)

        val aggregation = Aggregation.newAggregation(
            lookupOperation,
            Aggregation.unwind(CUISINE_DETAILS)
        )

        val results: AggregationResults<RestaurantCuisine> = mongoTemplate
            .aggregate(
                aggregation,
                RESTAURANTS,
                RestaurantCuisine::class.java
            )

        return results.mappedResults


    }


    fun findBy(params: FilterParams) : List<RestaurantCuisine> {

        validateParams(params)

        val query = buildQuery(params)

        val results: AggregationResults<RestaurantCuisine> = mongoTemplate
            .aggregate(
                query,
                RESTAURANTS,
                RestaurantCuisine::class.java
            )
        return results.mappedResults
    }

    fun validateParams(params: FilterParams) {
        if (params.restaurantName?.isBlank() == true) {
            throw BlankInputException(BLANK_INPUT_ERROR + RESTAURANT_NAME)
        }
        if (params.cuisine?.isBlank() == true) {
            throw BlankInputException(BLANK_INPUT_ERROR + CUISINE)
        }
        if (isHigherThenFive(params.customerRating?.toInt())) {
            throw RatingException(INVALID_RATING)
        }
    }

    private fun isHigherThenFive(customerRating: Int?): Boolean {
        return customerRating != null && customerRating > 5
    }

    fun buildQuery(params: FilterParams): Aggregation {

        val criteria = Criteria()

        if (params.restaurantName != null) {
            criteria.and(NAME).regex(params.restaurantName, CASE_INSENTIVE)
        }
        if (params.customerRating != null) {
            criteria.and(CUSTOMER_RATING).gte(params.customerRating.toInt())
        }
        if (params.distance != null) {
            criteria.and(DISTANCE).lte(params.distance.toInt())
        }
        if (params.price != null) {
            criteria.and(PRICE).lte(params.price.toInt())
        }

        val cuisineCriteria = Criteria()
        if (params.cuisine != null) {
            cuisineCriteria.and(CUISINE_DETAILS_NAME).regex(params.cuisine, CASE_INSENTIVE)
        }

        val lookupOperation = LookupOperation.newLookup()
            .from(CUISINES)
            .localField(CUISINE_ID)
            .foreignField(ID)
            .`as`(CUISINE_DETAILS)

        val sortOperation = SortOperation(
            Sort.by(
                Sort.Order.asc(DISTANCE),
                Sort.Order.desc(CUSTOMER_RATING),
                Sort.Order.asc(PRICE),
                Sort.Order.asc(NAME)
            )
        )

        return Aggregation.newAggregation(
            Aggregation.match(criteria),
            lookupOperation,
            Aggregation.unwind(CUISINE_DETAILS),
            Aggregation.match(cuisineCriteria),
            sortOperation,
            Aggregation.limit(5)
        )
    }
}