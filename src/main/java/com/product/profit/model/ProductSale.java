package com.product.profit.model;

import java.sql.Date;
import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
public class ProductSale {
	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
		long sid;
		String scategory;
		String sname;
		int scode;
		@JsonFormat(pattern="yyyy-MM-dd")
		Date sdate;
		int squantity;
		int sprice;
		int stotalprice;
		int syear;
		public long getSid() {
			return sid;
		}
		public void setSid(long sid) {
			this.sid = sid;
		}
		public String getScategory() {
			return scategory;
		}
		public void setScategory(String scategory) {
			this.scategory = scategory;
		}
		public String getSname() {
			return sname;
		}
		public void setSname(String sname) {
			this.sname = sname;
		}
		public int getScode() {
			return scode;
		}
		public void setScode(int scode) {
			this.scode = scode;
		}
		public Date getSdate() {
			return sdate;
		}
		public void setSdate(Date sdate) {
			this.sdate = sdate;
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(sdate);
			 this.syear=calendar.get(Calendar.YEAR);
		}
		public int getSquantity() {
			return squantity;
		}
		public void setSquantity(int squantity) {
			this.squantity = squantity;
		}
		public int getSprice() {
			return sprice;
		}
		public void setSprice(int sprice) {
			this.sprice = sprice;
		}
		public int getStotalprice() {
			return stotalprice;
		}
		public void setStotalprice(int stotalprice) {
			this.stotalprice = stotalprice;
		}

}
