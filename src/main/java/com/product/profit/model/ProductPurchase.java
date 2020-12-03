package com.product.profit.model;

import java.sql.Date;
import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class ProductPurchase {
	
@Id
//@GeneratedValue(strategy=GenerationType.IDENTITY)
	long pid;
public ProductPurchase()
{
	}
	public ProductPurchase(long pid, String pcategory, String pname, int pcode, Date pdate, int pquantity, int pprice,
		int ptotalprice,int pyear) {
	super();
	this.pid = pid;
	this.pcategory = pcategory;
	this.pname = pname;
	this.pcode = pcode;
	this.pdate = pdate;
	this.pquantity = pquantity;
	this.pprice = pprice;
	this.ptotalprice = ptotalprice;
}
	String pcategory;
	String pname;
	int pcode;
	@JsonFormat(pattern="yyyy-MM-dd")
	Date pdate;
	int pquantity;
	int pprice;
	int ptotalprice;
	int pyear;
	
	public long getPid() {
		return pid;
	}
	public void setPid(long pid) {
		this.pid = pid;
	}
	public String getPcategory() {
		return pcategory;
	}
	public void setPcategory(String pcategory) {
		this.pcategory = pcategory;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public int getPcode() {
		return pcode;
	}
	public void setPcode(int pcode) {
		this.pcode = pcode;
	}
	public Date getPdate() {
		return pdate;
	}
	public void setPdate(Date pdate) {
		this.pdate = pdate;
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(pdate);
		 this.pyear=calendar.get(Calendar.YEAR);
	}
	public int getPquantity() {
		return pquantity;
	}
	public void setPquantity(int pquantity) {
		this.pquantity = pquantity;
	}
	public int getPprice() {
		return pprice;
	}
	public void setPprice(int pprice) {
		this.pprice = pprice;
	}
	public long getPtotalprice() {
		return ptotalprice;
	}
	public void setPtotalprice(int ptotalprice) {
		this.ptotalprice = ptotalprice;
	}
	}
