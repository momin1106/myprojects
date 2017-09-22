package org.taobao.dq.service;

import java.util.List;

import org.taobao.dq.bean.Picture;

public interface PictureService {
	//保存上传图片
	public Integer savePicture(Picture picture);
	
	//查询图片导航
	public List<Picture> queryAllPicture();
	
	//删除id
	public Integer deletePicture(Integer id);
	
	//更换图片
	public Integer changePicture(Picture picture);
}
