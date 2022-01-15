import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css'
import Resume from './Resume/Resume'
import Project from './Project/Project';
import { Router } from 'react-router';


export default function Home() {
    return (
        <div className="home-container">
            <Profile/>
            <Resume/>
            <Project/>
            <Router>  <Footer/></Router>
          
        </div>
    )
}

