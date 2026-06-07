import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App.jsx";
import { ClipLoader } from "react-spinners";

function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()
  const [otp, setotp] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassoword, setConfirmPassword] = useState("")
  const [err, setErr] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSendOtp = async () => {
    setLoading(true)
    setErrorMessage("")
    try {
      const result = await axios.post(`${serverUrl}/api/auth/send-otp`, { email: email.trim() }, { withCredentials: true })
      console.log(result)
      setErr("")
      setStep(2)
      setLoading(false)
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Send OTP failed"
      setErr(error.response.data.message)
      setLoading(false)
    }
  }

  const handleVerifyOtp = async () => {
    setLoading(true)
    setErrorMessage("")
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/verify-otp`,
        { email: email.trim(), otp: otp.trim() },
        { withCredentials: true }
      )
      console.log(result)
      setErr("")
      setStep(3)
      setLoading(false)
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Verify OTP failed"
      setErr(error.response.data.message)
      setLoading(false)
    }
  }

  const handleResetPassword = async()=> {
    setErrorMessage("")
    if(newPassword !== confirmPassoword) {
      setErrorMessage("Password and confirm password do not match.")
      return null
    }
    setLoading(true)
    try {
      const result = await axios.post(`${serverUrl}/api/auth/reset-otp` ,{email: email.trim(), newPassword}, {withCredentials : true})
      setErr("")
      console.log(result)
      setLoading(false)
      navigate("/signin")
    } catch (error) {
      const message = error.response?.data?.message || error.message || "Reset password failed"
      setErr(error?.response?.data?.message)
      setLoading(false) 
    }
  }
  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="flex item-center gap-4 mb-4">
          <IoIosArrowRoundBack size={30} className="text-[#ff4d2d] cursor-pointer" onClick={()=>navigate ("/signin")}/>

          <h1 className="text-2xl font-bold text-center text-[#ff4d2d]">
            Forgot Password
          </h1>
        </div>
        {step == 1 
          && 
          <div>
            <div className='mb-6'>
                <label htmlFor='email' className = 'block text-gray-700 font-medium mb-1'> Email</label>
                <input type='email' className='w-full border
                 border-gray-200 rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} required></input>
            </div>
            <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleSendOtp} disabled = {loading}>
                {loading? <ClipLoader size = {20} color='white' ></ClipLoader> : "Send OTP"}
            </button>
            {err && <p className='text-red-500 text-center my-2.5'>*{err}</p>}
          </div>}

          {step == 2 
            && 
            <div>
              <div className='mb-6'>
                <label htmlFor='otp' className = 'block text-gray-700 font-medium mb-1'> OTP</label>
                <input type='text' className='w-full border
                 border-gray-200 rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter OTP' onChange={(e)=>setotp(e.target.value)} value={otp} required></input>
              </div>
              <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-[#e64323] cursor-pointer`} onClick={handleVerifyOtp} disabled = {loading}>
                {loading? <ClipLoader size = {20} color='white' ></ClipLoader> : "Verify"}
              </button>
              {err && <p className='text-red-500 text-center my-2.5'>*{err}</p>}
              {errorMessage && <p className="mt-3 text-sm text-red-600">{errorMessage}</p>}
            </div>}

            {step == 3 
            && 
            <div>
              <div className='mb-6'>
                <label htmlFor='newPassword' className = 'block text-gray-700 font-medium mb-1'> New Password</label>
                <input type='password' className='w-full border
                 border-gray-200 rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter New Password' onChange={(e)=>setNewPassword(e.target.value)} value={newPassword} required></input>
              </div>

              <div className='mb-6'>
                <label htmlFor='ConfirmPassword' className = 'block text-gray-700 font-medium mb-1'> Confirm Password</label>
                <input type='password' className='w-full border
                 border-gray-200 rounded-lg px-3 py-2 focus:outline-none ' placeholder='Enter Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassoword} required></input>
              </div>
              <button className={`w-full font-semibold py-2 rounded-lg transition duration-200 bg-[#ff4d2d] text-white hover:bg-  [#e64323] cursor-pointer`} onClick={handleResetPassword} disabled = {loading}>
                {loading? <ClipLoader size = {20} color='white' ></ClipLoader> : "Reset Password"}
              </button>
              {err && <p className='text-red-500 text-center my-2.5]'>*{err}</p>}
              {errorMessage && <p className="mt-3 text-sm text-red-600">{errorMessage}</p>}
            </div>}
      </div>
    </div>
  );
}

export default ForgotPassword;
