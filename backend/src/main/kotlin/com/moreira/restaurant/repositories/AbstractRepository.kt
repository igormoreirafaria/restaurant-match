package com.moreira.restaurant.repositories

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.NoRepositoryBean
import org.springframework.stereotype.Repository

@NoRepositoryBean
interface AbstractRepository<T>: MongoRepository<T, String> {

}