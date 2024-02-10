package com.eduadmitconnect.bala.config;

import static com.eduadmitconnect.bala.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.eduadmitconnect.bala.model.User;
import com.eduadmitconnect.bala.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component 
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCli implements CommandLineRunner{

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;


  @Override
  public void run(String... args) throws Exception {
    if(userRepository.count()>0){
      return;
    }
    var user = User.builder()
            .name("Admin")
            .email("admin123@gmail.com")
            .password(passwordEncoder.encode("admin@123"))
            .mobileNumber("9363423876")
            .role(ADMIN)
            .build();

    userRepository.save(user);

  }

}
