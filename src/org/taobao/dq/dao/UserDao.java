	
	package org.taobao.dq.dao;

	import java.util.List;
	import org.taobao.dq.bean.Page;
	import org.taobao.dq.bean.User;
	
	public  interface UserDao {
	
		//查询所有用户
		public Page<User> queryAll(int pageCode,int pageSize);
		
		//根据用户和密码查询（登录）
		public User queryByNamePass(String name,String pass);
		
		//根据姓名查询
		public List<User> queryByName(String name);
		
		//按id查询
		public User queryById(Integer id);
		
		//添加用户
		public int addUser(User user);
		
		//修改用户
		public int modifyUser(User user);
		
		//删除用户
		public int deleteUser(int id);
		
		//获取总普通用户数
		public Integer getCount();
		//查询最新的用户
		public List<User> getNewUser();
		
		//查询最新的用户
		public List<User> getNewStore();
		//获取商家总数
		public Integer getBusinessCount();
	}
