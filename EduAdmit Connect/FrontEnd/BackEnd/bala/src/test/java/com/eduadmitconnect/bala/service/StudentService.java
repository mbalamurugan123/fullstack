package com.eduadmitconnect.bala.service;


import com.eduadmitconnect.bala.dto.request.StudentRequest;
import com.eduadmitconnect.bala.dto.response.StudentResponse;

import java.util.List;

public interface StudentService {
    List<StudentResponse> getAllStudents();

    StudentResponse getStudentById(Long studentId);

    StudentResponse createStudent(StudentRequest studentRequest);

    StudentResponse updateStudent(Long studentId, StudentRequest studentRequest);

    void deleteStudent(Long studentId);
}
