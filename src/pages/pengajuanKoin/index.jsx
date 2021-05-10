import React, {useState, useEffect} from 'react'
import { Container, Jumbotron } from 'react-bootstrap';
import FooterHomePage from '../../components/footerComponents/footerHomePage/FooterHomePage';
import HeaderBerita from '../../components/headerComponents/headerBerita';
import Step1 from './content/Step1';
import Step2 from './content/Step2';

function PengajuanKoin() {
    const [nextStep, setNextStep] = useState(false)
    
    return (
        <div className="panduan-pengguna">
            <HeaderBerita />
            
            <Jumbotron className="panduan-pengguna-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="font-weight-bold text-gold">Pengajuan Koin</h1>
                        </div>
                        <div className="col-12">
                            <p>
                                Ajukan koin anda di cryptoindex.id dan dapatkan keuntungan sebesar-besarnya.
                            </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            {
                !nextStep ? <Step1 setNextStep={setNextStep} /> : <Step2 />
            }

            <FooterHomePage />
        </div>
    )
}

export default PengajuanKoin
