
export function PercentMath({select,value}) {
    let list=[25,50,75,100];
    let amount=Number(list[select]/100)*Number(value);
    return {result:Math.floor(amount)};
}


export function getChange({open,close}) {
    let result =(close-open)/open
    return {result: result};
}