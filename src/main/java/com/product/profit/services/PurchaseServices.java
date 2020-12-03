package com.product.profit.services;

import java.sql.Date;
import java.util.List;

import org.springframework.data.repository.query.Param;

import com.product.profit.model.ProductPurchase;

public interface PurchaseServices {
	
	public List<ProductPurchase> getProducts();


	public ProductPurchase getProduct(long pid);


	public ProductPurchase addProduct(ProductPurchase pname);


	public ProductPurchase updateProduct(ProductPurchase pname);


	public void deleteProduct(long parseLong);
	
	public String findByDate(@Param("date") Date date);
	
	public String findByYear(@Param("pyear")int pyear,@Param("pcategory")String pcategory);
	
	public String findByPname(@Param("pyear")int pyear,@Param("pname")String pname);
	
	public String findByPrice(@Param("pyear")int pyear,@Param("pprice")int pprice);
	
	



}
