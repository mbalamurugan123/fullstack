package com.eduadmitconnect.bala.service.impl;


import com.eduadmitconnect.bala.dto.request.StudentRequest;
import com.eduadmitconnect.bala.dto.response.StudentResponse;
import com.eduadmitconnect.bala.model.Student;
import com.eduadmitconnect.bala.repository.StudentRepository;
import com.eduadmitconnect.bala.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<StudentResponse> getAllStudents() {
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .map(this::mapEntityToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public StudentResponse getStudentById(Long studentId) {
        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found with ID: " + studentId));
        return mapEntityToResponse(student);
    }

    @Override
    public StudentResponse createStudent(StudentRequest studentRequest) {
        Student student = mapRequestToEntity(studentRequest);
        Student createdStudent = studentRepository.save(student);
        return mapEntityToResponse(createdStudent);
    }

    @Override
    public StudentResponse updateStudent(Long studentId, StudentRequest studentRequest) {
        Student existingStudent = studentRepository.findById(studentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Student not found with ID: " + studentId));

        // Update existing student entity with new data from the request
        existingStudent.setName(studentRequest.getName());
        existingStudent.setDob(studentRequest.getDob());
        // Update other fields similarly

        Student updatedStudent = studentRepository.save(existingStudent);
        return mapEntityToResponse(updatedStudent);
    }

    @Override
    public void deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
    }

    // Helper method to map StudentRequest to Student entity
    private Student mapRequestToEntity(StudentRequest studentRequest) {
        Student student = new Student();
        student.setName(studentRequest.getName());
        student.setDob(studentRequest.getDob());
        // Map other fields similarly
        return student;
    }

    // Helper method to map Student entity to StudentResponse
    private StudentResponse mapEntityToResponse(Student student) {
        StudentResponse studentResponse = new StudentResponse();
        studentResponse.setStudentId(student.getStudentId());
        studentResponse.setName(student.getName());
        studentResponse.setDob(student.getDob());
        // Map other fields similarly
        return studentResponse;
    }
}
