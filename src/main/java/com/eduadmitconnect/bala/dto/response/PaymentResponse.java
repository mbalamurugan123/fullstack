package com.eduadmitconnect.bala.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PaymentResponse {
    private Long paymentId;
    private String status;
    private Double amountPaid;
    private Date paymentDate;
    private String modeOfPayment;
    private Long admissionId;
}
