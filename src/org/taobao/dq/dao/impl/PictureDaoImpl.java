package org.taobao.dq.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.taobao.dq.bean.Picture;
import org.taobao.dq.dao.BaseDao;
import org.taobao.dq.dao.PictureDao;
import org.taobao.dq.mapper.PictureMapper;

@Repository
public class PictureDaoImpl extends BaseDao implements PictureDao {

	//保存图片
	@Override
	public Integer savePicture(Picture picture) {
		
		return getMapper(PictureMapper.class).savePicture(picture);
	}

	//查询图片
	@Override
	public List<Picture> queryAllPicture() {
		
		return getMapper(PictureMapper.class).queryAllPicture();
	}

	//删除图片
	@Override
	public Integer deletePicture(Integer id) {
		
		return  getMapper(PictureMapper.class).deletePicture(id);
	}
	
	
	//更换图片
	@Override
	public Integer changePicture(Picture picture) {
		
		return getMapper(PictureMapper.class).changePicture(picture);
	}

}
