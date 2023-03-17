const api_url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=thb&include_24hr_change=true"

fetch(api_url)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
        const container = document.querySelector(".container");
        const coins = Object.getOwnPropertyNames(json)
        
        for (let coin of coins) {
            const coinInfo = json[`${coin}`]
            const price = coinInfo.thb
            let change = coinInfo.thb_24h_change

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="image/${coin}.png" alt="${coin}">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>/THB</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">${price} THB</span>
                        <span class="change">${change < 0 ? '' : '+'}${change}</span>
                    </div>
                </div>
            `

        }
    })