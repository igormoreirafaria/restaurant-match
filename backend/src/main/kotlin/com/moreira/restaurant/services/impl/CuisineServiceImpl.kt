package com.moreira.restaurant.services.impl

import com.moreira.restaurant.models.Cuisine
import com.moreira.restaurant.repositories.AbstractRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Service
class CuisineServiceImpl(repository: AbstractRepository<Cuisine>) : AbstractServiceImpl<Cuisine>(repository) {

}