import { baseAxios, baseUrlTrade, baseUrlTradeVersion } from '../index'
import Popup from '../../components/popUps'
import errorHandler from '../errorHandler'
import axios from 'axios'

export const postPengajuanKoin = (data, history) => {
    Popup.fire(
        {
            title: "Ajukan Koin!",
            text: "Apakah Anda ingin Membuat Mengajukan Koin ?",
            textBtn: "Ya",
            onClickOk: () => {
                axios.post(`${baseUrlTrade}${baseUrlTradeVersion}/createInfoLaunchpad`, data, {
                    headers:{
                        jwttoken:localStorage.getItem("token")
                    },
                })
                .then((response) => {
                    // history.push("/")
                    Popup.fire({
                        title: "Berhasil !",
                        text: "Koin berhasil Buat."
                    })
                })
                .catch(errorHandler)
            }
        }
    )
}