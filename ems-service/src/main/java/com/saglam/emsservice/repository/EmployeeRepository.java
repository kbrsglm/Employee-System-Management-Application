package com.saglam.emsservice.repository;

import com.saglam.emsservice.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {


}
