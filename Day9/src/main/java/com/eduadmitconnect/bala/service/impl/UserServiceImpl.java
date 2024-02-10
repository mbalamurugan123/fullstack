package com.eduadmitconnect.bala.service.impl;

import java.util.*;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.eduadmitconnect.bala.dto.response.BasicResponse;
import com.eduadmitconnect.bala.dto.response.UserResponse;

import com.eduadmitconnect.bala.model.User;
import com.eduadmitconnect.bala.repository.UserRepository;
import com.eduadmitconnect.bala.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public BasicResponse<UserResponse> getAllUser(){
        List<User> users = userRepository.findAll();
        List<UserResponse> userResponses = users.stream().map(user-> UserResponse.builder()
            .id(user.getId())
            .name(user.getName())
            .email(user.getEmail())
            .role(user.getRole())
            .mobileNumber(user.getMobileNumber())
            .build())
            .collect(Collectors.toList());
        return BasicResponse.<UserResponse>builder()
            .message("User data fetched successfully!!!")
            .data(userResponses)
            .build();
    }

}