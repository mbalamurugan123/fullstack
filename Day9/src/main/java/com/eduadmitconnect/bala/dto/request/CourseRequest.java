package com.eduadmitconnect.bala.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {
    private String courseName;
    private String courseDescription;
    private String courseDuration;
    private Double fees;
    private int noOfSeats;
}
