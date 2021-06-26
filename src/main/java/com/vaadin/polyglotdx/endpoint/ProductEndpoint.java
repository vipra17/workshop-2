package com.vaadin.polyglotdx.endpoint;

import com.vaadin.connect.VaadinService;
import com.vaadin.connect.auth.AnonymousAllowed;
import com.vaadin.polyglotdx.data.Product;
import com.vaadin.polyglotdx.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@VaadinService
public class ProductEndpoint {

    @Autowired
    private ProductRepository repository;

    @AnonymousAllowed
    public List<Product> list() {
        return repository.findAll();
    }
}
