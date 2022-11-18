import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";

const Home = () => {
  return (
    <div className='Home'>
      
        <img className='imge_Home' src='./home.jpg'></img>
            <div className="container">
               
                <div><div className='menu'></div></div>
                <div className="content">
                    <div className='logo'><h2>BRODERIE</h2></div>
                    <hr/>
                    <h1>Sony <br/> HANDMADE</h1>
                    <p>Votre boutique en ligne de broderie</p>
                    <Link to="/btn">bande d'annonce</Link>
                    <Link to="/btn view_more_btn">Voir Plus</Link>
                    <Link to="/Navbar">Voir Plus</Link>



                    
                    <hr/>
                    
                

                </div>

            </div>
            <div class="sidebar"></div>
       
    </div>
  )
}

export default Home