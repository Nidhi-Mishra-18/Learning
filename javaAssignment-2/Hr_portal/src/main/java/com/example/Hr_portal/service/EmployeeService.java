package com.example.Hr_portal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Hr_portal.domain.Employee;
import com.example.Hr_portal.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    //This function will return all the employee from db
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    //THis function will used to add the employee to the db
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    //THis function will used  to delete the employee from the db
    @Transactional
    public boolean deleteEmployee(Long id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    //This function will return employee details by id
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }

    //This function will update the details of the employee
    public boolean updateEmployee(Employee updatedEmployee) {
        Optional<Employee> existingEmployee = employeeRepository.findById(updatedEmployee.getId());

        if (existingEmployee.isPresent()) {
            Employee employee = existingEmployee.get();
            employee.setEmployeeId(updatedEmployee.getEmployeeId());
            employee.setName(updatedEmployee.getName());
            employee.setEmail(updatedEmployee.getEmail());
            employee.setDepartment(updatedEmployee.getDepartment());
            employee.setSalary(updatedEmployee.getSalary());
            employeeRepository.save(employee);
            return true;
        }
        return false;
    }
}
