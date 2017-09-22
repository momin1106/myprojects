package org.taobao.lxw.dao;

import java.util.List;

import org.taobao.lxw.bean.Order;

public interface IOrderDao {
	//根据商家id获得该店所有订单
	List<Order> getAllOrderById(Integer id);
	//根据订单id查询该订单
	Order getOrderById(Integer id);
	//删除订单
	Integer deleteOrder(Integer id);
	//根据买家名来查找他的订单
	List<Order> getOrderByName(String name);
	//获得当前店铺订单总数
	Integer getOrderCount(Integer id);
	//获得所有订单总数
	Integer getAllOrderCount();
	//分页
	List<Order> getAllOrderPageById(Integer id, Integer pageIndex, Integer pageSize);
}
