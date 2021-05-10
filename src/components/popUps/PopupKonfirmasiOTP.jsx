import React from 'react'

function KonfirmasiOTP(props) {
    const title = props.value.title; 
    const text = props.value.text;

    return (
        <div className={props.showPopupKonfirmasiOTP ? 'show-popup' : 'hide-popup'}>
        <div className="card ci-customCard-1 text-wrapper">
            <div className="card-header top-side">
                <p style={{
                    textAlign: 'center'
                }} className="mb-0 p-1 font-roboto text-dark font-bold font-20" >Konfirmasi OTP{title}</p>
            </div>
            <div className="card-body p-4 pl-5 pr-5">
                <div className="container">
                    <div className="row my-2">
                        <div className="col-12 col-md-12">
                            <p style={{ textAlign: 'center' }} className="ci-text-white mb-0 font-12">{text}</p>
                        </div>
                    </div>
                    <div className="form-group row mt-3">
                        <label for="Pin_SMS" className="font-16 font-weight-bold text-white col-12 col-md-3 col-form-label">Pin SMS</label>
                        <div className="col-12 col-md-6">
                            <div className="input-group ci-inputDefault-bg">
                                <input type="number" className="form-control ci-inputDefault-bg-input ci-pd" id="Pin_SMS" />
                            </div>
                        </div>
                        <div className="col-12 col-md-3 pl-1">
                            <button className="ci-btnOL-warning w-100 h-100">
                                Kirim Pin
                            </button>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex justify-content-center">
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <button onClick={() => props.sendPin()} className="ci-btn-warning ci-lg w-100">Kirim</button>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <button onClick={() => props.setShowPopupKonfirmasiOTP(false)} className="ci-btn-danger ci-lg w-100">Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
    // return (
    //     <div class="modal fade active" id="konfirmasiOTP" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //         <div class="modal-dialog" role="document">
    //             <div class="modal-content ci-bg-primary">
    //                 <div class="modal-header ci-bg-primary">
    //                     <div className="col-11 d-flex justify-content-center">
    //                         <h5 class="modal-title font-14 font-bold" id="exampleModalLabel">Konfirmasi OTP</h5>
    //                     </div>
    //                     <div className="col-1">
    //                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //                             <span aria-hidden="true">&times;</span>
    //                         </button>
    //                     </div>
    //                 </div>
    //                 <div class="modal-body p-3">
    //                     <div className="d-flex justify-content-center">
    //                         <p className="text-bold text-center">Kami telah mengirimkan kode OTP ke hp anda dengan nomor 628XXXXXXX003 kemudian masukkan PIN ke isian di atas.</p>
    //                     </div>
    //                     <div className="row my-3 d-flex align-items-center">
    //                         <div className="col-3">
    //                         PIN SMS
    //                         </div>
    //                         <div className="col-6">
    //                             <input type="number" className="py-2 w-100 ci-bg-secondary border-0 text-white font-bold"/>
    //                         </div>
    //                         <div className="col-3">
    //                             <button className="py-2 px-2 border-1 border-warning ci-bg-primary text-gold">Kirim PIN</button>
    //                         </div>
    //                     </div>
    //                     <button className="py-3 w-100 border-0 ci-bg-secondary text-white text-bold">Kirim</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default KonfirmasiOTP
