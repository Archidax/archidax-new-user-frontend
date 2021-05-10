import React from 'react'

function ButtonDataDiri({className}) {
    const uploadDataDiri = (e) => {
        e.preventDefault()
    }

    return (
        <button onClick={(e) => uploadDataDiri(e)} className={`py-2 px-3 border-0 ${className}`} style={{backgroundColor: "#f9ba42"}}>
            <i className="fas fa-user"></i><span>  </span>
            Data Diri
        </button>
    )
}

export default ButtonDataDiri
