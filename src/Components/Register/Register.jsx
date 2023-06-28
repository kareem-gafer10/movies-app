import React,{useState} from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import * as Yup from 'yup';
import { useNavigate,Link } from "react-router-dom";
import { useFormik } from 'formik'

const Register = () => {

 


  const [loader, setLoader] = useState(false);
  const navigate = useNavigate()


  const validate = Yup.object({
    name: Yup.string().required('Name is required').min(3,'Name Must Be More than 3 Characters').max(15,'Name Must Be Less than 15 Characters'),
    email:Yup.string().required('Email is required').email('Email Must Be a Valid'),
    phone:Yup.string().required('Phone Number is required').matches(/^01[0125][0-9]{8}$/,'Phone Number Must Be a Valid'),
    password:Yup.string().required('Password is required').min(6,'Password Must Be More Than 6 Characters').max(15,'Password Must Be Less Than 15 Characters'),
    rePassword:Yup.string().required('Repassword is required').oneOf([Yup.ref('password')],'Password and Repassword Not Matched')
  })


  const formik =  useFormik({
    initialValues:{
      name: "",
      email:"",
      phone:"",
      password:"",
      rePassword:""
    },validationSchema:validate,
    onSubmit: function( values ){
      console.log('Submit',values);
      sendRegisterData( values );
    }
  });



  async function sendRegisterData(obj){
    setLoader(true);
    try {
      const { data } = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',obj)
      setLoader(false);
    console.log(data);
    if(data.message === 'success'){
      toast.success('Congratulations',{duration:3000,className:"text-success px-5 fw-bolder my-3"});
      navigate('/login');
    }} catch (error) {
      setLoader(false)
      console.log('Error : ',error);
      toast.error('Email Is Already Used',{duration:3000,className:" text-danger px-5 fw-bolder my-3"});
    }};



    function showPassword(){
      let showPass = document.getElementById('password');
      if(showPass.type === "password" ){
        showPass.type = "text";
      }else{
        showPass.type = "password";
      };
    };
    
    function showRePassword(){
      let showRePass = document.getElementById('rePassword');
      if(showRePass.type === "password"){
        showRePass.type = "text";
      }else{
        showRePass.type = "password"
      }
    };








  return (
    <>
  <div className="mx-auto w-75 page">
    <h2 className="mb-5">Register</h2>


    

   
    <form onSubmit={formik.handleSubmit}>
    <label className='text-muted' htmlFor="name">Name</label>
      <input type="text" id='name' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Name' name='name' value={formik.values.name}  />
      {formik.errors.name && formik.touched.name ? <div className='alert alert alert-danger text-center '>{ formik.errors.name }</div> :""}

      <label className='text-muted' htmlFor="email">Email Address</label>
      <input type="email" id='email' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Email Address' name='email' value={formik.values.email}  />
      {formik.errors.email && formik.touched.email ?<div className='alert alert-danger text-center'>{ formik.errors.email }</div>:"" }

    <label className='text-muted' htmlFor="phone">Phone Number</label>
      <input type="text" id='phone' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='phone' name='phone' value={formik.values.phone}  />
      {formik.errors.phone && formik.touched.phone ?<div className='alert alert-danger text-center '>{ formik.errors.phone }</div>:''}
    
      <label className='text-muted' htmlFor="password">Password</label>
      <div className="inputWithIcon position-relative">
      <input type="password" id='password' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='password' name='password' value={formik.values.password}  />
      {formik.errors.password && formik.touched.password ?<div className='alert alert-danger text-center '>{ formik.errors.password }</div>:''}
      <i className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2 main-icon" onClick={showPassword} ></i>
      </div>

      <label className='text-muted' htmlFor="rePassword">Repassword</label>
      <div className="inputWithIcon position-relative">
      <input type="password" id='rePassword' className='form-control mb-4 mt-2 ' onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Repassword' name='rePassword' value={formik.values.rePassword}  />
      {formik.errors.rePassword && formik.touched.rePassword ?<div className='alert alert-danger text-center '>{ formik.errors.rePassword }</div>:''}
      <i className="fa-solid fa-eye fs-5 position-absolute end-0 top-0 p-2 main-icon" onClick={showRePassword} ></i>
      </div>

      {loader ? <button type='button' className='btn btn-outline-info fw-bolder px-4'>
      <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
        </button> : <button disabled={!formik.isValid } type='submit' className='btn btn-outline-info fw-bolder'>Register</button> }
        <h5 className='text-muted  py-3'>Already have an account ? 
        <Link to={'/login'}>
        <span className='text-muted signIn'>Sign In</span>
        </Link>
        </h5>
    </form>
  </div>
    </>
  );
};

