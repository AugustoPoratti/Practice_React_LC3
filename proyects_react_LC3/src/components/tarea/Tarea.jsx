
import PropTypes from 'prop-types'
import { useState } from 'react'

const Tarea = ({ work, works, setWorks }) => {
    const [check, setCheck] = useState(false)

    const handleChange = () => {
        setCheck(!check)
    }


    const deleteWork = () => {
        setWorks(works.filter(t => t != work))
    }



    return (
        <div style={check ? { color: "red",  display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',} : { display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',}}>
            <input type="checkbox" onChange={handleChange} />
            <p>{work}</p>
            <button onClick={deleteWork} >Eliminar</button>
        </div>
    )
}

Tarea.propTypes = {
    work: PropTypes.string,
    works: PropTypes.array,
    setWorks: PropTypes.func,

}

export default Tarea

