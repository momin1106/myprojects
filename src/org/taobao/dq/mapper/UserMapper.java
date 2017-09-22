	
	package org.taobao.dq.mapper;
	
	import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.User;
		
	public interface UserMapper {
	
			//分页查询所有用户
			public List<User> queryAll(@Param("pageCode")int pageCode,@Param("pageSize")int pageSize);
			
			//查询总用户数	
			public Integer getCount();
			
			//查询总商家数
			public Integer getBusinessCount();
			
			//根据用户和密码查询（登录）
			public User queryByNamePass(@Param("name")String name,@Param("pass")String pass);
				
			//根据姓名查询
			public List<User> queryByName(@Param("name")String name);
			
			//根据id查询
			public User queryById(@Param("id")Integer id);
			
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
