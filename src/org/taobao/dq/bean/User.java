package org.taobao.dq.bean;

import org.apache.ibatis.type.Alias;

@Alias("user")
public class User {

	private Integer id;//用户id
	private String name;//用户名
	private String pass;//密码
	private String sex;//性别
	private String birthday;//生日
	private String number;//电话号码
	private String level;//星级
	private String time;//注册时间
	private Integer isDelete;//是否删除
	private Integer hasStore;//是否开店
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public Integer getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(Integer isDelete) {
		this.isDelete = isDelete;
	}
	public Integer getHasStore() {
		return hasStore;
	}
	public void setHasStore(Integer HasStore) {
		this.hasStore = HasStore;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", pass=" + pass
				+ ", sex=" + sex + ", birthday=" + birthday + ", number="
				+ number + ", level=" + level + ", time=" + time
				+ ", isDelete=" + isDelete + ", hasStore=" + hasStore + "]";
	}
	public User(String name, String pass, String sex, String birthday,
			String number, String level, String time, Integer isDelete,
			Integer hasStore) {
		super();
		this.name = name;
		this.pass = pass;
		this.sex = sex;
		this.birthday = birthday;
		this.number = number;
		this.level = level;
		this.time = time;
		this.isDelete = isDelete;
		this.hasStore = hasStore;
	}
	public User() {
		super();
	}

	
	
	
}
