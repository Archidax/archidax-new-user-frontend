import React, {useEffect} from 'react'
import Popup from './index'

function PopupSyaratPengguna(props) {
  const title = props.title
  // const text = props.text;
  const content = props.content;
  useEffect(() => {
    return () => {
        Popup.close()
    }
    }, [])
    
  return (
    <div className={'show-popup'}>
        <div className="card ci-customCard-1 text-wrapper" style={{maxWidth: "1000px", height: "600px"}}>
            <div className="card-header top-side">
                <p style={{
                    textAlign: 'center'
                }} className="mb-0 p-1 font-roboto text-dark font-bold font-20" >{title}</p>
            </div>
            <div className="card-body p-4 pl-5 pr-5" style={{overflow: "auto"}}>
                <div className="container-fluid">
                    {content}
                </div>
            </div>
            <div className="card-footer">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <button  onClick={() => {
                            if(props.onClickOk){
                                Popup.close()
                                props.onClickOk()
                            }else {
                                Popup.close()
                            }
                        }} className="ci-btn-warning ci-lg w-100">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopupSyaratPengguna
