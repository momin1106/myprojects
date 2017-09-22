package org.taobao.dq.service;

import java.util.List;

import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.User;

public  interface UserService {
	
	//查询所有用户
	public Page<User> queryAll(Integer pc,Integer ps);
	
	//用户登录
	public User login(String name,String pass);
	
	//根据姓名查询
	public List<User>  queryByName(String name);
	
	//根据id查询
	public User  queryById(Integer id);
	
	
	//查询最新注册的用户
	public List<User> queryNewUser();
	
	//查询最新注册的商家
	public List<User> queryNewStore();
	
	//添加用户
	public int addUser(User user);
	
	//修改用户
	public int modifyUser(User user);
	
	//删除用户
	public int deleteUser(int id);
}
