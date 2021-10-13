import { useEffect, useState } from "react"


const HelloWorld = () =>{

    const [hello, setHello] = useState('')

    useEffect(
        () =>{
            setHello('Hello world!')
        }, []
    )

    return(
        <section className="component">
            <h1 >{hello}</h1>
        </section>
        
    )
}

export default HelloWorld