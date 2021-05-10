import React from 'react'

function InputUser({type, className, id, name, onChange}) {
    return (
        <input type={type} className={className} onChange={onChange}/>
    )
}

export default InputUser
