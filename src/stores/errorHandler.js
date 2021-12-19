import Popup from '../components/popUps'

export default function errorHandler(err, func){
    Popup.close()
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
                title: 'Access prohibited!',
                text: err.response.data.message,
                onClickOk: () => {
                    window.open(window.location.origin,"_self")
                }
            })
        } else if(err.response.status === 404){
            console.log(err.response)
            Popup.fire({
                title: 'Failed!',
                text: err.response.data && err.response.data.message ? err.response.data.message : "Server busy!",
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
                text: `Max. file size ${size/1000} kB`
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
            text: `File not found`
        })
    }
}

export const emailFormatError = (email, func) => {
    Popup.close()
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        Popup.fire({
            title: "Warning!",
            text: "Email format is not valid!"
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
    if(num.length < 7){
        Popup.fire({
            title: "Warning!",
            text: "Your phone number is not valid!"
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
            text: "Your identity Number is not valid!"
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
            text: "ZIP Code is not valid!"
        })
        return true
    }else {
        if(func){
            func()
        }
        return false
    }
}

