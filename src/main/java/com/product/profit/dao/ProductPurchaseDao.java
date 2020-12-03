package com.product.profit.dao;

import java.sql.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import com.product.profit.model.ProductPurchase;

public interface ProductPurchaseDao extends JpaRepository<ProductPurchase, Long> {

	//@Query("SELECT abc FROM Products AS abc WHERE abc.id=:id ")
	//public List<Products> findById(@Param("id") long id);
	@Query("SELECT sum(ptotalprice) FROM ProductPurchase AS pqr WHERE pqr.pdate <= :pdate ")
	public String findByDate(@PathVariable Date pdate);
	@Query("SELECT sum(stotalprice) FROM ProductSale AS pqr WHERE pqr.sdate <= :pdate ")
	public String findByDateSale(@PathVariable Date pdate);
	@Query("SELECT sum(ptotalprice) FROM ProductPurchase AS pqr WHERE pqr.pyear = :pyear AND  pqr.pcategory = :pcategory")
	public String findByYear(@PathVariable int pyear, @PathVariable String pcategory);
	@Query("SELECT sum(stotalprice) FROM ProductSale AS pqr WHERE pqr.syear = :pyear AND  pqr.scategory = :pcategory")
	public String findByYearSale(@PathVariable int pyear, @PathVariable String pcategory);
	@Query("SELECT sum(ptotalprice) FROM ProductPurchase AS pqr WHERE pqr.pyear = :pyear AND  pqr.pname = :pname")
	public String findByPname(@PathVariable int pyear, @PathVariable String pname);
	@Query("SELECT sum(stotalprice) FROM ProductSale AS pqr WHERE pqr.syear = :pyear AND  pqr.sname = :pname")
	public String findByPnameSale(@PathVariable int pyear, @PathVariable String pname);
	@Query("SELECT sum(ptotalprice) FROM ProductPurchase AS pqr WHERE pqr.pyear = :pyear AND  pqr.pprice <= :pprice")
	public String findByPrice(@PathVariable int pyear, @PathVariable int pprice);
	@Query("SELECT sum(stotalprice) FROM ProductSale AS pqr WHERE pqr.syear = :pyear AND  pqr.sprice <= :pprice")
	public String findByPriceSale(@PathVariable int pyear, @PathVariable int pprice);
}