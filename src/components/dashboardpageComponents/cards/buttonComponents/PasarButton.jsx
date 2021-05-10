import React from 'react'

function PasarButton({className}) {
    const pasar = (e) => {
        e.preventDefault()
        
    }
    return (
        <button className={`btn py-1 px-3 p-0 ci-btn-custom-1 ${className}`} onClick={(e) => pasar(e)}>Pasar</button>
    )
}

export default PasarButton
