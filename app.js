const axios = require('axios');

    const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json';

     axios
        .get(endpoint)
        .then((res) => {
            if (!process.argv[2]) {
                let coutBitcoin = res.data.bpi.USD.rate
                let devise = (res.data.bpi.USD.code).toUpperCase()
                console.log("Le cout du BitCoin en " + devise + " est " + coutBitcoin);
            } else {
                    let devise = (process.argv[2]).toUpperCase();
                    let coutBitcoin = res.data.bpi[devise].rate
                    console.log("Le cout du BitCoin en " + devise + " est " + coutBitcoin);
            }
            
            
        })
        .catch(err => err.message)














   