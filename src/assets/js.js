export const convertNumber = {

    toMoney: (number, curr) => {
        var formatter = new Intl.NumberFormat("en-US");
          
        return curr ? curr+ " "+formatter.format(number):formatter.format(number)
    },
    
    toString: (number) => {
        return number.replace(/[.,\s]/g, '')
    },

    toRupiah:(balance,type)=>{
        if(typeof(balance)==="number"&&balance>0){
            if(!Number.isSafeInteger(balance)){
                let cBalance=new Intl.NumberFormat('en-US', { maximumSignificantDigits: 10 }).format(balance);
                // let checkExponent=String(balance).includes("e");
                // if(checkExponent){
                //     return parseFloat(balance).toFixed(8);
                // }
                return parseFloat(cBalance);
            }
            return new Intl.NumberFormat('en-US', { maximumSignificantDigits: 8 }).format(balance);
        }else{
            return parseInt(0);
        }
    },
    
    tradeRemaining:(stock,amount)=>{
        if(typeof(stock)==="number"&&typeof(amount)==="number"){
            let balance=Number(stock)-Number(amount);
            return balance?Number(balance<1)?new Intl.NumberFormat('en-US', { maximumSignificantDigits: 8 }).format(balance):new Intl.NumberFormat('en-US', { maximumSignificantDigits: 8 }).format(balance):0;
        }else{
            return 0;
        }
    },

    toBillion : (num, digits) => {
        let si = [
            { value: 1, symbol: " USDT" },
            { value: 1E3, symbol: " USDT" },
            { value: 1E6, symbol: " Mil. USDT" },
            { value: 1E9, symbol: " Bil. USDT" },
            { value: 1E12, symbol: " Tril. USDT" },
            // { value: 1E15, symbol: " P" },
            // { value: 1E18, symbol: " E" }
          ];
        let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
    },

    tradeChange:(change, digits)=>{
        if(typeof(change)==="number"){
            if(Number(Number(change).toFixed(digits||2))>0){
                return `+${Number(Math.abs(change)).toFixed(digits||2)} %`
            } else if(Number(Number(change).toFixed(digits||2))<0){
                return `-${Number(Math.abs(change)).toFixed(digits||2)} %`
            } else{
                return "0.00 %";
            }
        }

        if(typeof(change)==="number"){
            return `${Number(change).toFixed(digits)} %`
        } else {
            return '0.00%'
        }
    },

    tradeUpDownChange: (change, digits) => {
        if(typeof(change)==="number"){
            if(Number(Number(change).toFixed(digits||2))>0){
                return "text-success";
            } else if(Number(Number(change).toFixed(digits||2))<0){
                return "text-danger";
            } else{
                return "text-white";
            }
        }
    },

    tradeUpDownChangeHomepage: (change, digits) => {
        if(typeof(change)==="number"){
            if(Number(Number(change).toFixed(digits||2))>0){
                return "text-success";
            } else if(Number(Number(change).toFixed(digits||2))<0){
                return "text-danger";
            } else{
                return "text-white";
            }
        }
    },

    tradeUpDownChangeDinamic: (change, digits, trueCond, falseCond, zeroCond) => {
        if(typeof(change)==="number"){
            if(Number(Number(change).toFixed(digits||2))>0){
                return trueCond;
            } else if(Number(Number(change).toFixed(digits||2))<0){
                return falseCond;
            } else {
                if(zeroCond) {
                    return zeroCond;
                }
            }
        }
    },

}