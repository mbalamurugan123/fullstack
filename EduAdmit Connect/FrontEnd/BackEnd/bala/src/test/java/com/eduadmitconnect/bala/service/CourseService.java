package com.eduadmitconnect.bala.service;


import java.util.List;

import com.eduadmitconnect.bala.dto.request.CourseRequest;
import com.eduadmitconnect.bala.dto.response.CourseResponse;

public interface CourseService {

    List<CourseResponse> getAllCourses();

    CourseResponse getCourseById(Long courseId);

    CourseResponse createCourse(CourseRequest courseRequest);

    CourseResponse updateCourse(Long courseId, CourseRequest courseRequest);

    void deleteCourse(Long courseId);
}
