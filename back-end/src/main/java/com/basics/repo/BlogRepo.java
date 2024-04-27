package com.basics.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.basics.model.Blog;

@Repository
public interface BlogRepo extends JpaRepository<Blog, Long> {

	List<Blog> getAllByUserId(int userid);

	List<Blog> getAllByBid(int userid);

	List<Blog> findByTagsContaining(String tags);

	List<Blog> findAllByOrderByBlogIdAsc();

}
