import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Model from "../Model";

export default function Contacts(props) {
    const[user,setUser]=useState({
        name:"",
        phone:"",
        email:"",
        address:"",
        message:""

    });

    let name,value;
    const getUserData = (event)=>{
        name=event.target.name;
        value=event.target.value;
        setUser({...user,[name]:value})
    }
   const postData= async(e)=>{ 
    e.preventDefault();
    const{name,phone,email,address,message}=user

    if(name && phone && email && address && message)
    {
        const res=await fetch("https://reactfirebase-5c999-default-rtdb.firebaseio.com/reactfirebase.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                phone,
                email,
                address,
                message
            })
        })
        if(res){
            setUser({
                name:"",
                phone:"",
                email:"",
                address:"",
                message:""
            })
            //alert("Data Stored Successfully")
            toast.success("Data Stored Successfully",{
                position:"top-center"
            })
        }
    }
    else{
       // handleShow();
        toast.error("All Data are mandatory",{
            position:"top-center"
        })
    }

    }
  return (
    <div className="container">
        <section className="pt-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h3 className="text-center mb-4">Contact us form</h3>
            <form className="row g-3" method="POST">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Full Name
                </label>
                <input type="text" value={user.name} onChange={getUserData} className="form-control" name="name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="Phone Number" className="form-label">
                  Phone Number
                </label>
                <input type="text" value={user.phone} onChange={getUserData} name="phone" className="form-control"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email ID
                </label>
                <input type="text" value={user.email} onChange={getUserData} className="form-control" name="email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="Phone Number"  className="form-label">
                  Address (City)
                </label>
                <input type="text" name="address" value={user.address} onChange={getUserData} className="form-control"/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress"  className="form-label">
                  Message
                </label>
                <textarea name="message" value={user.message}  onChange={getUserData} className="form-control">

                </textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary mb-4" onClick={postData}>
                  Send Data
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
      <button onClick={props.data}>Call Function</button>
    </div>
  );
}
