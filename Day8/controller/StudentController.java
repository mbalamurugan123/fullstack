package com.eduadmitconnect.bala.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eduadmitconnect.bala.dto.request.StudentRequest;
import com.eduadmitconnect.bala.dto.response.StudentResponse;
import com.eduadmitconnect.bala.service.StudentService;

import static com.eduadmitconnect.bala.utils.MyConstant.CREATESTUDENT;
import static com.eduadmitconnect.bala.utils.MyConstant.STUDENT;
import static com.eduadmitconnect.bala.utils.MyConstant.STUDENTDELETE;
import static com.eduadmitconnect.bala.utils.MyConstant.STUDENTLIST;
import static com.eduadmitconnect.bala.utils.MyConstant.STUDENTUPDATE;

import java.util.List;

@RestController
@RequestMapping(STUDENT)
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping(STUDENTLIST)
    public ResponseEntity<List<StudentResponse>> getAllStudents() {
        List<StudentResponse> students = studentService.getAllStudents();
        return ResponseEntity.ok(students);
    }

    @GetMapping(STUDENTLIST+"/{studentId}")
    public ResponseEntity<StudentResponse> getStudent(@PathVariable Long studentId) {
        StudentResponse student = studentService.getStudentById(studentId);
        return ResponseEntity.ok(student);
    }

    @PostMapping(CREATESTUDENT)
    public ResponseEntity<StudentResponse> createStudent(@RequestBody StudentRequest studentRequest) {
        StudentResponse createdStudent = studentService.createStudent(studentRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdStudent);
    }

    @PutMapping(STUDENTUPDATE+"/{studentId}")
    public ResponseEntity<StudentResponse> updateStudent(@PathVariable Long studentId, @RequestBody StudentRequest studentRequest) {
        StudentResponse updatedStudent = studentService.updateStudent(studentId, studentRequest);
        return ResponseEntity.ok(updatedStudent);
    }

    @DeleteMapping(STUDENTDELETE+"/{studentId}")
    public ResponseEntity<Void> deleteStudent(@PathVariable Long studentId) {
        studentService.deleteStudent(studentId);
        return ResponseEntity.noContent().build();
    }
}
