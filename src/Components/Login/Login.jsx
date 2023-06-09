import React,{useState, useContext} from "react";
import axios from "axios";
import { useFormik } from 'formik'
import { toast } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthContext } from "../../context/AuthContext";



const Login = () => {

  const {saveUserData} = useContext(AuthContext);

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()



  const validate = Yup.object({
    email:Yup.string().required('Email is required').email('Email Must Be a Valid'),
    password:Yup.string().required('Password is required').min(6,'Password Must Be More Than 6 Characters').max(15,'Password Must Be Less Than 15 Characters'),
  })


  const formik =  useFormik({
    initialValues:{
      email:"",
      password:"",
    },validationSchema:validate,
    onSubmit: function( values ){
      console.log('Submit',values);
      sendLoginData( values );
    }
  });
  


  function showPassword(){
    let showPass = document.getElementById('password');
    if(showPass.type === "password" ){
      showPass.type = "text";
    }else{
      showPass.type = "password";
    };
  };


  async function sendLoginData(obj){
    setLoader(true);
    try {
      const { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',obj)
      setLoader(false);
    console.log(data);
    if(data.message === 'success'){
      toast.success('Welcome To Popcornflix',{duration:3000,className:"text-info px-5 fw-bolder my-3",iconTheme: {
        primary: '#0dcaf0;',
        secondary: '#fff',
      },});
      localStorage.setItem("userToken", data.token)
      saveUserData();
      navigate('/home');
    }} catch (error) {
      setLoader(false)
      console.log('Error : ',error);
      toast.error('Email Or Password is Wrong',{duration:3000,className:" text-danger px-5 fw-bolder my-3"});
    }};











  return (
    <>
  <div className="mx-auto w-75 page">
    <h2 className="mb-5">Login</h2>

    <form onSubmit={formik.handleSubmit}>

    <label className='text-muted' htmlFor="email">Email Address</label>
      <input type="email" id='email' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email Address' name='email' value={formik.values.email}  />
      {formik.errors.email && formik.touched.email ?<div className='alert alert-danger text-center'>{ formik.errors.email }</div>:"" }

      <label className='text-muted' htmlFor="password">Password</label>
      <div className="inputWithIcon position-relative">
      <input type="password" id='password' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='password' name='password' value={formik.values.password}  />
      {formik.errors.password && formik.touched.password ?<div className='alert alert-danger text-center '>{ formik.errors.password }</div>:''}
      <i className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2 main-icon" onClick={showPassword} ></i>
      </div>

      {loader ? <button type='button' className='btn btn-outline-info fw-bolder px-4'>
        <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
        </button> : <button disabled={!formik.isValid } type='submit' className='btn btn-outline-info fw-bolder'>Login</button> }
        <h5 className='text-muted  py-4'>Don't have an account? 
         <Link to={'/register'}>
         <span className='text-muted signIn '>Register</span>
         </Link>
         </h5>
     
    </form>
  </div>
    </>
  )
}

export default Login;