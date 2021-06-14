import Popup from '../components/popUps'

export const fbMeta = (url, title, description, img) => {
    document.getElementsByName("fbUrl")[0].content = url
    document.getElementsByName("fbTitle")[0].content = title
    document.getElementsByName("fbDescription")[0].content = description
    document.getElementsByName("fbThumb")[0].content = img
}

export const toggleModal = (dataTarget) => {
    if(document.querySelector(dataTarget).classList.contains('show')){
        window.jQuery(dataTarget).modal('hide')
    } else {
        window.jQuery(dataTarget).modal('show')
    }
}


export const errHandler = (err, func) => {
    Popup.close()
    // console.log(err.response,"<><><><><>")
    if(err.response){
        if(err.response.status === 401){
            localStorage.removeItem('token')
            // window.open(window.location.hostname+"/login","_self")
            // history.replace('/login')
        }else {
            Popup.fire({
                title: "Gagal!",
                text: err.response.data.message,
                onClickOk: func ? func : undefined
            })
        }
    }else {
        // localStorage.removeItem('token')
        // window.open("http://localhost:3000/404","_self")
        // Popup.fire({
        //     title: 'Gagal!',
        //     text: "Server sedang sibuk!",
        //     onClickOk: () => 
        // })
    }
}

export const hidePhoneNumber = (number, start, end) => {
  let result = ''
  if(number){
    for(let i = 0; i < number.split('').length; i++){
      if(i > start && i < number.split('').length - end){
        result = result + 'X'
      } else {
        result = result + number.split('')[i]
      }
    }
  } else {
    result = '+62XXXXXXXXXX'
  }
  return result
}

export const parseDate = (date) => {
  let data = new Date(date)
  return `${('0'+data.getMonth()).slice(-2)}-${('0'+data.getDate()).slice(-2)}-${data.getFullYear()}`
}

export const parseTime = (date) => {
  let data = new Date(date)
  return `${('0'+data.getHours()).slice(-2)}:${('0'+data.getMinutes()).slice(-2)}:${('0'+data.getSeconds()).slice(-2)}`
}

export const parseFixedNumber = (amount, maxDecimals = 8) => {
  let newAmount = amount ? amount.toString().replaceAll('.', '') : ''
  // let front = parseInt(newAmount).toString()
  /////
  let front = ''
  if(amount){
    front = newAmount.split(',')[0]
  }
  let newFront = ''
  while(front.length > 3){
    newFront =  '.' + front.substr(front.length-3, 3) + newFront
    front = front.substr(0, front.length-3)
  }
  /////
  let back = ''
  if(amount && newAmount.toString().includes(',')){
    back = ',' + newAmount.toString().split(',')[1].substring(0, maxDecimals)
  }
  /////
  if(amount){
    return front+newFront+back
  } else {
    return ''
  }
}

export function toTitleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}