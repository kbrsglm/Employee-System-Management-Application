package com.saglam.emsservice.mapper;

import com.saglam.emsservice.dto.EmployeeDto;
import com.saglam.emsservice.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto tomapEmployeeDto(Employee employee) {
        return new  EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }
    public static Employee toMapEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );

    }
}
