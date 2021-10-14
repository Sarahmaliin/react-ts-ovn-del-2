import { ChangeEvent, FC, useState } from "react"

interface NumberProps{
    highest: any;
    lowest: any;
}

const NumberForm: FC<NumberProps> = ({highest, lowest}) =>{

    const [visible, setVisible] = useState<string>('number')

    async function handleNumberChange(e: ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        const value = e.target.value;
        setVisible(value)
        
        }
        async function MouseLeave(e: React.MouseEvent<HTMLInputElement>){

            const field = e.currentTarget;
            field.style.background = '#e5dbdb'

            if(Number(visible) >= highest){
                setVisible(highest)
            }
            if(Number(visible) <= lowest){
                setVisible(lowest)
            }
    }

    return(
        <section className="component">
            <input className='inputField' type='string' onMouseOut={MouseLeave} onChange={handleNumberChange} value={visible} />
        </section>
    )
}

export default NumberForm