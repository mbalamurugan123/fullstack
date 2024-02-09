package com.eduadmitconnect.bala.service;

import com.eduadmitconnect.bala.dto.request.PaymentRequest;
import com.eduadmitconnect.bala.dto.response.PaymentResponse;


public interface PaymentService {
    PaymentResponse makePayment(PaymentRequest paymentRequest);
    PaymentResponse getPaymentById(Long paymentId);
    PaymentResponse updatePayment(Long paymentId, PaymentRequest paymentRequest);
    void deletePayment(Long paymentId);
}
