import React, { useState } from 'react'
import styles from "../styles/LoginSignup.module.css";
import TextField from '@mui/material/TextField';
import {useNavigate} from "react-router-dom";
const LoginSignup = () => {

        const [value,setValue] = useState('signup');
        const navigate = useNavigate();
        const handleRadio = (e) => {
            let temp = e.target.value;
            console.log("Hello")
            setValue(temp);
        }

        const handleSubmit = () => {

        }

        const renderSignup = () => {

            return (
                <section className={styles.sec2}>
            <div className={styles["main-inputs"]}>
                        <div className={styles.choices}>
                            <input onChange={handleRadio} type="radio" id="radio1" name="tabs" value="login" checked={value==="login"} ></input>
                            <label id="lab1" htmlFor="radio1">Login</label>
                            <input onChange={handleRadio} type="radio" id="radio2" name="tabs" value="signup" checked={value==="signup"} ></input>
                            <label id="lab2" htmlFor="radio2">Sign Up</label>
                        </div>
                <form className={styles.txtflds}>
                <TextField margin='dense' type='text' id="outlined-basic" label="First Name" variant="outlined" />
                <TextField margin='dense' type='text' id="outlined-basic" label="Last Name" variant="outlined" />
                <TextField margin='dense' type='email' id="outlined-basic" label="Email" variant="outlined" />
                <TextField margin='dense' type='password' id="outlined-basic" label="Password" variant="outlined" />
                <TextField margin='dense' type='password ' id="outlined-basic" label="Confirm Password" variant="outlined" />
                    <button onClick={()=> setValue('login')}  className={styles.butts} type="submit">Sign Up</button>
                </form>
            </div>
            </section>
            )
        }

        const renderLogin = () => {

            return (
            <section className={styles.sec1}>
            <div className={styles["main-inputs"]}>
                        <div className={styles.choices}>
                            <input onChange={handleRadio} type="radio" id="radio1" name="tabs" value="login" checked={value==="login"} ></input>
                            <label id="lab1" htmlFor="radio1">Login</label>
                            <input onChange={handleRadio} type="radio" id="radio2" name="tabs" value="signup" checked={value==="signup"} ></input>
                            <label id="lab2" htmlFor="radio2">Sign Up</label>
                        </div>
                <form style={{marginTop:"100px"}} className={styles.txtflds}>
                <TextField margin='dense' type='email' id="outlined-basic" label="Email" variant="outlined" />
                <TextField margin='dense' type='password ' id="outlined-basic" label="Password" variant="outlined" />
                    <button onClick={()=> navigate('/home')} className={styles.butts} type="submit">Login</button>
                </form>
                <div className={styles.prompts}>Don't have an account yet? Sign up <span onClick={()=> setValue('signup')} className={styles.smallbutts}>here</span></div>
            </div>
            </section>
            )
        }

        return (
            <div className={styles.mainBox}>

                {value === 'signup' ? renderSignup() : renderLogin()}

        </div>
        )

}

export default LoginSignup;
