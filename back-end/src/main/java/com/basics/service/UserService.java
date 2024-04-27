package com.basics.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basics.model.User;
import com.basics.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo userRepo;
	
	public void addUser(User user) {
		userRepo.save(user);
	}

	public User getUserByUserName(String userName) {
		return userRepo.findByUserName(userName);
		
	}

	public User getUserByUserId(Long userId) {
		return userRepo.findById(userId).get();
	}

}
