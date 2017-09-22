package org.taobao.yyj.bean;

import java.util.List;

import org.apache.ibatis.type.Alias;
import org.taobao.lxw.bean.Goods;

@Alias("car")
public class ShoppingCar {
	private Integer id;
	private Integer uid;
	private Integer gid;
	private Integer count;
	private Integer carcount;
	private List<Goods> goods;
	
	public List<Goods> getGoods() {
		return goods;
	}
	@Override
	public String toString() {
		return "ShoppingCar [id=" + id + ", uid=" + uid + ", gid=" + gid + ", count=" + count + ", carcount=" + carcount
				+ ", goods=" + goods + "]";
	}
	public void setGoods(List<Goods> goods) {
		this.goods = goods;
	}
	public Integer getCarcount() {
		return carcount;
	}
	public void setCarcount(Integer carcount) {
		this.carcount = carcount;
	}
	public Integer getGid() {
		return gid;
	}
	public void setGid(Integer gid) {
		this.gid = gid;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Integer getId() {
		return id;
	}
	public ShoppingCar() {
		super();
	}
	
	
	public ShoppingCar(Integer uid, Integer gid, Integer count) {
		super();
		this.uid = uid;
		this.gid = gid;
		this.count = count;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getUid() {
		return uid;
	}
	public void setUid(Integer uid) {
		this.uid = uid;
	}
	
}
