package com.sebas.backend.cartapp.backend_cartapp.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sebas.backend.cartapp.backend_cartapp.models.entities.Product;
import com.sebas.backend.cartapp.backend_cartapp.services.ProductService;

@RestController
@RequestMapping(path = "/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/products")
    public List<Product> productList() {
        return productService.findAll();
    }

}
