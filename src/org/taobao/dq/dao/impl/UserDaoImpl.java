	
	package org.taobao.dq.dao.impl;
	
	import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.bean.Page;
import org.taobao.dq.bean.User;
import org.taobao.dq.dao.BaseDao;
import org.taobao.dq.dao.UserDao;
import org.taobao.dq.mapper.UserMapper;
	
	@Repository
	public class UserDaoImpl extends BaseDao implements UserDao {
	
		//查询所有用户
		@Override
		public Page<User> queryAll(int pageCode,int pageSize) {
			Page<User> page= new Page<User>();
			page.setPc(pageCode);
			page.setPs(pageSize);
			Integer tr=getCount();//得到总记录数
			page.setTr(tr);
			List<User> list=getMapper(UserMapper.class).queryAll((pageCode-1)*pageSize,pageSize);
			page.setBeanList(list);
			return page;
		}
	
		//通过姓名和密码查询用户
		@Override
		public User queryByNamePass(String name, String pass) {
		
			return getMapper(UserMapper.class).queryByNamePass(name, pass);
		}
	
		//通过姓名查询用户
		@Override
		public List<User> queryByName(String name) {
			
			return getMapper(UserMapper.class).queryByName(name);
		}
		
		//按id查询用户
		@Override
		public User queryById(Integer id){
			return getMapper(UserMapper.class).queryById(id);
			
		}
		
		//修改用户
		@Override
		public int modifyUser(User user) {
			return getMapper(UserMapper.class).modifyUser(user);
		}
	
		//删除用户
		@Override
		public int deleteUser(int id) {
			return getMapper(UserMapper.class).deleteUser(id);
		}

		//添加用户
		@Override
		public int addUser(User user) {
			return getMapper(UserMapper.class).addUser(user);
		}
	
		//获取用户的数据总数
		public Integer getCount(){
			return getMapper(UserMapper.class).getCount();
		}

		//获取商家的数据总数
		@Override
		public Integer getBusinessCount(){
			return getMapper(UserMapper.class).getBusinessCount();
		}

		//查询最新注册的用户
		@Override
		public List<User> getNewUser() {
		
			return getMapper(UserMapper.class).queryNewUser();
		}
		
		//查询最新注册的商家
		@Override
		public List<User> getNewStore() {
			
			return getMapper(UserMapper.class).queryNewStore();
		}
	}
