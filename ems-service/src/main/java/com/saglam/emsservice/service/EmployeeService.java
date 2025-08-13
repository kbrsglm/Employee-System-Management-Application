package com.saglam.emsservice.service;

import com.saglam.emsservice.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    public EmployeeDto createEmployee(EmployeeDto employeeDto);
    public EmployeeDto getEmployeeById(Long EmployeeId);
    public List<EmployeeDto> getAllEmployees();
    public EmployeeDto updateEmployee(Long EmployeeId, EmployeeDto employeeDto);
    public boolean deleteEmployee(Long EmployeeId);
}
