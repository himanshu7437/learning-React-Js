import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.json()).then((res) => setData(red[currency]))
    console.log(data)
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo;