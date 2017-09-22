package org.taobao.lxw.bean;

import java.util.Date;

public class Business {
	//商家id
	private Integer id;
	//名称
	private String name;
	//密码
	private String pwd;
	//性别
	private String sex;
	//生日
	private Date birthday;
	//电话
	private String number;
	//星级
	private Integer level;
	//开户时间
	private Date time;
	//是否开店（0-1）
	private Integer hasStore;
	//是否删除（0-1）
	private Integer isDelete;
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
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Date getBirthday() {
		return birthday;
	}
	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public Integer getLevel() {
		return level;
	}
	public void setLevel(Integer level) {
		this.level = level;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public Integer getHasStore() {
		return hasStore;
	}
	public void setHasStore(Integer hasStore) {
		this.hasStore = hasStore;
	}
	public Integer getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(Integer isDelete) {
		this.isDelete = isDelete;
	}
	
	//商家
	public Business(Integer id, String name, String pwd, String sex, Date birthday, String number, Integer level, Date time,
			Integer hasStore, Integer isDelete) {
		super();
		this.id = id;
		this.name = name;
		this.pwd = pwd;
		this.sex = sex;
		this.birthday = birthday;
		this.number = number;
		this.level = level;
		this.time = time;
		this.hasStore = hasStore;
		this.isDelete = isDelete;
	}
	public Business() {
		super();
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", pwd=" + pwd + ", sex=" + sex + ", birthday=" + birthday
				+ ", number=" + number + ", level=" + level + ", time=" + time + ", hasStore=" + hasStore
				+ ", isDelete=" + isDelete + "]";
	}
	
	
	
	
	
	
}
