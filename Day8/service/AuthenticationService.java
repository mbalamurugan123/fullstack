package com.eduadmitconnect.bala.service;

import com.eduadmitconnect.bala.dto.request.LoginRequest;
import com.eduadmitconnect.bala.dto.request.RegisterRequest;
import com.eduadmitconnect.bala.dto.response.LoginResponse;
import com.eduadmitconnect.bala.dto.response.RegisterResponse;

public interface AuthenticationService {
  RegisterResponse register(RegisterRequest request);

  LoginResponse login(LoginRequest request);
}
