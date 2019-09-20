import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
<div className="main-header header-transparent sticky-header">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo" href="index.html">
                <img src="img/logos/logo.png" alt="logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header-ml">
                   
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Explore Gyms
                        </a>
                        
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Membership
                        </a>
                       
                    </li>
                    <li className="nav-item dropdown megamenu-li">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                       
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Help
                        </a>
                       
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link" href="login.html">
                        <i className="fa fa-sign-out" aria-hidden="true"></i>Sign In
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="add-listing.html" className="nav-link link-color"><i className="fa fa-plus"></i> Add Listing</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>
    );
  }
}

export default NavBar;
