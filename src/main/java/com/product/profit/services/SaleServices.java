package com.product.profit.services;

import java.util.List;

import com.product.profit.model.ProductSale;

public interface SaleServices {
	
	public List<ProductSale> getSaleProducts();


	public ProductSale getSaleProduct(long sid);


	public ProductSale addSaleProduct(ProductSale sname);


	public ProductSale updateSaleProduct(ProductSale sname);


	public void deleteSaleProduct(long parseLong);

}
