import { useEffect, useState } from "react"


const HelloWorld = () =>{

    const [hello, setHello] = useState('')

    useEffect(
        () =>{
            setHello('Hello world!')
        }, []
    )

    return(
        <h1>{hello}</h1>
    )
}

export default HelloWorld