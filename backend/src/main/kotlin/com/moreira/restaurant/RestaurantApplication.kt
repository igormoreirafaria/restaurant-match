package com.moreira.restaurant

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.ComponentScan
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@ComponentScan(basePackages = arrayOf("com.moreira"))
@EnableMongoRepositories(basePackages = arrayOf("com.moreira.restaurant.repositories"))
class RestaurantApplication

fun main(args: Array<String>) {
    runApplication<RestaurantApplication>(*args)
}
