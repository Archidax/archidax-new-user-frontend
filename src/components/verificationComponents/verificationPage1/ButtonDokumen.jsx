import React from 'react'

function ButtonDokumen({className}) {
    const uploadDokumen = (e) => {
        e.preventDefault()

    }
    return (
        <button onClick={(e) => uploadDokumen(e)} className={`py-2 px-3 border-0 ${className}`} style={{backgroundColor: "#f9ba42"}}>
            Dokumen <i className="fas fa-file-alt"></i><span>  </span>
        </button>
    )
}

export default ButtonDokumen
