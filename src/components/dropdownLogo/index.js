import React, { useState, useEffect } from 'react'

function DropdownWithLogo(props) {
  const [search, setSearch] = useState("")
  const [arr, setArr] = useState([])
  const [icon, setIcon] = useState(props.icon?props.icon:'')

  useEffect(() => {
      let tmp = []
      if(props.dataOptions){
        tmp = props.dataOptions.filter(val => String(val.symbol).toLowerCase().includes(search.toLowerCase()))
        setArr(tmp)
      }
  }, [search,props.dataOptions])

  useEffect(() => {
    if(props.dataOptions){
        setArr(props.dataOptions)
    }
  }, [props.dataOptions])

  return (
    <div className={`dropdown ci-dropdown ${props.classDropdown} font-12`}>
      <button disabled={props.disabled ? props.disabled : false} className="dropdown-toggle h-100 w-100 d-flex align-items-center" type="button" id="dropdownRiwayatTarikCrypto" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{overflow: "hidden", border:'none', background:'none', outline:'none'}}>
        {icon&&<img src={icon} width={30} className="mr-2"/> } 
        {props.value ? props.value : "Pilih Salah Satu"}
      </button>
      <div className="ci-dropdown-menu dropdown-menu w-100" aria-labelledby="dropdownRiwayatTarikCrypto">
          {
              props.searchBar &&
              <>
                  <div className="container px-2">
                      <div className="input-group ci-inputDefault-bg">  
                          <input onChange={e => setSearch(e.target.value)} type="text"  className="ci-inputDefault-bg-input ci-placeholder-search px-1 py-1 w-100 pr-5" placeholder="Search"/>
                          <div className="ci-inputDefault-bg-appendR" style={{cursor: "pointer"}}>
                              <i className="fas fa-search ci-inputDefault-bg-appendR-icon font-16"></i>
                          </div>
                      </div>
                  </div>
                  <hr className="mx-1"/>
              </>
          }
          <div className="container-fluid ci-dropdown-menu-content px-0 pb-0">
              {arr && arr.map(option => {
                return (
                <button className="dropdown-item py-2 text-white font-12" type="button" onClick={() => {
                    props.onChange(option.symbol)
                    option.icon&&setIcon(option.icon)
                  }} value={option.symbol}>
                  <img src={option.icon} width={32} className="mr-2"/> {option.symbol}
                  </button>
                )
            })}
          </div>
      </div>
  </div>
  )
}

export default DropdownWithLogo
