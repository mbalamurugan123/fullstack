package com.eduadmitconnect.bala.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduadmitconnect.bala.model.User;

public interface UserRepository extends JpaRepository<User,String>{

  Optional<User> findByEmail(String email);

}
