import React from 'react';
import { render } from '@testing-library/react';
import './css/Navbar.css';
import logoasme from './imgs/logoasme.png'

function Navbar(){


    return(
        
        
        <div>
            <nav class="navbar navbar-default  navbar-fixed-top  ">
                <div class="container-fluid">
                    
                    
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#"><img id='logo' src={logoasme} alt="ASME LOGO"/></a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon mr-auto"><i class="fas fa-bars"></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="nav navbar-nav navbar-right navitems  ">
                        <li class='active'><a href="#aboutus">About Us</a></li>
                        
                        
                        <li><a href="#timeline">Timeline</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#achievements">Achievements</a></li>
                        <li><a href="#contactus">Contact Us</a></li>
                    </ul>
                </div></div>
            </nav>

        </div>
        
        
        
        
        
       

    );

}


export default Navbar;