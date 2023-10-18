package com.moreira.restaurant.services.impl

import com.moreira.restaurant.repositories.AbstractRepository
import com.moreira.restaurant.services.IAbstractService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.transaction.annotation.Transactional

@Transactional
abstract class AbstractServiceImpl<T>(protected val repository: AbstractRepository<T>) : IAbstractService<T> {

    @Autowired
    protected lateinit var mongoTemplate: MongoTemplate

    fun findAll():List<T> {
        return repository.findAll()
    }
}