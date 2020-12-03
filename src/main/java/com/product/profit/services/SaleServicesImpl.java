package com.product.profit.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.product.profit.dao.ProductSaleDao;
import com.product.profit.model.ProductSale;
@Service
public class SaleServicesImpl implements SaleServices {

@Autowired
private ProductSaleDao psdao;
@Override
	public List<ProductSale> getSaleProducts(){
		return psdao.findAll();
	}

@Override
public ProductSale getSaleProduct(long sid)
{
	return psdao.getOne(sid);
}

@Override
public ProductSale addSaleProduct(ProductSale psale) {
	psdao.save(psale);
	return psale;
}
@Override
public ProductSale updateSaleProduct(ProductSale psale ) {
	psdao.save(psale);
	return psale;
}
	

@Override
public void deleteSaleProduct(long parseLong) {
	ProductSale entity = psdao.getOne(parseLong);
	psdao.delete(entity);

}
}
