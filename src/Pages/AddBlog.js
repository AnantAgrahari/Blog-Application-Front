import React,{useState,useEffect} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddBlog = () => {
    const [input,setInput]=useState({
        title:"",
        description:"",
        category:"",
    });
        const navigate=useNavigate();
    const [file,setFile]=useState([]);
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        const fetchAllCategories=async()=>{
            const res=await axios.get("https://blog-application-backend-2.onrender.com/api/v1/get/categories",
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                },
            }
            );
            setCategories(res.data);             //paste getallcategory api from the backend here//
        };
        fetchAllCategories();
    },[]);

    const formdata=new FormData();
    formdata.append("title",input.title);
    formdata.append("category",input.category);
    formdata.append("description",input.description);
    formdata.append("thumbnail",file);


     const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res=await axios.post("https://blog-application-backend-2.onrender.com/api/v1/add/blog",formdata,
            {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("token")}`,
                    },
                
            }
            );       //paste the api of addblog from backend//
                alert(res.data.message);
                navigate("/");
        }

         catch (error) {
            alert(error.response.data.message);
        }
     }

  return (
   <>
   <div className='container shadow'>
    <h2 className='text-center my-3'>Add a new Blog</h2>
    <div className='col-xl-12 my-3 d-flex items-center justify-content-center'>
        <div className='row'>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="formGroupExampleInput" className='form-label'>
                        Title
                    </label>
                    <input
                    type="text"
                    name="title"
                    value={input.title}
                    onChange={(e)=>setInput({... input,[e.target.name]: e.target.value})}
                    className='form-control'
                    id="formGroupExampleInput"
                    placeholder='Blog Title'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="formGroupExampleInput" className='form-label'>
                        Category
                    </label>
                    <select className='form-control' name="category"  onChange={(e)=>setInput({... input,[e.target.name]: e.target.value})}>
                        <option disabled>Select Category</option> 
                          {categories && 
                          categories.map((item)=>{
                            return <option value={item._id}>{item.title}</option>
                          })
                          }

                    </select>
                </div>
                <div className='mb-3'>
                    <label htmlFor="formGroupExampleInput" className='form-label'>
                        Descripton
                    </label>
                    <textarea 
                    name="description"
                    value={input.description}
                    onChange={(e)=>setInput({... input,[e.target.name]: e.target.value})}
                    placeholder='Blog description'
                    className='form-control'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor="formGroupExampleInput" className='form-label'>
                        Thumbnail
                    </label>
                    <input 
                    name="thumbnail"
                    type="file"
                    onChange={(e)=>setFile(e.target.files[0])}
                    className='form-control'
                    id="formGroupExampleInput"
                    placeholder='Select Thumbnail'
                    />
                </div>
                <div className='mb-3'>
                    <button type="submit" className='btn btn-primary btn-block'>
                        Add Blog
                    </button>
                </div>
            </form>
        </div>
    </div>
   </div>
   </>
  )
}

export default AddBlog