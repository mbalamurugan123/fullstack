package com.eduadmitconnect.bala.service.impl;


import com.eduadmitconnect.bala.dto.request.InstituteRequest;
import com.eduadmitconnect.bala.dto.response.InstituteResponse;
import com.eduadmitconnect.bala.model.Institute;
import com.eduadmitconnect.bala.repository.InstituteRepository;
import com.eduadmitconnect.bala.service.InstituteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InstituteServiceImpl implements InstituteService {

    @Autowired
    private InstituteRepository instituteRepository;

    @Override
    public List<InstituteResponse> getAllInstitutes() {
        List<Institute> institutes = instituteRepository.findAll();
        return institutes.stream().map(this::mapEntityToResponse).collect(Collectors.toList());
    }

    @Override
    public InstituteResponse getInstituteById(Long instituteId) {
        Institute institute = instituteRepository.findById(instituteId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Institute not found with id: " + instituteId));
        return mapEntityToResponse(institute);
    }

    @Override
    public InstituteResponse createInstitute(InstituteRequest instituteRequest) {
        Institute institute = mapRequestToEntity(instituteRequest);
        Institute createdInstitute = instituteRepository.save(institute);
        return mapEntityToResponse(createdInstitute);
    }

    @Override
    public InstituteResponse updateInstitute(Long instituteId, InstituteRequest instituteRequest) {
        Institute existingInstitute = instituteRepository.findById(instituteId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Institute not found with id: " + instituteId));

        // Update fields based on the request
        existingInstitute.setInstituteName(instituteRequest.getInstituteName());
        existingInstitute.setInstituteDescription(instituteRequest.getInstituteDescription());
        existingInstitute.setInstituteAddress(instituteRequest.getInstituteAddress());
        existingInstitute.setMobile(instituteRequest.getMobile());
        existingInstitute.setEmail(instituteRequest.getEmail());
        existingInstitute.setNoOfCoursesAvailable(instituteRequest.getNoOfCoursesAvailable());

        Institute updatedInstitute = instituteRepository.save(existingInstitute);
        return mapEntityToResponse(updatedInstitute);
    }

    @Override
    public void deleteInstitute(Long instituteId) {
        instituteRepository.deleteById(instituteId);
    }

    // Helper methods for mapping request, entity, and response
    private Institute mapRequestToEntity(InstituteRequest instituteRequest) {
        Institute institute = new Institute();
        institute.setInstituteName(instituteRequest.getInstituteName());
        institute.setInstituteDescription(instituteRequest.getInstituteDescription());
        institute.setInstituteAddress(instituteRequest.getInstituteAddress());
        institute.setMobile(instituteRequest.getMobile());
        institute.setEmail(instituteRequest.getEmail());
        institute.setNoOfCoursesAvailable(instituteRequest.getNoOfCoursesAvailable());
        return institute;
    }

    private InstituteResponse mapEntityToResponse(Institute institute) {
        InstituteResponse instituteResponse = new InstituteResponse();
        instituteResponse.setInstituteId(institute.getInstituteId());
        instituteResponse.setInstituteName(institute.getInstituteName());
        instituteResponse.setInstituteDescription(institute.getInstituteDescription());
        instituteResponse.setInstituteAddress(institute.getInstituteAddress());
        instituteResponse.setMobile(institute.getMobile());
        instituteResponse.setEmail(institute.getEmail());
        instituteResponse.setNoOfCoursesAvailable(institute.getNoOfCoursesAvailable());
        return instituteResponse;
    }
}
