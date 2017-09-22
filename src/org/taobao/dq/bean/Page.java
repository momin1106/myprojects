package org.taobao.dq.bean;

import java.util.List;

import org.apache.ibatis.type.Alias;

@Alias("page")
public class Page<T> {
	private Integer pc;// 页码
	private Integer ps;// 每页记录数
	private Integer tr;// 总记录数
	private List<T> beanList;// 当前页数据

	public Integer getPc() {
		return pc;
	}

	public void setPc(Integer pc) {
		this.pc = pc;
	}

	public Integer getTp() {
		Integer tp = tr / ps;
		return tr % ps == 0 ? tp : tp + 1;
	}

	public Integer getPs() {
		return ps;
	}

	public void setPs(Integer ps) {
		this.ps = ps;
	}

	public Integer getTr() {
		return tr;
	}

	public void setTr(Integer tr) {
		this.tr = tr;
	}

	public List<T> getBeanList() {
		return beanList;
	}

	public void setBeanList(List<T> beanList) {
		this.beanList = beanList;
	}

	@Override
	public String toString() {
		return "Page [pc=" + pc + ", ps=" + ps + ", tr=" + tr + ", beanList="
				+ beanList + "]";
	}

	public Page() {
		super();
	}

	public Page(Integer pc, Integer ps, Integer tr, List<T> beanList) {
		super();
		this.pc = pc;
		this.ps = ps;
		this.tr = tr;
		this.beanList = beanList;
	}

}
