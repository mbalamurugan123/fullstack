package com.eduadmitconnect.bala.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.eduadmitconnect.bala.model.Institute;

@Repository
public interface InstituteRepository extends JpaRepository<Institute, Long> {

}