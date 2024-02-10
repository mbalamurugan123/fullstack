package com.eduadmitconnect.bala.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.eduadmitconnect.bala.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
