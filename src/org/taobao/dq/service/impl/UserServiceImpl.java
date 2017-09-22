	
	package org.taobao.dq.service.impl;
	
	import java.util.List;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;
	import org.taobao.dq.bean.Page;
	import org.taobao.dq.bean.User;
	import org.taobao.dq.dao.UserDao;
	import org.taobao.dq.service.UserService;
	
	@Service
	public class UserServiceImpl implements UserService {
		
		@Autowired
		UserDao dao;
		
		//查询所有用户
		@Override
		public Page<User> queryAll(Integer pc,Integer ps) {
			
			return dao.queryAll(pc,ps);
		}
	
		//用户登录
		@Override
		public User login(String name, String pass) {
			
			return dao.queryByNamePass(name, pass);
		}
	
		//根据姓名查询用户
		@Override
		public List<User> queryByName(String name) {
		
			return dao.queryByName(name);
		}
		//根据id查询用户
		@Override
		public User queryById(Integer id){
			return dao.queryById(id);
		}
		
		//添加用户
		@Override
		public int addUser(User user){
			return dao.addUser(user);
		}
		
		//修改用户
		@Override
		public int modifyUser(User user) {
			
			return dao.modifyUser(user);
		}
	
		//删除用户
		@Override
		public int deleteUser(int id) {
			
			return dao.deleteUser(id);
		}
		
		//查询最新注册的用户
		@Override
		public List<User> queryNewUser() {
			return dao.getNewUser();
		}
		
		//查询最新注册的商家
		@Override
		public List<User> queryNewStore() {
			return dao.getNewStore();
		}
	
	}
