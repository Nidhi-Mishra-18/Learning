package com.example.Hr_portal.controller;

import com.example.Hr_portal.domain.HrEmployee;
import com.example.Hr_portal.service.HrLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/hr")
public class HrLoginAuthController {

    @Autowired
    private HrLoginService hrLoginService;

    // Handle HR login
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody HrEmployee loginRequest) {
        boolean isAuthenticated = hrLoginService.authenticate(loginRequest.getEmail(), loginRequest.getPassword());

        if (isAuthenticated) {
            return ResponseEntity.ok("Login Successful");
        } else {
            return ResponseEntity.status(401).body("Invalid Credentials");
        }
    }
}
