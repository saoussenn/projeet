
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../redux/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import"./Register.css"



const Register = () => {
    const isAuth = localStorage.getItem("Token")
    const navigate= useNavigate();
   const [register, setregister] = useState({
    name:"",
    lastName:"",
    email:"",
    password:"",
    phone:"",
    isAdmin: false,
   });

   const dispatch = useDispatch();

    return <div>
        <section>
        <div class="image"></div>
        <form action="">
            <h2><span>.regist</span>ration</h2>
           
           <label>Name</label>
           <input 
            type="text"
            className="formTextItem"
            onChange={(e) => setregister({...register,Name:e.target.value})}
            />

            <label>lastName</label>
            <input type="text"
            className="formTextItem"
            onChange={(e) => setregister({...register,lastName:e.target.value})}
            />

            <label>password</label>
            <input 
            type="password"
            className="formTextItem"
            placeholder="**************"
            onChange={(e) => setregister({...register,password:e.target.value})}
            />

            <label>Confirmation du mot de passe</label>
            <input type="text"
            className="formTextItem"
            placeholder="**************"
            onChange={(e) => setregister({...register,Confirmationdumotdepasse:e.target.value})}
            />

            <label>email</label>
            <input 
            type="text"
            className="formTextItem"
            placeholder="email@exmaple.com"
            onChange={(e) => setregister({...register,email:e.target.value})}
            />
            
            
            <textarea name="" id=""  cols="30" rows="10"></textarea>

            
            <button 

            
            onClick={()=> {
                dispatch(userRegister(register));
            }}
            >
                s'inscrire
                </button>

               <h5>u already have account<Link to="/login">sign in</Link></h5>

        </form>

        <p class="request-message">Veuillez remplir tous les champs !</p>
       <p class="information">Vous avez un compte ? <a href="#">Se connecter</a></p>
    </section>

    </div>;

};



export default Register
