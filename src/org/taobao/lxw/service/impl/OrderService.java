package org.taobao.lxw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.lxw.bean.Goods;
import org.taobao.lxw.bean.Order;
import org.taobao.lxw.dao.IOrderDao;
import org.taobao.lxw.service.IOrderService;

@Service
public class OrderService implements IOrderService {

	@Autowired
	IOrderDao dao;
	
	@Override
	public List<Order> getAllOrderById(Integer id) {
		return dao.getAllOrderById(id);
	}
	@Override
	public Order getOrderById(Integer id) {
		return dao.getOrderById(id);
	}
	@Override
	public Integer deleteOrder(Integer id) {
		return dao.deleteOrder(id);
	}
	@Override
	public List<Order> getOrderByName(String name) {
		return dao.getOrderByName(name);
	}
	@Override
	public Integer getOrderCount(Integer id) {
		return dao.getOrderCount(id);
	}
	@Override
	public List<Order> getAllOrderPageById(Integer id, Integer pageIndex, Integer pageSize) {
		return dao.getAllOrderPageById(id, pageIndex, pageSize);
	}
	

}
