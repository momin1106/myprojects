	
	package org.taobao.dq.dao.impl;
	
	import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.bean.Navgiation;
import org.taobao.dq.dao.BaseDao;
import org.taobao.dq.dao.NavDao;
import org.taobao.dq.mapper.NavMapper;
	
	@Repository
	public class NavDaoImpl extends BaseDao implements NavDao {
	
		//查找所有导航
		@Override
		public List<Navgiation> queryAll() {
			
			return getMapper(NavMapper.class).queryAllNav();
		}
	
		//添加导航
		@Override
		public Integer addNav(Navgiation nav) {
			
			return getMapper(NavMapper.class).addNav(nav);
		}
	
		//修改导航
		@Override
		public Integer updateNav(Navgiation nav) {
			
			return getMapper(NavMapper.class).updateNav(nav);
		}
	
		//删除导航
		@Override
		public Integer deleteNav(Integer id) {
			
			return getMapper(NavMapper.class).deleteNav(id);
		}
		
		//根据id查询导航
		@Override
		public Navgiation queryNavById(Integer id) {
		
			return getMapper(NavMapper.class).queryNavById(id);
		}
	
	}
