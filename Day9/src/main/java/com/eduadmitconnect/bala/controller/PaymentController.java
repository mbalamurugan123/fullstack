package com.eduadmitconnect.bala.controller;


import static com.eduadmitconnect.bala.utils.MyConstant.CREATECOURSE;
import static com.eduadmitconnect.bala.utils.MyConstant.PAYMENT;
import static com.eduadmitconnect.bala.utils.MyConstant.PAYMENTDELETE;
import static com.eduadmitconnect.bala.utils.MyConstant.PAYMENTLIST;
import static com.eduadmitconnect.bala.utils.MyConstant.PAYMENTUPDATE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eduadmitconnect.bala.dto.request.PaymentRequest;
import com.eduadmitconnect.bala.dto.response.PaymentResponse;
import com.eduadmitconnect.bala.service.PaymentService;

@RestController
@RequestMapping(PAYMENT)
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping(CREATECOURSE)
    public ResponseEntity<PaymentResponse> makePayment(@RequestBody PaymentRequest paymentRequest) {
        PaymentResponse response = paymentService.makePayment(paymentRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping(PAYMENTLIST+"/{paymentId}")
    public ResponseEntity<PaymentResponse> getPaymentById(@PathVariable Long paymentId) {
        PaymentResponse response = paymentService.getPaymentById(paymentId);
        return ResponseEntity.ok(response);
    }

    @PutMapping(PAYMENTUPDATE+"/{paymentId}")
    public ResponseEntity<PaymentResponse> updatePayment(@PathVariable Long paymentId, @RequestBody PaymentRequest paymentRequest) {
        PaymentResponse response = paymentService.updatePayment(paymentId, paymentRequest);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping(PAYMENTDELETE+"/{paymentId}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);
        return ResponseEntity.noContent().build();
    }
}
