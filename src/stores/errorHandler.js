import Popup from '../components/popUps'

export default function errorHandler(err, func){
    Popup.close()
    console.log(err,"<<<<ERROR>>>>")
    if(err.response){
        if(err.response.status === 401){
            Popup.fire({
                title: "Failed!",
                text: err.response.data.message,
                onClickOk: () => {
                    localStorage.removeItem('token')
                    window.open(window.location.origin+"/login","_self")
                }
            })
        }else if(err.response.status === 403){
            Popup.fire({
                title: 'Akses tidak diizinkan !',
                text: err.response.data.message,
                onClickOk: () => {
                    window.open(window.location.origin,"_self")
                }
            })
        } else if(err.response.status === 404){
            console.log(err.response)
            Popup.fire({
                title: 'Failed!',
                text: err.response.data && err.response.data.message ? err.response.data.message : "Server sedang sibuk!",
                onClickOk: () => {
                    if(!err.response.data){
                        window.open(window.location.origin+"/404","_self")
                    }
                }
            })
        }
        else {
            Popup.fire({
                title: "Failed!",
                text: err.response.data.message,
                onClickOk: func ? func : undefined
            })
        }
    } else {
        Popup.fire({
            title: 'Failed!',
            text: "Server Timeout!",
        })
    }
}

export const imageSizeError = (img, size, func) => {
    Popup.close()
    if(img) {
        if(img.size > size){
            Popup.fire({
                title: "Warning!",
                text: `Ukuran file max. ${size/1000} kB`
            })
            return true
        }else {
            if(func){
                func()
            }
            return false
        }
    } else {
        Popup.fire({
            title: "Warning!",
            text: `File tidak ditemukan`
        })
    }
}

export const emailFormatError = (email, func) => {
    Popup.close()
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        Popup.fire({
            title: "Warning!",
            text: "Format email yang anda masukan tidak valid!"
        })
        return true
    }else {
        if(func){
            func()
        }
        return false
    }
}

export const telefonFormatError = (num, func) => {
    Popup.close()
    if(num.length < 7 || num.length > 12){
        Popup.fire({
            title: "Warning!",
            text: "Nomor telefon yang anda masukan tidak valid!"
        })
        return true
    }else {
        if(func){
            func()
        }
        return false
    }
}
export const idCardFormatError = (id, func) => {
    Popup.close()
    if(id.length < 8 || id.length > 16){
        Popup.fire({
            title: "Warning!",
            text: "Nomor identitas yang anda masukan tidak valid!"
        })
        return true
    }else {
        if(func){
            func()
        }
        return false
    }
}
export const kodePosFormatError = (id, func) => {
    Popup.close()
    if(id.length !== 5){
        Popup.fire({
            title: "Warning!",
            text: "Kode pos yang anda masukan tidak valid!"
        })
        return true
    }else {
        if(func){
            func()
        }
        return false
    }
}

