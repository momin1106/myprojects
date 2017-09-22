package org.taobao.lxw.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.dao.BaseDao;
import org.taobao.lxw.bean.HotSpot;
import org.taobao.lxw.dao.IHotSpotDao;
import org.taobao.lxw.mapper.IGoodsSortMapper;
import org.taobao.lxw.mapper.IHotSpotMapper;
@Repository 
public class HotSpotDao extends BaseDao implements IHotSpotDao{

	@Override
	public Integer updateHotSpot(HotSpot spot) {
		return getMapper(IHotSpotMapper.class).updateHotSpot(spot);
	}

	@Override
	public List<HotSpot> getAllHotSpot(Integer pageIndex, Integer pageSize) {
		return getMapper(IHotSpotMapper.class).getAllHotSpot((pageIndex-1)*pageSize, pageSize);
	}

	@Override
	public HotSpot getHotSpotByName(String main) {
		return getMapper(IHotSpotMapper.class).getHotSpotByName(main);
	}

	@Override
	public HotSpot getHotSpotById(Integer id) {

		return getMapper(IHotSpotMapper.class).getHotSpotById(id);
	}

	@Override
	public Integer getHotSpotCount() {
		return getMapper(IHotSpotMapper.class).getHotSpotCount();
	}

}
