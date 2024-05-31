import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getData() {
            const res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`);
            const dataJson = await res.json();
            setData(dataJson[currency]);
        }
        getData();
    }, [currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;