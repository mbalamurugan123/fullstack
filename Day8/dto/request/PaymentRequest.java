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
public class PaymentRequest {
    private String status;
    private Double amountPaid;
    private Date paymentDate;
    private String modeOfPayment;
    private Long admissionId; // Assuming admissionId is used to associate payment with an admission
}
