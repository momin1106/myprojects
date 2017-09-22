package org.taobao.yyj.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.yyj.bean.ShoppingCar;
import org.taobao.yyj.dao.MyBaseDao;
import org.taobao.yyj.dao.ShoppingCarDao;
import org.taobao.yyj.mapper.ShoppingCarMapper;


@Repository
public class ShoppingCarImpl extends MyBaseDao implements ShoppingCarDao {

	@Override
	public List<ShoppingCar> getAllCar() {
		return getMapper(ShoppingCarMapper.class).getAllCar();
	}

	@Override
	public void addToCar(ShoppingCar car) {
		getMapper(ShoppingCarMapper.class).addToCar(car);
	}

	public ShoppingCar getCarById(int id){
		return getMapper(ShoppingCarMapper.class).getCarById(id);
	}

	@Override
	public Integer getCount() {
		return getMapper(ShoppingCarMapper.class).getCount();
	}

	@Override
	public List<ShoppingCar> getCarByUid(Integer id) {
		
		return getMapper(ShoppingCarMapper.class).getCarByUid(id);
	}

}
