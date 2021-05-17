import React from 'react'

// Import Images
import KYC1 from "../../../assets/img/PanduanMariMemulai/KYC_1.png"
import KYC2 from "../../../assets/img/PanduanMariMemulai/KYC_2.png"
import KYC3 from "../../../assets/img/PanduanMariMemulai/KYC_3.png"
import KYC4 from "../../../assets/img/PanduanMariMemulai/KYC_4.png"
import Register1 from "../../../assets/img/PanduanMariMemulai/registrasi_1.png"
import Register2 from "../../../assets/img/PanduanMariMemulai/registrasi_2.png"
import Register3 from "../../../assets/img/PanduanMariMemulai/registrasi_3.png"
import Register4 from "../../../assets/img/PanduanMariMemulai/registrasi_4.png"
import Register5 from "../../../assets/img/PanduanMariMemulai/registrasi_5.png"
import Register6 from "../../../assets/img/PanduanMariMemulai/registrasi_6.png"

function MariMemulai() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2 className="text-gold font-34 font-weight-bold">
                        Let's Get Started
                    </h2>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12 mt-2">
                    <h3 className="text-gold font-16 text-justify">A. Registration Process</h3>
                    <p className="text-gray2 font-15 text-justify">When everything has been prepared, the next step that must be done is the Registration Process, this process can be done with the following steps:</p>
                    <ol>
                        <li className="text-gray2 font-14">First of all, open our website at <a href="https://archidax.net">https://archidax.net</a></li>
                        <li className="text-gray2 font-14">If you are not registered as a archidax member, you can register by clicking <b>"Register Now".</b></li>
                        <div className="text-center">
                            <img src={Register1} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">New users who register must enter their username, e-mail, mobile number, and password. We ask you to include the main cellphone number. Click I agree to the terms and conditions that apply. Then, click <b>"Register".</b></li>
                        <div className="text-center">
                            <img src={Register2} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">The user will receive an activation link notification that has been sent to the user's email. Then, the user is asked to check email to complete registration.</li>
                        <div className="text-center">
                            <img src={Register3} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">The following is the appearance of the verification email. To proceed to the next stage, you must click the <b>Activate Account</b> Now button.</li>
                        <div className="text-center">
                            <img src={Register4} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">If the verification is successful, you will be directed to the login page (login). Enter the verified email and password, then click <b>"Login".</b></li>
                        <div className="text-center">
                            <img src={Register5} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">You will be directed to enter the dashboard.</li>
                        <div className="text-center">
                            <img src={Register6} alt="..." className="img-fluid mt-2 mb-3"/>
                        </div>
                        <li className="text-gray2 font-14">If you want to make transactions such as deposits, withdrawals, and trading on crypto assets, you are required to perform identity verification (KYC).</li>
                    </ol>
                </div>
                <div className="col-12 mt-2">
                    <h3 className="text-gold font-16 text-justify">B. KYC Process</h3>
                    <p className="text-gray2 font-15 text-justify">The KYC process is carried out to ensure that your identity is correct and valid, the steps are as follows :</p>
                    <ol>
                        <li className="text-gray2 font-14">On the dashboard page, click the <b>"not verified"</b> button or you can also click the <b>"Verify Now"</b> button.</li>
                        <img src={KYC1} alt="..." className="img-fluid mt-2 mb-3"/>
                        <li className="text-gray2 font-14">Then, you will be redirected to the account verification page, where you are asked to complete the following data such as filling out a verification form such as full name, place of birth, date of birth, gender, occupation, nationality, and address.</li>
                        <li className="text-gray2 font-14">Also, enter your identity card number and its validity period.</li>
                        <li className="text-gray2 font-14">And enter your emergency contact data which consists of the name of your relative, relative, and emergency telephone number. Next, click on the Next button.</li>
                        <img src={KYC2} alt="..." className="img-fluid mt-2 mb-3"/>
                        <li className="text-gray2 font-14">Still, on the account verification page, you must take a photo of your identity correctly, according to the conditions listed.</li>
                        <li className="text-gray2 font-14">Then, you also have to verify your face by taking a selfie by holding your identity card according to the conditions listed. After that, click on the submit KYC button.</li>
                        <img src={KYC3} alt="..." className="img-fluid mt-2 mb-3"/>
                        <li className="text-gray2 font-14">When the KYC process is complete, you will see a <b>“Verified”</b> icon on your dashboard page.</li>
                        <img src={KYC4} alt="..." className="img-fluid mt-2 mb-3"/>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MariMemulai
