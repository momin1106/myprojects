
	package org.taobao.dq.mapper;
	
	import java.util.List;
	
	import org.taobao.dq.bean.Navgiation;
	
	public interface NavMapper {
	
			//查询所有导航
			public List<Navgiation> queryAllNav();
			
			//根据id查找导航
			public Navgiation queryNavById(Integer id);
			//添加导航
			public Integer addNav(Navgiation nav);
			
			//修改导航
			public Integer updateNav(Navgiation nav);
			
			//删除导航
			public Integer deleteNav(Integer id);
	}
