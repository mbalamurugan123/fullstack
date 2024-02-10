package com.eduadmitconnect.bala.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class StudentRequest {
    private Long userId;
    private String name;
    private String dob;
    private String gender;
    private String motherName;
    private String fatherName;
    private String nationality;
    private Long age;
    private String address;
    private String mobile;
    private int marksSSLC;
    private int marksHSC;
    private int marksDiploma;
    private String eligibility;
}
