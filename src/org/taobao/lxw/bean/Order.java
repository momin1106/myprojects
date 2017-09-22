package org.taobao.lxw.bean;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.type.Alias;
@Alias("order")
public class Order {
	//订单id
	private Integer id;
	//订单时间
	private String  time;
	//卖家名称
	private String sname;
	//用户名称
	private String uname;
	//已购商品
	private List<Goods> sList;
	//地址
	private String aname;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String  getTime() {
		return time;
	}
	public void setTime(String  time) {
		this.time = time;
	}
	public String getBname() {
		return sname;
	}
	public void setBname(String sname) {
		this.sname = sname;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public List<Goods> getsList() {
		return sList;
	}
	public void setsList(List<Goods> sList) {
		this.sList = sList;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	@Override
	public String toString() {
		return "Order [id=" + id + ", time=" + time + ", sname=" + sname + ", uname=" + uname + ", sList=" + sList
				+ ", aname=" + aname + "]";
	}
	public Order(Integer id, String time, String sname, String uname, List<Goods> sList, String aname) {
		super();
		this.id = id;
		this.time = time;
		this.sname = sname;
		this.uname = uname;
		this.sList = sList;
		this.aname = aname;
	}
	public Order() {
		super();
	}
	
	
	
	
	
	
	
	
	
	
}
