import { useState, useEffect } from "react"

interface NotificationProps {
    message: string;
}

const Notification = ({message}: NotificationProps) =>{

    const [seconds, setSeconds] = useState<number>(0)
    const [noteVisible, setNoteVisible] = useState<string>('hidden')

    useEffect(() =>{
        let intervalTime = setTimeout(() =>{
            setSeconds(s => s + 1)
            setNoteVisible('show')
        }, 3000)

        return () =>clearTimeout(intervalTime)
    }, [seconds])


    return(
        <section className={noteVisible}>
        <h1 >{message}</h1>
        </section>
    )
}

export default Notification