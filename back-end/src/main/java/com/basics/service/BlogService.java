package com.basics.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.basics.model.Blog;
import com.basics.repo.BlogRepo;


@Service
public class BlogService {

	@Autowired
	BlogRepo blogRepo;
	
	public List<Blog> getALlBlogs() {
		return blogRepo.findAll();
	}

	public void addBlog(Blog blog) {
		blogRepo.save(blog);
	}

	public Blog getBlogById(Long blogid) {
		try {
			return blogRepo.findById(blogid).get();			
		} catch (NoSuchElementException e) {
			Blog blg = new Blog(null,0, 0, null, "<h1>No Blog Found</h1>", null, 0, 0);
			// TODO: handle exception
			return blg;
		}
	}

	public List<Blog> getUserBlogs(int userid) {
		List<Blog> blogs = blogRepo.getAllByUserId(userid);
		return blogs;
	}
	
	public List<Blog> getBlogsByTags(String tags) {
		return blogRepo.findByTagsContaining(tags);
	}
	
	public boolean upadteViews(Long blogId) {
		try {
			Blog temp = blogRepo.findById(blogId).get();
			int l = temp.getViews();
			l++;
			temp.setViews(l);
			blogRepo.save(temp);
			return true;
		} catch (NoSuchElementException e) {
			System.out.println(e);
			return false;
			// TODO: handle exception
		}
	}
	
	public void incLike(Long blogId) {
		Blog temp = blogRepo.findById(blogId).get();
		int l = temp.getLikes();
		l++;
		temp.setLikes(l);
		blogRepo.save(temp);
	}

	public void disLike(Long blogId) {
		Blog temp = blogRepo.findById(blogId).get();
		int l = temp.getLikes();
		l--;
		temp.setLikes(l);
		blogRepo.save(temp);
	}

	public List<Blog> getBlogsByPage(int page) {
        int pageSize = 10; // Assuming you want to fetch 10 records per page
        int offset = (page - 1) * pageSize;
        
        int totalBlogs = (int) blogRepo.count();
        int lt = offset + pageSize;
        if(lt > totalBlogs) {
        	lt = totalBlogs;
        }
        try {
        	return blogRepo.findAllByOrderByBlogIdAsc().subList(offset, lt);        	
        }
        catch (Exception e) {
			return null;
        	// TODO: handle exception
		}
	}
}
