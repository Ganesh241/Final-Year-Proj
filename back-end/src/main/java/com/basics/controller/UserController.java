package com.basics.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.basics.model.User;
import com.basics.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/userapi")
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/users")
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	}
	
	@PostMapping("/login")
	public boolean login(@RequestBody User user) {
		User u = userService.getUserByUserName(user.getUserName());
		return u.getUserPass().equals(user.getUserPass());
	}
	
	@GetMapping("/users/{userName}")
	public User getUserByUserName(@PathVariable String userName) {
		return userService.getUserByUserName(userName);
	}
	
	@GetMapping("/users/name/{userId}")
	public User getUserByUserId(@PathVariable Long userId) {
		User u = new User();
		try {
			 u = userService.getUserByUserId(userId);
			 u.setUserAge(0);
			 u.setUserEmail(null);
			 u.setUserId(0);
			 u.setUserPass(null);
			 
		}catch (Exception e) {
			return u;
		}
		return u;
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id,@RequestBody User user){
		userService.addUser(user);
		return new ResponseEntity<>(user,HttpStatus.OK); 
	}
	
	@PostMapping("/users/check")
	public boolean checkUser(@RequestBody User user) {
		try {
			String t = user.getUserName();
			if(userService.getUserByUserName(t) == null)
				return true;
		}
		catch (Exception e) {
			return true;
		}
		return false;
	}
}