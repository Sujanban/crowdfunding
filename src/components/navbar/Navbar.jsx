import React from 'react';
import fundingnp from "../../assets/images/fundingnp-logo.png"
import "./navbar.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Home } from '../../pages/home/Home';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
    return (
        <header>
            <div className='logo'>
                <a><img src={fundingnp} alt="" /></a>
            </div>
            <div className='navlinks'>
                <li><NavLink to='/'>Fundrasing</NavLink></li>
                <li><NavLink to='/'>Donations</NavLink></li>
                <li><NavLink to='/'>Topics</NavLink></li>
                <li><NavLink to='/More'>More<IoIosArrowDown/></NavLink></li>
            </div>
            <div className='social'>
            <a href=''><AiOutlineFacebook /></a>
            <a href=''><AiOutlineInstagram /></a>
            <a href=''><AiOutlineLinkedin /></a>
            </div>
        </header>
    )
}
