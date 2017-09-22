package org.taobao.yyj.dao;

import java.util.List;

import org.taobao.yyj.bean.ShoppingCar;


public interface ShoppingCarDao {
	public List<ShoppingCar> getAllCar();
	
	public void addToCar(ShoppingCar car);
	
	public ShoppingCar getCarById(int id);
	
	public Integer getCount();
	
	public List<ShoppingCar> getCarByUid(Integer id);
}
