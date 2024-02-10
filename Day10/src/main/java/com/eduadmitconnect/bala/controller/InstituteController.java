package com.eduadmitconnect.bala.controller;

import static com.eduadmitconnect.bala.utils.MyConstant.CREATEINSTITUTE;
import static com.eduadmitconnect.bala.utils.MyConstant.INSTITUTE;
import static com.eduadmitconnect.bala.utils.MyConstant.INSTITUTEDELETE;
import static com.eduadmitconnect.bala.utils.MyConstant.INSTITUTELIST;
import static com.eduadmitconnect.bala.utils.MyConstant.INSTITUTEUPDATE;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eduadmitconnect.bala.dto.request.InstituteRequest;
import com.eduadmitconnect.bala.dto.response.InstituteResponse;
import com.eduadmitconnect.bala.service.InstituteService;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping(INSTITUTE)
@RequiredArgsConstructor
public class InstituteController {

    @Autowired
    private InstituteService instituteService;

    @GetMapping(INSTITUTELIST)
    public ResponseEntity<List<InstituteResponse>> getAllInstitutes() {
        List<InstituteResponse> institutes = instituteService.getAllInstitutes();
        return ResponseEntity.ok(institutes);
    }

    @GetMapping(INSTITUTELIST+"/{instituteId}")
    public ResponseEntity<InstituteResponse> getInstitute(@PathVariable Long instituteId) {
        InstituteResponse institute = instituteService.getInstituteById(instituteId);
        return ResponseEntity.ok(institute);
    }

    @PostMapping(CREATEINSTITUTE)
    public ResponseEntity<InstituteResponse> createInstitute(@RequestBody InstituteRequest instituteRequest) {
        InstituteResponse createdInstitute = instituteService.createInstitute(instituteRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdInstitute);
    }

    @PutMapping(INSTITUTEUPDATE+"/{instituteId}")
    public ResponseEntity<InstituteResponse> updateInstitute(@PathVariable Long instituteId, @RequestBody InstituteRequest instituteRequest) {
        InstituteResponse updatedInstitute = instituteService.updateInstitute(instituteId, instituteRequest);
        return ResponseEntity.ok(updatedInstitute);
    }

    @DeleteMapping(INSTITUTEDELETE+"/{instituteId}")
    public ResponseEntity<Void> deleteInstitute(@PathVariable Long instituteId) {
        instituteService.deleteInstitute(instituteId);
        return ResponseEntity.noContent().build();
    }
}
