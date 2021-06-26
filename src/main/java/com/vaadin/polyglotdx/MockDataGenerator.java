package com.vaadin.polyglotdx;

import com.vaadin.polyglotdx.data.Product;
import com.vaadin.polyglotdx.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.*;

@Component
public class MockDataGenerator {

    private Random random = new Random(System.currentTimeMillis());

    @Autowired
    private ProductRepository productRepository;

    private static final String[] PRODUCT_NAME = new String[] {
            "Cake", "Pastry", "Tart", "Muffin", "Biscuit", "Bread", "Bagel",
            "Bun", "Brownie", "Cookie", "Cracker", "Cheese Cake" };

    @PostConstruct
    public void populateEmptyDatabase() {
        createProducts(20);
    }

    private void createProducts(int count) {
        List<Product> entities = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            Product entity = new Product();
            entity.setProductName(random(PRODUCT_NAME));
            entity.setProductPrice(100 + random.nextInt(4900));
            entity.setGlutenFree(random.nextBoolean());
            entity.setLactoseFree(random.nextBoolean());
            entities.add(entity);
        }
        productRepository.saveAll(entities);
    }

    private String random(String[] options) {
        return options[random.nextInt(options.length)];
    }
}
