import { useEffect, useState } from "react"

interface ServerResponse{
    results: object;
    name: string;
}



const StarWars = () =>{

    const [starWarsData, setStarWarsData] = useState< null | ServerResponse>(null)
    const url: string = 'https://swapi.dev/api/people'

    async function charBtn(){
        const response = await fetch(url)
        const json = await response.json()
        setStarWarsData(json.results)
        
    }

    useEffect(() => {
        console.log(starWarsData)
    }, [starWarsData])

    return(
        <section className='component'>
            <h1>Star Wars</h1>
            <button onClick={charBtn}>Get characters</button>
            <br/>
            <section className="sunData">
            {starWarsData ? 'Data: ' : ''}
            </section>
        </section>
        
    )
}

export default StarWars