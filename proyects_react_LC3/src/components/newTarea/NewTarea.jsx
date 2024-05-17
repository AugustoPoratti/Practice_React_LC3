
import PropTypes from 'prop-types';
import { useState } from 'react';

const NewWork = ({ works, setWorks }) => {
    const [newWork, setNewWork] = useState("");
    const [error, setError] = useState(false);

    const handledNewWork = (e) => {
        setNewWork(e.target.value);
        
    };

    const submit = () => {
        
        if (!newWork.trim()) {
            setError(true);
            alert("Error, debes escribir una tarea")
            return;
        }

        setWorks([...works, newWork.trim()]);
        setNewWork('');
        setError(false);
        
        
    }


  return (
    <div>
      <input 
        type="text" 
        value={newWork}
        onChange={handledNewWork}
        placeholder='Nueva Tarea ...'
        />

      <button onClick={submit}>Añadir Tarea</button>
    </div>
  )
}

NewWork.propTypes = {
    works: PropTypes.array,
    setWorks : PropTypes.func
}

export default NewWork
