import { useState } from "react"

const Form = () =>{

    const [ name, setName ] = useState<string>('förnamn')

    const handleNameChange = (event: any) =>{
        event.preventDefault()
        setName(event.target.value.toUpperCase())
    }

    return(
        <section className="component">
            <input type="text" onChange={handleNameChange} value={name}/>
        </section>
    )
}
export default Form