package com.product.profit.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import com.product.profit.dao.ProductPurchaseDao;
import com.product.profit.model.ProductPurchase;
@Service
public class PurchaseServicesImpl implements PurchaseServices {

@Autowired
private ProductPurchaseDao pdao;
@Override
	public List<ProductPurchase> getProducts(){
		return pdao.findAll();
	}

@Override
public ProductPurchase getProduct(long pid)
{
	return pdao.getOne(pid);
}

@Override
public ProductPurchase addProduct(ProductPurchase ppurchase) {
	pdao.save(ppurchase);
	return ppurchase;
}
@Override
public ProductPurchase updateProduct(ProductPurchase ppurchase ) {
	pdao.save(ppurchase);
	return ppurchase;
}
	

@Override
public void deleteProduct(long parseLong) {
	ProductPurchase entity = pdao.getOne(parseLong);
	pdao.delete(entity);

}

/*
 * String pt=null; String st=null; int pr=0; String profit=null;
 */
@Override
public String findByDate(@PathVariable Date pdate){
	String pt=null;
	String st=null;
	int pr=0;
	String profit=null;
	try {
	System.out.println("now in serviceeeeeeeeeeeeeeeeee");
	pt= pdao.findByDate(pdate);
	st=pdao.findByDateSale(pdate);
	System.out.println(pt);
	System.out.println(st);
	pr=Integer.parseInt(st)-Integer.parseInt(pt);
	
	if(pr<0)
	{
	profit=Integer.toString(-pr)+"$ Loss";
	}
	else
	{
		profit=Integer.toString(pr)+"$ Profit";	
	}
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
	return profit;
	
}

@Override
public String findByYear(@PathVariable int pyear, @PathVariable String pcategory)
{
	String pt=null;
	String st=null;
	int pr=0;
	String profit=null;
	try {
	//String result=null;
	pt=pdao.findByYear(pyear, pcategory);
	st=pdao.findByYearSale(pyear, pcategory);
	System.out.println("resultttttttttttttttttttttttttttttt");
	System.out.print(pt);
	System.out.println(st);
	//return result;
	pr=Integer.parseInt(st)-Integer.parseInt(pt);
	System.out.println(pr);
	if(pr<0)
	{
	profit=Integer.toString(-pr)+"$ Loss";
	}
	else
	{
		profit=Integer.toString(pr)+"$ Profit";	
	}
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
	return profit;
	}
@Override
public String findByPname(@PathVariable int pyear, @PathVariable String pname)
{
	String pt=null;
	String st=null;
	int pr=0;
	String profit=null;
	try {
		
	//String result=null;
	pt=pdao.findByPname(pyear, pname);
	st=pdao.findByPnameSale(pyear, pname);
	//System.out.print(result);
	//return result;
	pr=Integer.parseInt(st)-Integer.parseInt(pt);
	if(pr<0)
	{
	profit=Integer.toString(-pr)+"$ Loss";
	}
	else
	{
		profit=Integer.toString(pr)+"$ Profit";	
	}
	}
	catch(Exception e)
	{
		e.printStackTrace();
	}
	return profit;
}

@Override
public String findByPrice(@PathVariable int pyear, @PathVariable int pprice)
{
	String pt=null;
	String st=null;
	int pr=0;
	String profit=null;
	//String result=null;
	try {
	pt=pdao.findByPrice(pyear, pprice);
	st=pdao.findByPriceSale(pyear, pprice);
	//System.out.print(result);
	pr=Integer.parseInt(st)-Integer.parseInt(pt);
	if(pr<0)
	{
	profit=Integer.toString(-pr)+"$ Loss";
	}
	else
	{
		profit=Integer.toString(pr)+"$ Profit";	
	}
	}
	catch(Exception e){
		e.printStackTrace();
	}
	return profit;
	}
}

