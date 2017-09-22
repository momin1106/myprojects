	package org.taobao.dq.controler;
	
	import java.text.SimpleDateFormat;
	import java.util.Date;
	import java.util.List;
	import javax.servlet.http.Cookie;
	import javax.servlet.http.HttpServletRequest;
	import javax.servlet.http.HttpServletResponse;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Controller;
	import org.springframework.ui.Model;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RequestMethod;
	import org.springframework.web.bind.annotation.ResponseBody;
	import org.taobao.dq.bean.Page;
	import org.taobao.dq.bean.User;
	import org.taobao.dq.service.UserService;
	import com.google.gson.Gson;
	
	@Controller
	@RequestMapping("/user")
	public class UserControl {
		
		@Autowired
		UserService userservice; 
		
		Gson gson =new Gson();
		
		//用户登录
		@RequestMapping("login")
		public String login(String name,String pass,String hasStore,String check,Model model,HttpServletResponse resp,HttpServletRequest req){
			SetUserCookie(name,pass,check,resp);//设置cookie
			
			if("0".equals(hasStore)){//管理员登录
				if("admin".equals(name)&&"admin".equals(pass)){
					return "forward:/background/admin.jsp";//跳至管理员页面
				}else{
					model.addAttribute("msg", "用户名或密码错误");
				}
			}
			if("1".equals(hasStore)){//商家登录
				User user =userservice.login(name, pass);
				if(user!=null){
					req.getSession().setAttribute("user", user);
					return "forward:/background/business.jsp";//跳转至商家管理页面
				}else{
					model.addAttribute("msg", "用户名或密码错误");
				}
			}
			return "forward:/background/login.jsp";
		}
		
		//是否记住账号
		public void SetUserCookie(String name,String pass,String check,HttpServletResponse resp){
			//是否记住账号
			if("on".equals(check)){
				Cookie Passcookie =new Cookie("pass",pass);
				Passcookie.setMaxAge(10*60);//保留10分钟
				Cookie Namecookie=new Cookie("name",name);
				Namecookie.setMaxAge(10*60);//保留10分钟
				resp.addCookie(Namecookie);
				resp.addCookie(Passcookie);
			}
		}
		//查询所有用户
		@RequestMapping(value="getAll",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String getAll(Integer pageCode){
			if(pageCode==null){
				pageCode=1;
			}
			Integer pageSize=10;//设置每页显示10条数据
			Page<User> list=userservice.queryAll(pageCode,pageSize);
			String msg="";
			if(list!=null){
				msg=gson.toJson(list);
			}
			return msg;
			
		}
		//通过姓名查找
		@RequestMapping(value="getUserByName",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String getUserByName(String name){
			List<User> list=userservice.queryByName(name);
			String msg="";
			if(list!=null){
				msg=gson.toJson(list);
				return msg;
			}
			return msg;
		}
		
		//查询最新的注册的用户
		@RequestMapping(value="getNewUser",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String getNewUser(){
			List<User>list =userservice.queryNewUser();
			String msg="";
			if(list!=null){
				msg=gson.toJson(list);
			}
			return msg;
		}
		
		//查询最新的注册的用户
		@RequestMapping(value="getNewStore",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String getNewStore(){
			List<User>list =userservice.queryNewStore();
			String msg="";
			if(list!=null){
				msg=gson.toJson(list);		
			}
			return msg;
		}
		//添加用户
		@RequestMapping(value="addUser",method=RequestMethod.POST)
		public String addUser(User user,Model model){
			//System.out.println("用户信息"+user);
			user.setTime(getTime());//设置注册时间
			if(userservice.addUser(user)>0){//添加用户成功
				model.addAttribute("msg", "添加成功");
				return "forward:/background/usermanager/userManager.jsp";
			}else{
				model.addAttribute("msg", "添加失败");
			}
			return "forward:/background/usermanager/addUser.jsp";
		}
		
		//修改跳转(按id查找用户)
		@RequestMapping(value="updateT")
		public String updateT(Integer id,Integer pc,Model model,HttpServletRequest req){
			User user=userservice.queryById(id);
			if(user!=null){
				model.addAttribute("info", user);
			}
			if(pc!=null){
				req.getSession().setAttribute("pc", pc);
			}
			return "forward:/background/usermanager/update_user.jsp";
			
		}
		
		//修改信息
		@RequestMapping(value="updateUser",produces="text/plain;charset=utf-8")
		@ResponseBody
		public String updateUser(User user){
			if(userservice.modifyUser(user)>0){
				return "success";
			}
			return "failure";
		}
		
		//删除用户
		@RequestMapping("deleteUser")
		@ResponseBody
		public String deleteUser(Integer id){
			
			if(userservice.deleteUser(id)>0){
				return "success";//删除成功
			}
			return "failure";//删除失败
		}
		//获取当前时间
		private String getTime(){
			SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd");//设置时间格式
			return df.format(new Date());//返回时间字符串
		}
	}
