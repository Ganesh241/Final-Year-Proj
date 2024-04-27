package com.basics.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;

	private String name;
	private String userName;
	private String userEmail;
	private String userPass;
	private String userProf;
	private int userAge;
	private String gender;
	
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPass() {
		return userPass;
	}
	public void setUserPass(String userPass) {
		this.userPass = userPass;
	}
	public String getUserProf() {
		return userProf;
	}
	public void setUserProf(String userProf) {
		this.userProf = userProf;
	}
	public int getUserAge() {
		return userAge;
	}
	public void setUserAge(int userAge) {
		this.userAge = userAge;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public User(int userId, String name, String userName, String userEmail, String userPass, String userProf,
			int userAge, String gender) {
		super();
		this.userId = userId;
		this.name = name;
		this.userName = userName;
		this.userEmail = userEmail;
		this.userPass = userPass;
		this.userProf = userProf;
		this.userAge = userAge;
		this.gender = gender;
	}
	
	public User() {
		
	}

}
