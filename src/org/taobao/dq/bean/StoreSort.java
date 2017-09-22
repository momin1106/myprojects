	
	package org.taobao.dq.bean;

	import org.apache.ibatis.type.Alias;
	@Alias("storeSort")
	public class StoreSort {
		private Integer id;//店铺id
		private String name;//店铺类别名
		
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
		@Override
		public String toString() {
			return "StoreSort [id=" + id + ", name=" + name + "]";
		}
		
		
	}
