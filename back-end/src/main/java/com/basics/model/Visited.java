package com.basics.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "visited")
public class Visited {
	@Id 
	public int userId;
	public int blogId;
	public String company;
	
	public Visited() {
		
	}
	
	public Visited(int userId, int blogId,String company) {
		super();
		this.userId = userId;
		this.blogId = blogId;
		this.company = company;
		
	}

	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getBlogId() {
		return blogId;
	}
	public void setBlogId(int blogId) {
		this.blogId = blogId;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
}
