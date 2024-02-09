package com.eduadmitconnect.bala.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstituteRequest {
    private String instituteName;
    private String instituteDescription;
    private String instituteAddress;
    private String mobile;
    private String email;
    private Long noOfCoursesAvailable;
}
