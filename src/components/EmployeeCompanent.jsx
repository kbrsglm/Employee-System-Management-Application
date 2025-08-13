import React,{useEffect, useState} from 'react'
import { cerateEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import {useNavigate,useParams} from 'react-router-dom'

const EmployeeCompanent=() => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const {id}=useParams()
    const [errors,setErrors]=useState({
        firstName:'',
        lastName:'',
        email:''})

    const navigator=useNavigate();
    useEffect(() => {
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error =>{
                console.error(error);
            })
        }
    })

    function  saveOrUpdateEmployee(e){
        
        e.preventDefault();

        if(validateForm()){

            const employee = {firstName,lastName,email}
            console.log(employee);
            if(id){
                  updateEmployee(id,employee).then((response) => {
                    console.log(response.data);
                    navigator('/')

                   }).catch(errors =>{
                    console.log(errors);
                   })
                }
            else{
                    cerateEmployee(employee).then((response) => {
                        console.log(response.data);
                        navigator('/')
                    }).catch(errors=>{
                        console.log(errors);
                    })
                }
            }
           
        }


    

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'First name is required';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Last name is required';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Email is required';
            valid = false;
        }

        setErrors(errorsCopy);
        
        return valid;

    }
    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }
        else{

            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
               {
                pageTitle()
               }
                <div className='card-body'>
                    <form>
                        <div className='from-group mb-2'>
                            <label className='form-label'>First Name:</label>
                            <input
                            type='text'
                            placeholder='Enter Employee Fist name'
                            name='firstName'
                            value={firstName}
                            className={`form-control ${ errors.firstName ? 'is-invalid': '' }`}
                            onChange={(e)=>setFirstName(e.target.value)}
                            ></input>
                            { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> }

                        </div>
                        <div className='from-group mb-2'>
                            <label className='form-label'>Last Name:</label>
                            <input
                            type='text'
                            placeholder='Enter Employee Last name'
                            name='lastName'
                            value={lastName}
                            className={`form-control ${ errors.lastName ? 'is-invalid': '' }`}
                            onChange={(e)=> setLastName(e.target.value)}
                            ></input>
                             {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email:</label>
                            <input
                                type='text'
                                placeholder='Enter Employee Email'
                                name='email'
                                value={email}
                                className={`form-control ${ errors.email ? 'is-invalid': '' }`}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                            { errors.email && <div className='invalid-feedback'> { errors.email} </div> }
                        </div>
                        <div>
                            <button className='btn btn-succes' onClick={saveOrUpdateEmployee}>Submit</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>

    </div>
  )
}

export default EmployeeCompanent