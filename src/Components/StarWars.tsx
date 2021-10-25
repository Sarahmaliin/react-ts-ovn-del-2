import { useState } from "react"

interface ServerResponseItem{
    name: string;
    gender: string;
}

interface ServerResponseItem extends Array<ServerResponseItem>{}



const StarWars = () =>{

    const [starWarsData, setStarWarsData] = useState< null | ServerResponseItem[]>(null)
    const url: string = 'https://swapi.dev/api/people'
    let names: string;

    async function charBtn(){
        const response = await fetch(url)
        const json = await response.json()
        setStarWarsData(json.results)
        
    }

    return(
        <section className='component'>
            <h1>Star Wars</h1>
            <button onClick={charBtn}>Get characters</button>
            <br/>
            <section className="sWData">
            {starWarsData ? 
            starWarsData.map(item =>{
                names = item.name
                console.log(names)
                let doc = document.querySelector('.sWData')
                const pTag = document.createElement('p')
                console.log(pTag)
                pTag.innerHTML = names;
                doc?.appendChild(pTag)
            })
        : 'loading...'}
            </section>
        </section>
        
    )
}

export default StarWars