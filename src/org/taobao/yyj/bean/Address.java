package org.taobao.yyj.bean;

import org.apache.ibatis.type.Alias;

@Alias("address")
public class Address {
	private Integer id;
	private String uname;
	private String aname;
	private String number;
	private Integer uid;
	private Integer isdefault;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	public Integer getIsdefault() {
		return isdefault;
	}
	public void setIsdefault(Integer isdefault) {
		this.isdefault = isdefault;
	}
	public Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Address [id=" + id + ", uname=" + uname + ", aname=" + aname + ", number=" + number + ", uid=" + uid
				+ ", isdefault=" + isdefault + "]";
	}
	public Address(Integer id, String uname, String aname, String number, Integer uid, Integer isdefault) {
		super();
		this.id = id;
		this.uname = uname;
		this.aname = aname;
		this.number = number;
		this.uid = uid;
		this.isdefault = isdefault;
	}
	
	public Address(String uname, String aname, String number, Integer uid,Integer isdefault) {
		super();
		
		this.uname = uname;
		this.aname = aname;
		this.number = number;
		this.uid=uid;
		this.isdefault = isdefault;
	}
	
	
	
}
