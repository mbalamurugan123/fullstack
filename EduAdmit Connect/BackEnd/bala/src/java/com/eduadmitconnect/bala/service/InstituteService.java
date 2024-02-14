package com.eduadmitconnect.bala.service;

import com.eduadmitconnect.bala.dto.request.InstituteRequest;
import com.eduadmitconnect.bala.dto.response.InstituteResponse;

import java.util.List;

public interface InstituteService {
    List<InstituteResponse> getAllInstitutes();

    InstituteResponse getInstituteById(Long instituteId);

    InstituteResponse createInstitute(InstituteRequest instituteRequest);

    InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest);

    void deleteInstitute(Long instituteId);
}
