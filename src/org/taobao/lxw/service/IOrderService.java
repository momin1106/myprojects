package org.taobao.lxw.service;

import java.util.List;

import org.taobao.lxw.bean.Order;
import org.taobao.lxw.mapper.IOrderMapper;

public interface IOrderService {
	List<Order> getAllOrderById(Integer id);
	Order getOrderById(Integer id);
	//删除订单
	Integer deleteOrder(Integer id);
	//根据买家名来查找他的订单
	List<Order> getOrderByName(String name);
	//获得订单总数
	Integer getOrderCount(Integer id);
	//分页
		List<Order> getAllOrderPageById(Integer id, Integer pageIndex, Integer pageSize);
	
}
