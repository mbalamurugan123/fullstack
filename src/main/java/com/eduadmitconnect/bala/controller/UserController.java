package com.eduadmitconnect.bala.controller;

import static com.eduadmitconnect.bala.utils.MyConstant.USER;
import static com.eduadmitconnect.bala.utils.MyConstant.USERLIST;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eduadmitconnect.bala.dto.response.BasicResponse;
import com.eduadmitconnect.bala.dto.response.UserResponse;
import com.eduadmitconnect.bala.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(USER)
@RequiredArgsConstructor

public class UserController {
    private final UserService userService; 
    @GetMapping(USERLIST)
    public ResponseEntity<BasicResponse<UserResponse>> getAllUser(){
        BasicResponse<UserResponse> response=new BasicResponse<>();
        try{
            response = userService.getAllUser();
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        catch(Exception e){
            response.setMessage("Something went wrong!");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }

}