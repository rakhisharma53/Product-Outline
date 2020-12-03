package com.product.profit.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.product.profit.model.ProductSale;

public interface ProductSaleDao extends JpaRepository<ProductSale, Long> {

}
