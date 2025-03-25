package com.example.Hr_portal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.example.Hr_portal.domain.Employee;
import com.example.Hr_portal.service.EmployeeService;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
public class EmployeeController {
    
    @Autowired
    private EmployeeService employeeService;
    
    @GetMapping("/add-employee")
    public String showAddEmployeePage() {
        return "add-employee"; // Return the add HTML page
    }
    
    @GetMapping("/delete-employee")
    public String showDeleteEmployeePage() {
        return "delete-employee"; // Return the delete HTML page
    }
    
    @GetMapping("/edit-employee")
    public String showEditEmployeePage() {
        return "edit-employee"; // Return the edit HTML page
    }

    @GetMapping("/view-employees")
    public String showViewEmployeePage() {
        return "view-employees"; // Return the View details page
    }
    
    @GetMapping("/update-employee")
    public String showUpdateEmployeePage() {
        return "update-employee"; // Return the update HTML page
    }

    @GetMapping("/update-employee/id={id}")
    public String showUpdateForm(@PathVariable Long id, Model model) {
        Optional<Employee> employee = employeeService.getEmployeeById(id);
        model.addAttribute("employee", employee);
        return "update-employee"; // Make sure "update-employee.html" exists
    }

}

