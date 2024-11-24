import React, { useEffect } from 'react';
import recordsvg from '/img/record.svg'
import { Typography, Button, Avatar } from "@material-tailwind/react";
import { Footer } from "./footer";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
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
      Swal.fire({icon:"warning",title:"Please Select Your Standard"})
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
                toEmail: details.stud_email
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
        setpopup(!popup)
      }, 5000);
    },[])

    const handlescroll = ()=>{
      window.scroll({
        top : 1700,
        behavior : "smooth"
      })
    }

    return ( 
      <div className='bg-gradient-to-br from-blue-50 via-white to-purple-50'>
        <RunningText text="Admissions open for Online Classes of JAM and TRB Chemistry 👨‍🎓 Limited seats Available. Register Now ✨ Any Queries contact 📞 9486552761" />
        {popup && <Register popup={popup} handlePopup={handlePopup} handleChange={handleChange} details={details} handlesubmit={handlesubmit} isloading={isloading} setisloading={setisloading}/>}

        <ChemistryHero companyName={companyName} handlePopup={handlePopup} />
        <EducationFeatures handlePopup={handlePopup} />
        <EducationalServices />

        <section className="relative bg-blue-gray-50/50 py-16 px-4 text-xl">
          <div className="container mx-auto">
            <div className="relative mb-6 mt-20 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="flex w-full h-full justify-center px-4 lg:order-2 lg:w-3/12">
                    <div className="-mt-20 w-full h-full">
                      <Avatar
                        src="/img/Chemistry-1.jpg"
                        alt="Profile picture"
                        className="h-full w-full shadow-xl rounded-full"
                      />
                    </div>
                  </div>
                  <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                    <button onClick={handlescroll}>
                    <Button className="bg-blue-400 p-2 py-2 rounded-xl flex">Explore Courses
                    <img src={recordsvg} alt="video" className='w-8 h-8 pl-2'/>
                    </Button>
                    </button>
                  </div>
                  <div className="w-full px-4 lg:order-1 lg:w-4/12">
                    <div className="flex justify-center py-4 pt-8 lg:pt-4">
                      <div className="mr-4 p-3 text-center">
                        <Typography
                          variant="lead"
                          color="blue-gray"
                          className="font-bold uppercase"
                        >
                          5
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          Academic achievements
                        </Typography>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <Typography
                          variant="lead"
                          color="blue-gray"
                          className="font-bold uppercase"
                        >
                          15
                        </Typography>
                        <Typography
                          variant="small"
                          className="font-normal text-blue-gray-500"
                        >
                          Years of Experience
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-8 text-center">
                  <Typography color="blue-gray" className="font-extralight mb-2 text-2xl md:text-3xl">
                    Dr.J.Maheswari Vaseekaran, M.Sc.,M.Phil.,DCS.,Ph.D.
                  </Typography>
                  <Typography color="blue-gray" className="font-extralight mb-2 text-2xl md:text-3xl">
                    Post Doc (IITM)
                  </Typography>
                  <div className="mb-16 flex items-center justify-center gap-2">
                    <BriefcaseIcon className="-mt-px h-6 w-6 text-blue-gray-700" />
                    <Typography className="font-medium text-lg md:text-xl text-blue-gray-700">
                      Founder and CEO of {companyName}
                    </Typography>
                  </div>
                </div>

                <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                  <div className="mt-2 flex flex-wrap justify-center">
                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                      <Typography className="mb-8 font-light text-blue-gray-500 text-2xl">
                      Mentor is always there to listen to your concerns, provide guidance, and offer encouragement. They take a personal interest in your growth and development, and help you overcome obstacles in your path.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <VideoShowcase />
        <FacultyShowcase />
        <TestimonialsCarousel />
        <Footer />
      </div>
    );
}