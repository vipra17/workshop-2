package com.vaadin.polyglotdx.repository;

import com.vaadin.polyglotdx.data.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}

