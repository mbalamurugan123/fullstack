package com.eduadmitconnect.bala.service.impl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.eduadmitconnect.bala.dto.request.PaymentRequest;
import com.eduadmitconnect.bala.dto.response.PaymentResponse;
import com.eduadmitconnect.bala.model.Payment;
import com.eduadmitconnect.bala.repository.PaymentRepository;
import com.eduadmitconnect.bala.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    @Override
    public PaymentResponse makePayment(PaymentRequest paymentRequest) {
        Payment payment = mapRequestToEntity(paymentRequest);
        Payment createdPayment = paymentRepository.save(payment);
        return mapEntityToResponse(createdPayment);
    }

    @Override
    public PaymentResponse getPaymentById(Long paymentId) {
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Payment not found with id: " + paymentId));
        return mapEntityToResponse(payment);
    }

    @Override
    public PaymentResponse updatePayment(Long paymentId, PaymentRequest paymentRequest) {
        Payment existingPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Payment not found with id: " + paymentId));

        // Update fields based on the request
        existingPayment.setStatus(paymentRequest.getStatus());
        existingPayment.setAmountPaid(paymentRequest.getAmountPaid());
        existingPayment.setPaymentDate(paymentRequest.getPaymentDate());
        existingPayment.setModeOfPayment(paymentRequest.getModeOfPayment());

        Payment updatedPayment = paymentRepository.save(existingPayment);
        return mapEntityToResponse(updatedPayment);
    }

    @Override
    public void deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
    }

    // Helper methods for mapping request, entity, and response
    private Payment mapRequestToEntity(PaymentRequest paymentRequest) {
        Payment payment = new Payment();
        payment.setStatus(paymentRequest.getStatus());
        payment.setAmountPaid(paymentRequest.getAmountPaid());
        payment.setPaymentDate(paymentRequest.getPaymentDate());
        payment.setModeOfPayment(paymentRequest.getModeOfPayment());
        return payment;
    }

    private PaymentResponse mapEntityToResponse(Payment payment) {
        PaymentResponse paymentResponse = new PaymentResponse();
        paymentResponse.setPaymentId(payment.getPaymentId());
        paymentResponse.setStatus(payment.getStatus());
        paymentResponse.setAmountPaid(payment.getAmountPaid());
        paymentResponse.setPaymentDate(payment.getPaymentDate());
        paymentResponse.setModeOfPayment(payment.getModeOfPayment());
        return paymentResponse;
    }
}
