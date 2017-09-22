package org.taobao.lgw.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.taobao.dq.bean.User;
import org.taobao.dq.dao.UserDao;
import org.taobao.lgw.service.CustomerService;

@Repository
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	UserDao dao;
	
	@Override
	public User getCustomerByNameAndPwd(String name, String pwd) {
		// TODO Auto-generated method stub
		User user = null;
		try{
			user = dao.queryByNamePass(name, pwd);
		}catch(Exception e){
			System.out.println("查询错误");
		}
		return user;
	}

	@Override
	public int addcustomer(User customer) {
		// TODO Auto-generated method stub
		return dao.addUser(customer);
	}

	@Override
	public User getCustomerByName(String name) {
		// TODO Auto-generated method stub
		List<User> uList = dao.queryByName(name);
		return uList.size() == 0 ? null : uList.get(0);
	}
	


}
