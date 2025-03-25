package com.example.Hr_portal.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HrLoginController { 
    // Display login page
    @GetMapping("/login")
    public String showLoginPage() {
        return "login"; // Return the login HTML page
    }

    @GetMapping("/dashboard")
    public String dashboard(){
        return "dashboard";//Return the HR dashboard
    }
}
