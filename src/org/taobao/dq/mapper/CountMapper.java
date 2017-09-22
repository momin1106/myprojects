	package org.taobao.dq.mapper;
	
	import org.taobao.dq.bean.Count;
	
	public interface CountMapper {
		
		//更新统计记录
		public Integer  add(Count count);
				
		//查询最新的统计
		public Count query(String time);
	}
