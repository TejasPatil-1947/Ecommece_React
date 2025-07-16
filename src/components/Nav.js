import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { TheamContext } from "../Context/TheamContext";
import light from '../IMG/lightMode.svg';
import dark from '../IMG/darkMode.svg';
function Nav() {
    // onClick={()=>setTheme('dark')}
   const {theme, setTheme}= useContext(TheamContext);
   
   let mystyle={}

   if(theme === 'light'){
        mystyle ={
            background:'#FFFFFF' ,
            color:'#000000'
        }
   }else{
    mystyle={
        background:'#000000',
        color:'#FFFFFF'
    }
   }

    return (
        <>
            <header>
                {/* <nav className="navbar navbar-expand-lg navbar-dark bg-warning" > */}
                    <nav className="navbar navbar-expand-lg " style={mystyle} >
                    <div className="container-fluid">
                        <Link className="navbar-brand text-primary fw-bold"  to="/home">Ecommerce</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active fw-bold " style={mystyle} to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  fw-bold" style={mystyle} to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  fw-bold" style={mystyle} to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  fw-bold" style={mystyle} to="/service">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link  fw-bold" style={mystyle} to="/products">Products</Link>
                                </li>
                                <div style={{height:20}}>
                                <li className="nav-item" style={{margin:10, marginLeft:1350,marginTop:6}}>
                                    {
                                        theme === 'light' ?
                                        (
                                            <img src={dark} style={{height:30}} onClick={()=>setTheme('dark')}></img>
                                        )
                                        :
                                        (
                                            <img src={light} onClick={()=>setTheme('light')}></img>
                                        )
                                    }
                                </li>
                              </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>

                <Outlet />
            </main>

        </>
    );
}
export default Nav;
