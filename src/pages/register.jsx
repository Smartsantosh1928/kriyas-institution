import React, { useEffect } from "react"
import { Card,CardHeader,CardBody,Typography,Button,Avatar,CardFooter,Input,Select,Option,Checkbox } from "@material-tailwind/react";
import ReactLoading from 'react-loading';
import registrationData from "../data/registration-data"

const Register =({popup,handlePopup,handleChange,details,handlesubmit,isloading})=>{
    
  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-backdrop")) {
      handlePopup();
    }
  }

return <div className="fixed inset-0  bg-black bg-opacity-50 z-50  w-full h-full modal-backdrop" onMouseDown={handleClickOutside}>
       <div className="container z-20 mx-auto" >
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 -mt-10 grid h-28 place-items-center p-5 bg-blue-400"
            >
            <button onClick={handlePopup} className='p-1 px-2 hover:bg-[#ffffff] hover:opacity-50 hover:text-black rounded-full ml-auto -mt-2 text-2xl'>&#10006;</button>
            <Typography variant="h3">
              Registration
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 px-5 w-full">
            <span>Name</span>
            <input type="text" label="Name" size="lg" name="stud_name" onChange={handleChange} placeholder="Type your Name here" className='outline rounded-md p-2 outline-blue-300'/>
            <span>Email</span>
            <input type="email" label="Email" size="lg" name="stud_email" onChange={handleChange} placeholder="Type your Email here" className='outline rounded-md p-2 outline-blue-300'/>
            <span>WhatsApp Number</span>
            <input type="text" label="Phone" size="lg" name="stud_phone" onChange={handleChange} placeholder="Type your Mobile Number here" className='outline rounded-md p-2 outline-blue-300'/>
              <span>Select Course/ Tution/ Assistance</span>
            <select label="Select Class" name="stud_std" value={details.stud_std} onChange={handleChange} className='outline rounded-md p-2 outline-blue-300'>
              <option value="" disabled defaultValue={""}>Select Standard</option>
              {registrationData.map((course, index) => {
                return <option key={index} value={course}>{course}</option>
              })}
            </select>
          </CardBody>
          <CardFooter className="pt-0">
            {
              isloading ? 
              <div className='flex justify-center items-center p-5'>
              <ReactLoading type={"spinningBubbles"} color={"lightblue"} height={'10%'} width={'20%'} /> 
              </div>
              : <button className='px-5 p-2 text-white text-2xl ml-32 bg-blue-400 rounded-lg my-5' onClick={handlesubmit}>
              Register
            </button>
            }
            
         </CardFooter>
        </Card>
      </div>
    </div>
}
export default Register;