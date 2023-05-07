import React, { useState } from 'react'
import '../App.css'

const LoginSignup = () => {

        const [value,setValue] = useState();

        const handleChange = () => {

        }

        const handleSubmit = () => {

        }
   
        return (
            <div>
            <section class="sec1">
                <div class="title-page">
                    <p>Activity Room</p>
                </div>
                <div class="main-inputs login">
                    <div class="choices">
                        <input type="radio" id="radio1" name="tabs" value="login" onChange={handleChange} checked={value==="login"}></input>
                        <label id="lab1" for="radio1">Login</label>
                        <input type="radio" id="radio2" name="tabs" value="signup" onChange={handleChange} checked={value==="signup"}></input>
                        <label id="lab2" for="radio2">Sign Up</label>
                    </div>
                    <form id="forms">
                        <div class="form-elem">
                            <div class= "svg-bind">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                             </div>
                        <input type="text" placeholder="Username" autoComplete="off" name="username" 
                            id="username"></input>
                        </div>
                        <div class="form-elem">
                            <div class= "svg-bind">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                                </svg>
                            </div>
                        
                            <input type="password" placeholder="Password" autoComplete="off" name="password" 
                            id="password"></input>
                        </div>
                        <div class="form-elem">
                            <button type="submit"> Log in</button>
                        </div>
                    </form>
                </div>
                </section>  
            
            <section class ="sec2">
                <div class="title-page">Activity Room</div>  
           <div class="main-inputs">
                    <div class="choices">
                        <input type="radio" id="radio1" name="tabs" value="login" checked={value==="login"} ></input>
                        <label id="lab1" for="radio1">Login</label>
                        <input type="radio" id="radio2" name="tabs" value="signup" checked={value==="signup"} ></input>
                        <label id="lab2" for="radio2">Sign Up</label>
                    </div>
            <form id="forms">
                <div class="form-elem">
                    <div class= "svg-bind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </div>
                   <input type="text" placeholder="Username" autoComplete="off" name="username" 
                   id="username"></input>
               </div>
               <div class="form-elem">
                    <div class= "svg-bind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                   <input type="text" placeholder="First Name" autoComplete="off" name="firstname" 
                   id="firstname"></input>
               </div>
               <div class="form-elem">
                    <div class= "svg-bind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </div>
                   <input type="text" placeholder="Last Name" autoComplete="off" name="lastname" 
                   id="lastname"></input>
               </div>
               <div class="form-elem">
                    <div class= "svg-bind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                    </div>
                    
                   <input type="email" placeholder="Email" autoComplete="off" name="email" 
                   id="email"></input>
               </div>
               <div class="form-elem">
                    <div class= "svg-bind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                        </svg>
                    </div>
                    
                   <input type="password" placeholder="Password" autoComplete="off" name="password" 
                   id="password"></input>
               </div>
               <div class="form-elem">
                    <div class= "svg-bind">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                    </div>
                    
                   <input type="password" placeholder="Confirm Password" autoComplete="off" name="confirmpass" 
                   id="confirmpass"></input>
               </div>

               <div class="form-elem">
                <button type="submit" >Sign Up</button>
               </div>

            </form>
           </div>
            </section>
            </div>
        )
    
}

export default LoginSignup;
