import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css'
import Resume from '../Resume/Resume';

export default function Home() {
    return (
        <div className="home-container">
            <Profile/>
            <Resume/>
            <Footer/>
        </div>
    )
}

