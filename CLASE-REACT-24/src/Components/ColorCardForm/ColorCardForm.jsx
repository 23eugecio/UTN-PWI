import React, { useState } from 'react'

const ColorCardForm = ({handleSubmit}) => {
    const formSchema = {
        colors: 4,
        time: 'timeStamp'
    }
    const initialState = {
        time: '',
        color_1: '',
        color_2: '',
        color_3: '',
        color_4: ''
    }
    const [formValues, setFormValues] = useState(initialState)
    


    const handleChangeFormValue = (e) => {
        const valueToChange = e.target.name
        const newValue = e.target.value



        setFormValues({ ...formValues, [valueToChange]: newValue })  /* clonacion */
    }

    const colorsInputs = []
    for (let i = 1; i <= formSchema.colors; i = 1 + 1) {

        colorsInputs.push(
            <div key={i}>
                <label htmlFor={"color_" + i}>Color {i}</label>
                <input name={'color_' + i} id={'color_' + i} type='text' value={formValues['color_' + i]} onChange={handleChangeFormValue}/>
            </div>
        )

    }
    
    return (
        <form onSubmit={(e) => handleSubmit({e, ...formValues})}>
            <h2>Crear tu propia color card</h2>
            {colorsInputs}
            <div>
                <label htmlForm='time'>fecha</label>
                <input types={formSchema.time} name='time' id='time' onChange={handleChangeFormValue} value={formValues.time} form />
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default ColorCardForm
