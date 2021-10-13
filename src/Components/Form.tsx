import { useState } from "react"

const Form = () =>{

    const [ name, setName ] = useState<string>('')
    const [ lastName, setLastName ] = useState<string>('')

    const handleNameChange = (event: any) =>{
        event.preventDefault()
        setName(event.target.value.toUpperCase())
    }

    const handleLastNameChange = (event: any) =>{
        event.preventDefault()
        setLastName(event.target.value.toUpperCase())
    }

    return(
        <section className="component">
            <input type="text" onChange={handleNameChange} value={name}/>
            <input type="text" onChange={handleLastNameChange} value={lastName} />
        </section>
    )
}
export default Form