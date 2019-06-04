
let http =require('http');

function getApi(result) {
//создаем функцию с аргументом result,куда будем передавать массив данных из запроса.
    let shitprice = {date:'0',price:99999};
    //парсим результат и получаем массив
    let data = JSON.parse(result);
    for (price of data.best_prices)
        {
            let date = price.depart_date.split('-');
        if (+date[0] === 2019 && +date[1] === 9 || +date[1] === 10 || +date[1] === 11)
            {
            if (price.value < shitprice.price )
                {
                shitprice.price = price.value;
                shitprice.date = price.depart_date;
                }

            }
        }
    console.log(("Дешевле всего лететь из Москвы в Ниццу " + shitprice.date + " Это будет стоить " + shitprice.price + "руб."));
}

//Когда лень получать массив данных с api копипастом
http.get('http://min-prices.aviasales.ru/calendar_preload?origin=MOW&destination_iata=NCE&depart_date=2019-09-15&one_way=true', (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        // Consume response data to free up memory
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            getApi(rawData);
        } catch (e) {
            console.log(e.message);
        }
    });
});