import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      
      
    </ul>
           <div className="d-flex">
                 <div className="bg-primary rounded mx-2"onClick={()=>props.togglemode('#f6ebf4')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                 <div className="bg-secondary rounded mx-2"onClick={()=>props.togglemode('#75c9b7')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                 <div className="bg-success rounded mx-2"onClick={()=>props.togglemode('#05c46b')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                 <div className="bg-danger rounded mx-2"onClick={()=>props.togglemode('danger')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                 <div className="bg-warning rounded mx-2"onClick={()=>props.togglemode('warning')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                 <div className="bg-info rounded mx-2"onClick={()=>props.togglemode('info')} style={{height:'30px',width:'30px',cursor:"pointer"}}></div>
                
             </div>
            <form>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" onClick={()=>props.togglemode(null)}  id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.togglemode}</label>
              </div>
            </form>  
  </div>
</nav>
      
    </div>
  )
}
