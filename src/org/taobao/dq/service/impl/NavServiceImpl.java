	package org.taobao.dq.service.impl;
	
	import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.taobao.dq.bean.Navgiation;
import org.taobao.dq.dao.NavDao;
import org.taobao.dq.service.NavService;
	
	@Service
	public class NavServiceImpl implements NavService {
		
		@Autowired
		NavDao dao;
		
		//查询所有导航
		@Override
		public List<Navgiation> queryAll() {
		
			return dao.queryAll();
		}
	
		//添加导航
		@Override
		public Integer addNav(Navgiation nav) {
			
			return dao.addNav(nav);
		}
	
		//修改导航
		@Override
		public Integer updateNav(Navgiation nav) {
			
			return dao.updateNav(nav);
		}
	
		//删除导航
		@Override
		public Integer deleteNav(Integer id) {
			
			return dao.deleteNav(id);
		}
		//根据id查找导航
		
		@Override
		public Navgiation queryNavById(Integer id) {
		
			return dao.queryNavById(id);
		}
	
	}
