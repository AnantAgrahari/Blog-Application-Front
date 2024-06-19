import React,{ useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const SingleBlog = () => {
    const navigate=useNavigate();
    const {id}=useParams();
    const [blog,setBlog]=useState({});

    useEffect(()=>{
        const fetchSingleBlog=async()=>{
            const res=await axios.get(`https://blog-application-backend-2.onrender.com/api/v1/get/blog/${id}`,                 //see the video for filling the url//
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                },
            }
            ) ;             
           setBlog(res.data); 
        };
        fetchSingleBlog();
    },[id]);


  return (
    <>
    <div className="conatainer shadow my-3">
        <div className='col-md-12 d-flex items-center justify-content-center bg-light'>
            <div className='row'>
                <h1 className='my-3'>{blog.title}</h1>
                
                <img 
                src={`https://blog-application-backend-2.onrender.com/${blog.thumbnail}`}               //fill the port no.here//
                className='img img-responsive img-rounded my-3' alt=""
                />
                <p className='my-3'>{blog.description}</p>
            </div>
        </div>
        <button onClick={()=>navigate("/")} className='btn btn-primary'>
            Back to Post
        </button>
        
    </div>
    </>
  );
};

export default SingleBlog;