export function sort({Data, sort}) {
    if(Data&&Data instanceof Array){
        if(sort === 'maxtomin') {
            let OutputData=Data?Data.reduce((a, b) => {
                a[b.price] = {
                    priceOrder:b.price,
                    price:a[b.price]?a[b.price].price+b.price:0+b.price,
                    amount:a[b.price]?a[b.price].amount+b.amount:0+b.amount,
                    total:a[b.price]?a[b.price].total+b.total:0+b.total,
                    orderLen:a[b.price]?a[b.price].orderLen+1:0+1,
                    stock:a[b.price]?a[b.price].stock+b.stock:0+b.stock,
                };
                return a;
            }, []):[];
            let sortedData = OutputData?OutputData.sort((a,b) => {
                return b. priceOrder - a. priceOrder
            }):[];
            return sortedData;
        } else {
            let OutputData=Data?Data.reduce((a, b) => {
                a[b.price] = {
                    priceOrder:b.price,
                    price:a[b.price]?a[b.price].price+b.price:0+b.price,
                    amount:a[b.price]?a[b.price].amount+b.amount:0+b.amount,
                    total:a[b.price]?a[b.price].total+b.total:0+b.total,
                    orderLen:a[b.price]?a[b.price].orderLen+1:0+1,
                    stock:a[b.price]?a[b.price].stock+b.stock:0+b.stock,
                };
                return a;
            }, []):[];
            let sortedData = OutputData?OutputData.sort((a,b) => {
                return a. priceOrder - b. priceOrder
            }):[];
            return sortedData;
        }
    }else{
        return [];
    }
}