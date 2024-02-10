package com.eduadmitconnect.bala.controller;

import com.eduadmitconnect.bala.dto.request.CourseRequest;
import com.eduadmitconnect.bala.dto.response.CourseResponse;
import com.eduadmitconnect.bala.service.CourseService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.eduadmitconnect.bala.utils.MyConstant.COURSE;
import static com.eduadmitconnect.bala.utils.MyConstant.COURSEDELETE;
import static com.eduadmitconnect.bala.utils.MyConstant.COURSELIST;
import static com.eduadmitconnect.bala.utils.MyConstant.COURSEUPDATE;
import static com.eduadmitconnect.bala.utils.MyConstant.CREATECOURSE;

import java.util.List;

@RestController
@RequestMapping(COURSE)
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping(COURSELIST)
    public ResponseEntity<List<CourseResponse>> getAllCourses() {
        List<CourseResponse> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    @GetMapping(COURSELIST+"/{courseId}")
    public ResponseEntity<CourseResponse> getCourseById(@PathVariable Long courseId) {
        CourseResponse course = courseService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    @PostMapping(CREATECOURSE)
    public ResponseEntity<CourseResponse> createCourse(@RequestBody CourseRequest courseRequest) {
        CourseResponse createdCourse = courseService.createCourse(courseRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCourse);
    }

    @PutMapping(COURSEUPDATE+"/{courseId}")
    public ResponseEntity<CourseResponse> updateCourse(@PathVariable Long courseId, @RequestBody CourseRequest courseRequest) {
        CourseResponse updatedCourse = courseService.updateCourse(courseId, courseRequest);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping(COURSEDELETE+"/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.noContent().build();
    }
}
