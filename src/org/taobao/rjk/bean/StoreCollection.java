package org.taobao.rjk.bean;

import java.util.Date;

import org.apache.ibatis.type.Alias;
@Alias("storecollection")
public class StoreCollection {
	  private Integer id;

	    private Integer uid;

	    private Integer sid;

	    private Date time;

	    private Integer isdelete;

	    public Integer getId() {
	        return id;
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

	    public Integer getSid() {
	        return sid;
	    }

	    public void setSid(Integer sid) {
	        this.sid = sid;
	    }

	    public Date getTime() {
	        return time;
	    }

	    public void setTime(Date time) {
	        this.time = time;
	    }

	    public Integer getIsdelete() {
	        return isdelete;
	    }

	    public void setIsdelete(Integer isdelete) {
	        this.isdelete = isdelete;
	    }

		public StoreCollection(Integer id, Integer uid, Integer sid, Date time, Integer isdelete) {
			super();
			this.id = id;
			this.uid = uid;
			this.sid = sid;
			this.time = time;
			this.isdelete = isdelete;
		}

		public StoreCollection() {
			super();
		}

		@Override
		public String toString() {
			return "StoreCollection [id=" + id + ", uid=" + uid + ", sid=" + sid + ", isdelete=" + isdelete + "]";
		}
	    
}
