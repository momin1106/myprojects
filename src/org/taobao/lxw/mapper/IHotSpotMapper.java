package org.taobao.lxw.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.taobao.lxw.bean.HotSpot;

public interface IHotSpotMapper {
	//根据热点id修改热点信息
	 Integer updateHotSpot(HotSpot spot);
	 //查询所有热点信息
	 List<HotSpot> getAllHotSpot(@Param("pageIndex")Integer pageIndex,@Param("pageSize")Integer pageSize);
	 //通过热点名称查找热点
	 HotSpot  getHotSpotByName(String main);
	 //通过热点id来查找热点
	 HotSpot getHotSpotById(Integer id);
	 //获得热点总数
	 Integer getHotSpotCount();
	 
}
