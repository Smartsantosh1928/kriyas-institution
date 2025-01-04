import React, { useEffect, useRef } from 'react';
import { Footer } from "./footer";
import { useState } from 'react';
import Swal from 'sweetalert2';
import Register from './register'
import RunningText from './runner';
import TestimonialsCarousel from './TestimonialsCarousel'
import EducationFeatures from './EducationFeatures'
import EducationalServices from './EducationalServices'
import FacultyShowcase from './FacultyShowcase'
import VideoShowcase from './VideoShowcase'
import ChemistryHero from './ChemistryHero'
import Founder from './Founder';
import FacultyGrid from './Faculty/FacultyGrid';
import facultyData from '../data/Faculties'

export function Home() {
    const year = new Date().getFullYear();
    const companyName = "Kriya's Institution"

    const [details, setDetails] = useState({stud_name: "", stud_email: "", stud_phone: "", stud_std: ""})
    const handleChange = (e) => {
        if(typeof(e) == 'string' &&e.includes("Class")) {
          setDetails({ ...details, "stud_std": e })
          console.log(details);
        } else{
          const { name, value } = e.target
          setDetails({ ...details, [name]: value })
          console.log(details);
        }
    }

    const [isloading,setisloading] = useState(false)
    const scriptURL = "https://script.google.com/macros/s/AKfycbwfLqFU9ss83Ok-dyoXq8OowGFTn8pN6HCxd5eq8yEThK67leOt67LgWipHGDxX-LjWnw/exec"

    const handlesubmit = async () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(details.stud_name == "" || details.stud_name == undefined)
      Swal.fire({icon:"warning",title:"Please Enter Your Name"})
      else if(details.stud_email == "" || details.stud_email == undefined)
      Swal.fire({icon:"warning",title:"Please Enter Your Email"})
      else if(!emailRegex.test(details.stud_email))
      Swal.fire({icon:"warning",title:"Invalid Email format"})
      else if(details.stud_phone == "" || details.stud_phone == undefined)
      Swal.fire({icon:"warning",title:"Please Enter Your Mobile Number"})
      else if(details.stud_std == "" || details.stud_std == undefined)
      Swal.fire({icon:"warning",title:"Please Select Any Course"})
      else
      {
        setisloading(true)
        fetch(scriptURL, 
          { method: 'POST', 
          body:new URLSearchParams(details),
        })
        .then(response => {
          console.log('Success!', response);
          Swal.fire(
            'Good job!',
            'You Have Been Registered Successfully!',
            'Mentor Will Contact You Soon...'
            )
            fetch("https://kriyasinstitution.in/mail.php", 
            { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({
                name: details.stud_name,
                course: details.stud_std,
                toEmail: details.stud_email,
                phone: details.stud_phone
              })
            })
            setisloading(false)
            setDetails({stud_name: "", stud_email: "", stud_phone: "", stud_std: ""});
            document.querySelectorAll("input").forEach(input => input.value = "");
            setpopup(false)
          })
          .catch(error => console.error('Error!', error.message))
        }
    }

    const [popup,setpopup] = useState(false)

    const handlePopup = () => {
      console.log(`HandlePopup ${details.stud_email} ${details.stud_name} ${details.stud_phone} ${details.stud_std}`)
      if (popup && (details.stud_name != "" || details.stud_email != "" || details.stud_phone != "" || details.stud_std != "")) {
        Swal.fire({
          title: "Details can be discarded!",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, Discard!"
        }).then((result) => {
          if (result.isConfirmed) {
            setpopup(!popup)
            setDetails({stud_name: "", stud_email: "", stud_phone: "", stud_std: ""})
          }
        });
      } else {
        setpopup(!popup)
        setDetails({stud_name: "", stud_email: "", stud_phone: "", stud_std: ""})
      }
    }

    useEffect(() => {
      setTimeout(() => {
        if (process.env.NODE_ENV != "development") {
          setpopup(!popup)
        }
      }, 5000);
    },[])
    
    const sectionRef = useRef(null);
    const scrollTOCourses = () => {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return ( 
      <div className='bg-gradient-to-br from-blue-50 via-white to-purple-50'>
        <RunningText text="Admissions open for Online Classes of JAM and TRB Chemistry 👨‍🎓 Limited seats Available. Register Now ✨ Any Queries contact 📞 9486552761" />
        {popup && <Register popup={popup} handlePopup={handlePopup} handleChange={handleChange} details={details} handlesubmit={handlesubmit} isloading={isloading} setisloading={setisloading}/>}

        <ChemistryHero companyName={companyName} handlePopup={handlePopup} />
        <EducationFeatures handlePopup={handlePopup} />
        <EducationalServices sectionRef={sectionRef} />
        <VideoShowcase />
        <FacultyShowcase />
        <TestimonialsCarousel />
        <Founder companyName={companyName} handleScroll={scrollTOCourses} />
        <FacultyGrid facultyMembers={facultyData} />
        <Footer />
        
      </div>
    );
}