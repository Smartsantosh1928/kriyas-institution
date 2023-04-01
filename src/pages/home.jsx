import React, { useEffect } from 'react';
import Telegramsvg from '/img/logotype.svg'
import Hourglass from '/img/hourglass.svg'
import brochuresvg from '/img/brochure.svg'
import recordsvg from '/img/record.svg'
import { Card,CardHeader,CardBody,Typography,Button,Avatar,CardFooter,Input,Select,Option,Checkbox } from "@material-tailwind/react";
import contactData from "../data/contact-data"
import { Footer } from "./footer";
import {BsLinkedin} from 'react-icons/bs'
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { useState } from 'react';
import Coursecard from '../card/courseCard';
import { coursedata, tndata } from '../data/course-data';
import Swal from 'sweetalert2';
import ReactLoading from 'react-loading';

export function Home() {
    const year = new Date().getFullYear();

    const hanndleDownload = () => {
        fetch('http://localhost:3000/downloadbrochure',
        {
          method:"GET",
        }).then(Response => Response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = "Brochure.pdf";
          link.click();
        })
    }

    const [details, setDetails] = useState({})
    const handleChange = (e) => {
        if(typeof(e) == 'string' &&e.includes("Class"))
        {
        setDetails({ ...details, "stud_std": e })
        console.log(details);
        }
        else{
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
        console.log(details);
        }
    }

    const [isloading,setisloading] = useState(false)
    const scriptURL = "https://script.google.com/macros/s/AKfycbxqePwBS9AriYdbi69jTBdiftstxuPW5cgkoLfG6IZ_w3iidjSHZoqUtaBrXFFoOrs_/exec"

    const handlesubmit = async () => {
      if(details.stud_name == "" || details.stud_name == undefined)
      Swal.fire({icon:"warning",title:"Please Enter Your Name"})
      else if(details.stud_email == "" || details.stud_email == undefined)
      Swal.fire({icon:"warning",title:"Please Enter Your Email"})
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
            'We Will Contact You Soon...'
            )
            fetch("http://localhost:3000/sendmail", 
            { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body:JSON.stringify(details),
            })
            setisloading(false)
            setDetails({});
            document.querySelectorAll("input").forEach(input => input.value = "");
          })
          .catch(error => console.error('Error!', error.message))
        }
    }

    const [popup,setpopup] = useState(true)
    const handlePopup = () => {
      setpopup(!popup)
    }

    useEffect(() => {
      setTimeout(() => {
        setpopup(!popup)
      }, 5000);
    },[])

    if (popup) 
      document.body.style.overflow = 'auto';
    else
    {
      window.scrollTo(0,0);
      document.body.style.overflow = 'hidden';
    }


    const handlescroll = ()=>{
      window.scroll({
        top : 1700,
        behavior : "smooth"
      })
    }

    return ( 
        <>
            <div className='w-full h-auto flex md:flex-row bg-[#f5f5f5] p-5 flex-col'>
                <img src="/img/logo.png" alt="LOGO" className='w-28 h-28 md:w-40 md:h-40 mr-3'/>
                <span className='text-4xl -mt-24 ml-32 md:ml-0 md:text-6xl md:mt-12'>Kriya's Institution</span>
                    <a href="http://t.me/" target="_blank" className='ml-auto -mt-16 md:mt-0 flex flex-row border border-none p-2 rounded-3xl md:mb-32 md:-mr-44'>
                        <img src={Telegramsvg} alt="Telegram" className='w-10 h-10 hover:bg-[#239bcd] rounded-lg' />
                        <span className='text-3xl  hidden md:block'>Telegram Channel</span>
                    </a>
                <button className='bg-blue-400 rounded-lg text-2xl mt-12 m-2 p-2 text-white hover:bg-blue-600 md:mb-20 md:px-6 md:mr-12 md:pt-2 md:mt-16' onClick={handlePopup}>Register</button>
            </div>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 md:-mt-10">
            <div className="absolute top-0 h-full w-full bg-[url('/img/teamwork.jpg')] bg-cover" />
            <div className="absolute top-0 h-full w-full bg-black/50 bg-cover bg-center" />
        </div>
        <div className='w-full h-auto text-4xl bg-[#f5f5f5] text-blue-800 p-5 grid grid-cols-1 md:grid-cols-2'>
            <div className='md:mt-24 mt-0'>
                <div className='flex flex-row items-center justify-center'>
                    <span >Only for Chemistry</span>
                    <img src={Hourglass} alt="Chemistry" className='ml-1 mt-5 w-16 h-16'/>
                </div>
                <span className='md:text-3xl mt-3 text-green-600 text-xl flex justify-center items-center flex-col md:flex-row'>
                    Registrations Opens for this Academic Year
                    <p><pre> </pre>{year} - {year + 1}✨</p>
                </span>
                <Button onClick={hanndleDownload} variant="gradient" className="rounded-2xl mt-10 md:ml-48 bg-blue-500 ">
                <span className='text-2xl flex mt-2'>
                    Download Brochure
                    <img src={brochuresvg} alt="Brochure" className='pl-3 -mr-10 -mb-5' />
                </span>
                </Button>
            </div>
            <div className='p-5 mt-12 md:-mt-10 w-full'>
                <img src="/img/student.png" alt="student" className='h-auto w-auto object-cover'/>
            </div>
        </div>
        <div className="mx-auto mt-20 mb-48 max-w-5xl gap-16 grid grid-cols-1 md:grid-cols-2">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 flex flex-col"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-300 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-3xl md:text-4xl">
                  {title}
                </Typography>
                <Typography className="text-2xl text-blue-gray-600">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
      <div className={`container mx-auto p-4 ${popup ? 'hidden' : 'block'}`}>
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center p-5 bg-blue-400"
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
            <span>Mobile Number</span>
            <input type="text" label="Phone" size="lg" name="stud_phone" onChange={handleChange} placeholder="Type your Mobile Number here" className='outline rounded-md p-2 outline-blue-300'/>
              <span>Select Standard</span>
            <select label="Select Class" name="stud_std" value={details.stud_std} onChange={handleChange} className='outline rounded-md p-2 outline-blue-300'>
              <option value="Class 11 (CBSE)">Class 11 ( CBSE )</option>
              <option value="Class 12 (CBSE)">Class 12 ( CBSE )</option>
              <option value="Class 11 (Tam)">Class 11 ( Medium:Tam )</option>
              <option value="Class 12 (Tam)">Class 12  ( Medium:Tam )</option>
              <option value="Class 11 (Eng)">Class 11 ( Medium:Eng )</option>
              <option value="Class 12 (Eng)">Class 12  ( Medium:Eng )</option>
              <option value="NEET">NEET</option>
            </select>
            <div className="-ml-2.5 flex">
              <checkbox label="I agree the Terms and Conditions" checked={details.terms} name="terms" onChange={(e) => {setDetails(e.target.checked)}}/>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            {
              isloading ? 
              <div className='flex justify-center items-center p-5'>
              <ReactLoading type={"spinningBubbles"} color={"lightblue"} height={'10%'} width={'20%'} /> 
              </div>
              : <button className='px-5 p-2 text-white text-2xl ml-36 bg-blue-400 rounded-lg my-5' onClick={handlesubmit}>
              Register
            </button>
            }
            
         </CardFooter>
        </Card>
      </div>
      <section data-section="course">
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-4 p-10 -mt-16 mb-24 gap-10'>
          {
            coursedata.map(({name,time,batch,fee,img}) => {
              return(
                <Coursecard
                name={name}
                time={time}
                batch={batch}
                fee={fee}
                img={img}
                />
                )
              })
            }
      </div>
      </section>
      <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 p-10 -mt-16 mb-24 md:gap-60 gap-10'>
      {
        tndata.map(({name,time,batch,fee,img}) => {
          return(
            <Coursecard
            name={name}
            time={time}
            batch={batch}
            fee={fee}
            img={img}
            />
          )
        })
      }
      </div>
      <section className="relative bg-blue-gray-50/50 py-16 px-4 text-xl">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-20 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/expert.jpg"
                        alt="Profile picture"
                        className="h-full w-full shadow-xl rounded-full"
                      />
                    </div>
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
                        Degrees
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
                        Experience
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl md:text-3xl">
                  Dr.J.Maheswari Vaseekaran, M.Sc.,M.Phil.,DCS.,Ph.D.
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl md:text-3xl">
                  Post Doc (IITM)
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-bold text-xl text-blue-gray-700">
                   Founder Of Kriya's Academy
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography variant="h6" className="mb-8 text-blue-gray-500 text-2xl">
                    Mentor is always there to listen to your concerns, provide guidance, and offer encouragement. They take a personal interest in your growth and development, and help you overcome obstacles in your path.
                    </Typography>
                      <a href="http://linkedin.com/in/maheswari-j-vaseekaran-46450545" target="_blank">
                        <Button className="flex p-2">
                          <BsLinkedin className="text-base mr-2 mt-1"/>
                          <span className="text-base">
                          Connect With Expert
                          </span>
                        </Button>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
        </>
    );
}

// export default Home;