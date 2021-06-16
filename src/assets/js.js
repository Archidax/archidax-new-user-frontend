export const convertNumber = {

    toMoney: (number, curr) => {
        var formatter = new Intl.NumberFormat("ID");
          
        return curr ? curr+ " "+formatter.format(number):formatter.format(number)
    },
    
    toString: (number) => {
        return number.replace(/[.,\s]/g, '')
    },

    toRupiah:(balance,type)=>{
        if(typeof(balance)==="number"&&balance>0){
            if(!Number.isSafeInteger(balance)){
                if(type&&type.toUpperCase()==="CRYPTO"){
                    return parseFloat(parseFloat(balance).toFixed(8));
                }
            }
            return parseInt(balance).toLocaleString("id-ID");
        }else{
            return parseInt(0);
        }
    },

    tradeRemaining:(stock,amount)=>{
        if(typeof(stock)==="number"&&typeof(amount)==="number"){
            let balance=Number(stock)-Number(amount);
            return balance?Number(balance<1)?Number(balance).toFixed(10):Number(balance).toLocaleString("id-ID"):0;
        }else{
            return 0;
        }
    },

    toBillion : (num, digits) => {
        let si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: " Rb" },
            { value: 1E6, symbol: " Jt" },
            { value: 1E9, symbol: " M" },
            { value: 1E12, symbol: " T" },
            { value: 1E15, symbol: " P" },
            { value: 1E18, symbol: " E" }
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

    tradeRemaining:(stock,amount)=>{
        if(typeof(stock)==="number"&&typeof(amount)==="number"){
            let balance=Number(stock)-Number(amount);
            return balance?Number(balance<1)?Number(balance).toFixed(10):Number(balance).toLocaleString("id-ID"):0;
        }else{
            return 0;
        }
    },

}