export default Register;




























































































































// import React,{useState} from "react";
// import axios from "axios";
// import Joi from 'joi';
// import { useNavigate } from "react-router-dom";


// const Register = () => {

//   const [user, setUser] = useState( { first_name :"",last_name:"",age:"",email:"",password:""});
//   const [error, setError] = useState([]);
//   const [errorList, setErrorList] = useState([]);
//   const [loader, setLoader] = useState(false);


//   const navigate = useNavigate()





//   const getUserData = (e)=>{
//     let myUser = { ...user }; // copy user
//     myUser[e.target.name] = e.target.value;
//     setUser(myUser);
//   }


//   const registerForm = async(e)=>{
//     e.preventDefault();
//     setLoader(true)
//     let validationResult= validationForm();
//       if(validationResult.error){

//         const allErrors = validationResult.error.details;
//         for (let i = 0; i < allErrors.length; i++) {
//             if (allErrors[i].message.includes('first_name')) {
//                 allErrors[i].message = 'First name must be at least 3 characters long'
//             } else if (allErrors[i].message.includes('last_name')) {
//                 allErrors[i].message = "Last name must be at least 3 characters long"
//             } else if (allErrors[i].message.includes('age')) {
//                 allErrors[i].message = "Age must be less than 80"
//             } else if (allErrors[i].message.includes('email')) {
//                 allErrors[i].message = 'Please enter a valid email'
//             } else if (allErrors[i].message.includes('password')) {
//                 allErrors[i].message = "Password must contain 5-10 small letters, capital letters and numbers"
//             }
//         }


//         setErrorList(validationResult.error.details)
//         setLoader(false)
//       }

//       else{

//         setErrorList([])
//         setError([])

//         let {data}= await axios.post("https://sticky-note-fe.vercel.app/signup", user)

//         if(data.message==="success"){
//           setLoader(false)
//           navigate("/login")
//         }
//         else{
//           setError(data.message)
//           setLoader(false)
//         }

//       }

//   }


//   const validationForm = ()=>{
//     const schema = Joi.object({
//       first_name: Joi.string().alphanum().min(3).max(10).required(),
//       last_name: Joi.string().alphanum().min(3).max(10).required(),
//       age: Joi.number().min(20).max(80).required(),
//       email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
//       password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{5,10}$'))
//   })
//   return schema.validate(user, { abortEarly: false });
//   }




//   return (
//     <>
//   <div className="mx-auto w-75 page">
//     <h2 className="mb-5">Register</h2>

//     <form onSubmit={registerForm}>
//       <label htmlFor="first_name" className=" form-label">First Name</label>
//       <input onChange={getUserData} className="form-control mb-2" type="text" name="first_name" />
//       {errorList.length>0? errorList.filter(err => err.message.includes('First')).map((err, i) =>
//        <div key={i} className='text-danger my-3'>{err.message}</div>) : ""}

//       <label htmlFor="last_name"  className=" form-label">Last Name</label>
//       <input onChange={getUserData} className="form-control mb-2" type="text" name="last_name" />
//       {errorList.length>0? errorList.filter(err => err.message.includes('Last')).map((err, i) =>
//        <div key={i} className='text-danger my-3'>{err.message}</div>) : ""}

//       <label htmlFor="age"  className=" form-label">Age</label>
//       <input onChange={getUserData} className="form-control mb-2" type="number" name="age" />
//       {errorList.length>0? errorList.filter(err => err.message.includes('Age')).map((err, i) =>
//        <div key={i} className='text-danger my-3'>{err.message}</div>) : ""}

//       <label htmlFor="email"  className=" form-label">Email</label>
//       <input onChange={getUserData} className="form-control mb-2" type="email" name="email" />
//       {errorList.length>0? errorList.filter(err => err.message.includes('email')).map((err, i) =>
//        <div key={i} className='text-danger my-3'>{err.message}</div>) : ""}

//       <label htmlFor="password"  className=" form-label">Password</label>
//       <input onChange={getUserData} className="form-control mb-2" autoComplete="" type="password" name="password" />
//       {errorList.length>0? errorList.filter(err => err.message.includes('Password')).map((err, i) =>
//        <div key={i} className='text-danger my-3'>{err.message}</div>) : ""}


//       <button type="submit" className=" btn btn-outline-info mt-4 px-4 py-2">
//         {loader ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
//       </button>
//     </form>
//   </div>
//     </>
//   );
// };

// export default Register;
