package com.saglam.emsservice.service.impl;

import com.saglam.emsservice.dto.EmployeeDto;
import com.saglam.emsservice.entity.Employee;
import com.saglam.emsservice.mapper.EmployeeMapper;
import com.saglam.emsservice.repository.EmployeeRepository;
import com.saglam.emsservice.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.toMapEmployee(employeeDto);
        employeeRepository.save(employee);
        EmployeeDto saveemployeeDto=EmployeeMapper.tomapEmployeeDto(employee);

        return saveemployeeDto;
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
      Employee employee=  employeeRepository.findById(Math.toIntExact(employeeId))
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        return EmployeeMapper.tomapEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
       List<Employee> employees=employeeRepository.findAll();
       return employees.stream().map(EmployeeMapper::tomapEmployeeDto).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long EmployeeId, EmployeeDto employeeDto) {
        EmployeeDto employeeId= getEmployeeById(EmployeeId);
        Employee employee= EmployeeMapper.toMapEmployee(employeeId);
        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());


        return  EmployeeMapper.tomapEmployeeDto(employeeRepository.save(employee));
    }

    @Override
    public boolean deleteEmployee(Long employeeId) {

        employeeRepository.deleteById(Math.toIntExact(employeeId));
        return true;

    }


}
