import React from 'react';
import "./Topbar.css";

const Topbar = () => {
    return (
    <div className="Topbar">
        <a className="logoWrap" href="#">
            <div>
                <div className="logo">
                    EDYODA
                </div>
                <p className="subheading">Stories</p>
            </div>
        </a>
        <span className="categories">Explore Categories</span>
        <i className="fas fa-caret-down drop"></i>
        <div className="tooltipDiv" id="categoryDiv">
            <span className="tooltip">Artificial intelligence</span>
            <span className="tooltip">Cloud Computing</span>
            <span className="tooltip">DevOps</span>
            <span className="tooltip">Programming Languages</span>
            <span className="tooltip">Mobile Application Development</span>
            <span className="tooltip">Technology and Tools</span>
            <span className="tooltip">Get a Job in Tech Company</span>
            <span className="tooltip">Others</span>
        </div>
    </div>);
}
 
export default Topbar;