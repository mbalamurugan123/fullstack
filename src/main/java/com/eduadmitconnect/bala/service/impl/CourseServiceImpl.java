package com.eduadmitconnect.bala.service.impl;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.eduadmitconnect.bala.dto.request.CourseRequest;
import com.eduadmitconnect.bala.dto.response.CourseResponse;
import com.eduadmitconnect.bala.model.Course;
import com.eduadmitconnect.bala.repository.CourseRepository;
import com.eduadmitconnect.bala.service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepository courseRepository;

    @Override
    public List<CourseResponse> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return courses.stream().map(this::mapEntityToResponse).collect(Collectors.toList());
    }

    @Override
    public CourseResponse getCourseById(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found with id: " + courseId));
        return mapEntityToResponse(course);
    }

    @Override
    public CourseResponse createCourse(CourseRequest courseRequest) {
        Course course = mapRequestToEntity(courseRequest);
        Course createdCourse = courseRepository.save(course);
        return mapEntityToResponse(createdCourse);
    }

    @Override
    public CourseResponse updateCourse(Long courseId, CourseRequest courseRequest) {
        Course existingCourse = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Course not found with id: " + courseId));

        // Update fields based on the request
        existingCourse.setCourseName(courseRequest.getCourseName());
        existingCourse.setCourseDescription(courseRequest.getCourseDescription());
        existingCourse.setCourseDuration(courseRequest.getCourseDuration());
        existingCourse.setFees(courseRequest.getFees());
        existingCourse.setNoOfSeats(courseRequest.getNoOfSeats());

        Course updatedCourse = courseRepository.save(existingCourse);
        return mapEntityToResponse(updatedCourse);
    }

    @Override
    public void deleteCourse(Long courseId) {
        courseRepository.deleteById(courseId);
    }

    // Helper methods for mapping request, entity, and response
    private Course mapRequestToEntity(CourseRequest courseRequest) {
        Course course = new Course();
        course.setCourseName(courseRequest.getCourseName());
        course.setCourseDescription(courseRequest.getCourseDescription());
        course.setCourseDuration(courseRequest.getCourseDuration());
        course.setFees(courseRequest.getFees());
        course.setNoOfSeats(courseRequest.getNoOfSeats());
        return course;
    }

    private CourseResponse mapEntityToResponse(Course course) {
        CourseResponse courseResponse = new CourseResponse();
        courseResponse.setCourseId(course.getCourseId());
        courseResponse.setCourseName(course.getCourseName());
        courseResponse.setCourseDescription(course.getCourseDescription());
        courseResponse.setCourseDuration(course.getCourseDuration());
        courseResponse.setFees(course.getFees());
        courseResponse.setNoOfSeats(course.getNoOfSeats());
        return courseResponse;
    }
}
