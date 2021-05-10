import React from 'react'

function TarikButton({className}) {
    const tarik = (e) => {
        e.preventDefault()

    }
    return (
        <button className={`btn py-1 px-3 p-0 ci-btn-custom-1 ${className}`} onClick={(e) => tarik(e)}>Tarik</button>
    )
}

export default TarikButton
