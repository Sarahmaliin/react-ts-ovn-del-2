import { useEffect, useState } from "react"

interface ServerResponse{
    message: string;
    time: string;
}

const Ajax = () =>{

    const [webData, setWebData] = useState< null | ServerResponse>(null)
    const url: string = 'http://forverkliga.se/JavaScript/api/simple.php?key=value'

    useEffect(() =>{
        async function doAjax(){
            const response = await fetch(url)
            const json = await response.json()
            setWebData(json)
        }
        setTimeout(doAjax, 2000)
    }, [])

    return(
        <section className="component">
        <h1>Ajax</h1>
        {webData ? 'server: ' + webData.message + ', time: '+ webData.time : 'väntar på servern...'}
        </section>
    )
}

export default Ajax