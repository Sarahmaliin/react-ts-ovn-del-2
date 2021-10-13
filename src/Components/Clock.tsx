import { useEffect, useState } from "react"

const Clock = () =>{

    const [clockIs, setClockIs] = useState<string>('0')
    

    useEffect(() =>{
        let timeId = setInterval(() =>{
            const currentTime = new Date();
            const timeIs = currentTime.toLocaleTimeString('sv-SV')
            setClockIs(timeIs)
            setClockIs(timeIs => timeIs)
        }, 1000)

        const stopTime = () =>{
            clearInterval(timeId)
        }
        
        return stopTime
    }, [clockIs])

    

    return(
        < section className="component">
        <h1 >{clockIs}</h1>
        </section>
    )
    
}

export default Clock