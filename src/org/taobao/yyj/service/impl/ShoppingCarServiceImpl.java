package org.taobao.yyj.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.yyj.bean.ShoppingCar;
import org.taobao.yyj.dao.ShoppingCarDao;
import org.taobao.yyj.mapper.ShoppingCarMapper;
import org.taobao.yyj.service.ShoppingCarService;

@Service
public class ShoppingCarServiceImpl implements ShoppingCarService {
	@Autowired
	ShoppingCarDao dao;
	
	@Override
	public List<ShoppingCar> getAllCar() {
		return dao.getAllCar();
	}

	@Override
	public void addToCar(ShoppingCar car){
		dao.addToCar(car);
	}
	public ShoppingCar getCarById(int id){
		return dao.getCarById(id);
	}

	@Override
	public Integer getCount() {
		return dao.getCount();
	}

	@Override
	public List<ShoppingCar> getCarByUid(Integer id) {
		return dao.getCarByUid(id);
	}
}
