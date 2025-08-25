package com.sebas.backend.cartapp.backend_cartapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sebas.backend.cartapp.backend_cartapp.models.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    

}
