import React from 'react'

export default function Alert(props) {
    const capti=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+word.slice(1);
    }
  return (
    <div style={{height:'80px'}}>
    {props.alert && <div>
        <div className="alert alert-primary" role="alert">
            <strong>{capti(props.alert.state)}</strong>:{props.alert.msg}
        </div>
      
    </div>}
    </div>
  )
}
