package com.example.Hr_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Hr_portal.domain.HrEmployee;

@Repository
public interface HrEmployeeRepository extends JpaRepository<HrEmployee, Long> {
    HrEmployee findByEmail(String email);
}
