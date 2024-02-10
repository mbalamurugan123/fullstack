package com.eduadmitconnect.bala.service;

import com.eduadmitconnect.bala.dto.response.BasicResponse;
import com.eduadmitconnect.bala.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}