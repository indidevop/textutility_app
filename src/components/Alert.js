import React from 'react'

const capitalize=(word)=>{
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function Alert(props) {
    return (
        <div style={{height:'60px'}}>
        {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
            </div>
        </div>}
        </div>
    )
}
