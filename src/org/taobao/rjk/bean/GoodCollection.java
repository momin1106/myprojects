package org.taobao.rjk.bean;

import java.util.Date;

import org.apache.ibatis.type.Alias;
@Alias("goodcollection")
public class GoodCollection {
	 private Integer id;

	    private Integer gid;

	    private Integer uid;

	    private String time;

	    private Integer isdelete;

	    public Integer getId() {
	        return id;
	    }

	    public void setId(Integer id) {
	        this.id = id;
	    }

	    public Integer getGid() {
	        return gid;
	    }

	    public void setGid(Integer gid) {
	        this.gid = gid;
	    }

	    public Integer getUid() {
	        return uid;
	    }

	    public void setUid(Integer uid) {
	        this.uid = uid;
	    }

	    public String getTime() {
	        return time;
	    }

	    public void setTime(String time) {
	        this.time = time;
	    }

	    public Integer getIsdelete() {
	        return isdelete;
	    }

	    public void setIsdelete(Integer isdelete) {
	        this.isdelete = isdelete;
	    }

		public GoodCollection(Integer id, Integer gid, Integer uid, String time, Integer isdelete) {
			super();
			this.id = id;
			this.gid = gid;
			this.uid = uid;
			this.time = time;
			this.isdelete = isdelete;
		}

		public GoodCollection(Integer gid, Integer uid, String time,
				Integer isdelete) {
			super();
			this.gid = gid;
			this.uid = uid;
			this.time = time;
			this.isdelete = isdelete;
		}

		public GoodCollection() {
			super();
		}

		@Override
		public String toString() {
			return "GoodCollection [id=" + id + ", gid=" + gid + ", uid=" + uid + ", time=" + time + ", isdelete="
					+ isdelete + "]";
		}
		
		
}
