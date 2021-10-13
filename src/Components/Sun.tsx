import { useEffect, useState } from "react"

interface ServerResponse{
    results: object;
    sunrise: string;
    sunset: string;
}

const Sun = () =>{ 
   const [sunData, setSunData] = useState< null | ServerResponse>(null)
    const url: string = 'https://api.sunrise-sunset.org/json'

        async function GbgBtn(){
            const response = await fetch(url + '?lat=57.708870&lang=11.974560')
            const json = await response.json()
            setSunData(json.results)
        }

        async function SthlmBtn(){
            const response = await fetch(url + '?lat=59.334591&lng=18.063240')
            const json = await response.json()
            setSunData(json.results)
        }
    
    return(
        <section className="component">
        <h1>Sunrise/Sunset</h1>
        <button onClick={GbgBtn}>Göteborg</button>
        <button onClick={SthlmBtn}>Stockholm</button>
        {sunData ? 'sunrise: ' + sunData.sunrise + ', sunset: '+ sunData.sunset : ' '}
        </section>
    )
}

export default Sun