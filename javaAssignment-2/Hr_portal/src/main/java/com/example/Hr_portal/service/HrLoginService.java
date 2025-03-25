package com.example.Hr_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Hr_portal.domain.HrEmployee;
import com.example.Hr_portal.repository.HrEmployeeRepository;

@Service
public class HrLoginService {

    @Autowired
    private HrEmployeeRepository hrEmployeeRepository;

    public boolean authenticate(String email, String password) {
        // Find HR personnel by email
        HrEmployee hrEmployee = hrEmployeeRepository.findByEmail(email);

        // Check if HR personnel exists and passwords match
        return hrEmployee != null && hrEmployee.getPassword().equals(password);
    }

}