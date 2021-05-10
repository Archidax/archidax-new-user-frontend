import React from 'react'

function SetorButton({className}) {
    const setor = (e) => {
        e.preventDefault()

    }

    return (
        <button className={`btn py-1 px-3 p-0 ci-btn-custom-1 ${className}`} onClick={(e) => setor(e)}>Setor</button>
    )
}

export default SetorButton
