package org.taobao.dq.controler;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.taobao.dq.bean.Picture;
import org.taobao.dq.service.PictureService;

import com.google.gson.Gson;

@Controller
@RequestMapping("/picture")
public class PictureControl {

	@Autowired
	PictureService ps;
	
	Gson gson =new Gson();
	
	//保存图片
	@RequestMapping(value="upload",method=RequestMethod.POST)
	public String upload(Picture pic,Model model,@RequestParam("file")MultipartFile file,HttpServletRequest req){
		System.out.println(pic);
		try {
			String name=file.getOriginalFilename();//获取上传文件的名称
			long img= System.currentTimeMillis();//使用时间戳
			//System.out.println(req.getContextPath());
			String path=  req.getSession().getServletContext().getRealPath("/foreground");
			System.out.println(path);
			String saveName=path+"\\img\\"+img+"_"+name;//保存到数据库的save路径
			file.transferTo(new File(saveName));//上传到img文件夹下
			pic.setUrl(img+"_"+name);
			if(ps.savePicture(pic)>0){
				model.addAttribute("msg", "上传成功");
				return "redirect:/background/navgation/navPicture.jsp";
			}
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
		return "forward:/background/index.jsp";
	}
	
	//查询所有图片
	@RequestMapping(value="all",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String getAll(){
		List<Picture> list= ps.queryAllPicture();
		String msg="";
		if(list!=null){
			msg=gson.toJson(list);
		}
		return msg;
	}
	//更换图片
	@RequestMapping(value="change",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String changePicture(Picture pc){
		System.out.println(pc);
		if(ps.changePicture(pc)>0){
			return "success";
		}
		return "failure";
	}
	
	//删除图片
	@RequestMapping(value="del",produces="text/plain;charset=utf-8")
	@ResponseBody
	public String delPicture(Integer id){
		if(ps.deletePicture(id)>0){
			return "success";
		}
		return "failure";
	}
}
