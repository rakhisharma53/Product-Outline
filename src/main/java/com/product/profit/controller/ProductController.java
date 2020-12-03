package com.product.profit.controller;

import java.sql.Date;
//import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.profit.model.ProductPurchase;
import com.product.profit.model.ProductSale;
import com.product.profit.services.PurchaseServices;
import com.product.profit.services.SaleServices;
@CrossOrigin
@RestController
public class ProductController {

	@Autowired
	private PurchaseServices pservice;
	@Autowired
	private SaleServices sservice;

	
//  @GetMapping("/")
//	  
//	  @ResponseBody public String home() { return "Product Management System"; }
	 
	//////////////////////////// Product Purchase///////////////////////////////////
	  @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping(value="/pproducts")
	public List<ProductPurchase> getProducts() {
		return this.pservice.getProducts();
	}

	@GetMapping("/pproducts/{pid}")
	public ProductPurchase getProduct(@PathVariable String pid) {
		return this.pservice.getProduct(Long.parseLong(pid));
	}

	@PostMapping("/pproducts")
	public ProductPurchase addProducts(@RequestBody ProductPurchase ppurchase) {
		return this.pservice.addProduct(ppurchase);
	}

	@PutMapping("/pproducts")
	public ProductPurchase updateProducts(@RequestBody ProductPurchase ppurchase) {
		return this.pservice.updateProduct(ppurchase);
	}

	@DeleteMapping("/pproducts/{pid}")
	public ResponseEntity<HttpStatus> deleteProduct(@PathVariable String pid) {
		try {
			this.pservice.deleteProduct(Long.parseLong(pid));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	////////////////////////////////////////////////// Product Sale/////////////////////////////////////
	@GetMapping("/sproducts")
	public List<ProductSale> getSaleProducts() {
		return this.sservice.getSaleProducts();
	}

	@GetMapping("/sproducts/{sid}")
	public ProductSale getSaleProduct(@PathVariable String sid) {
		return this.sservice.getSaleProduct(Long.parseLong(sid));
	}

	@PostMapping("/sproducts")
	public ProductSale addSaleProducts(@RequestBody ProductSale psale) {
		return this.sservice.addSaleProduct(psale);
	}

	@PutMapping("/sproducts")
	public ProductSale updateSaleProducts(@RequestBody ProductSale ssale) {
		return this.sservice.updateSaleProduct(ssale);
	}

	@DeleteMapping("/sproducts/{sid}")
	public ResponseEntity<HttpStatus> deleteSaleProduct(@PathVariable String sid) {
		try {
			this.sservice.deleteSaleProduct(Long.parseLong(sid));
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	//////////////////////////Profit Calculation///////////////////////////////
	
	//Profit up to particular date.
	
	@GetMapping("/profitdate/{pdate}")
	@ResponseBody
	public String getPtotalprice(@PathVariable Date pdate) {
		System.out.println("mappinggggggggggggggggggg1");
		return this.pservice.findByDate(pdate);
	}
	//Profit on particular products(Dairy,Fruits) according to year
	
	@GetMapping("/profityear/{pyear}/{pcategory}")
	@ResponseBody
	public String getProfitYear(@PathVariable int pyear,@PathVariable String pcategory) {
		System.out.println("mappinggggggggggggggggggg2"+pyear);
		System.out.println("mappinggggggggggggggggggg2"+pcategory);
		return this.pservice.findByYear(pyear,pcategory);
	}
	// Profit based on product year and name.
	@GetMapping("/profitbyname/{pyear}/{pname}")
	@ResponseBody
	public String getProfitPname(@PathVariable int pyear,@PathVariable String pname) {
		System.out.println("mappinggggggggggggggggggg2"+pyear);
		System.out.println("mappinggggggggggggggggggg2"+pname);
		return this.pservice.findByPname(pyear,pname);
	}
	//Profit according to year and price.
	@GetMapping("/profitbyprice/{pyear}/{pprice}")
	@ResponseBody
	public String getProfitByPrice(@PathVariable int pyear,@PathVariable int pprice) {
		System.out.println("mappinggggggggggggggggggg2"+pyear);
		System.out.println("mappinggggggggggggggggggg2"+pprice);
		return this.pservice.findByPrice(pyear,pprice);
	}
}
