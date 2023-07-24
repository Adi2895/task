import React from 'react'
// import { a } from 'react-router-dom';
export default function Home() {

    
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a  className="navbar-brand mx-3" href="/">DashBoard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >

                        <li className="nav-item">
                            <a  className="nav-link mx-3" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" to="/" >Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-3" to="/" >Contact</a>
                        </li>
                    </ul>


                </div>
            </nav>
        </>
    )
}
