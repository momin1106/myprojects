package org.taobao.yyj.mapper;

import java.util.List;

import org.taobao.yyj.bean.ShoppingCar;

public interface ShoppingCarMapper {
	
	public List<ShoppingCar> getAllCar();
	
	public void addToCar(ShoppingCar car);
	
	public ShoppingCar getCarById(int id);
	
	public Integer getCount();
	
	public List<ShoppingCar> getCarByUid(Integer id);
}
