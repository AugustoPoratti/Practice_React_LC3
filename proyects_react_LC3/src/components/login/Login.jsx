import {useState} from 'react';


function Login () {
    const [userName, setUsername] = useState('');
    const [msj, setMsj] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setUsername(value)

        if (value.includes('o') || value.includes('O')) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
            setMsj('Ingrese un nombre sin la letra o/O')
        } else {
            setMsj('')
        }
    }

    const handleRegister = () => {
        if (!userName || userName.includes('o') || userName.includes('O')) {
            alert('Usuario inválido para registrarse');
        } else {
            alert('Usuario registrado correctamente');
        }
    };

    return (
    <div>
      <label htmlFor="username">user name: </label>
      <input
        type="text"
        id="username"
        value={userName}
        onChange={handleChange}
        placeholder="Ingrese su nombre de usuario"
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{userName}</p>
      <p style={{color:'red'}}>{msj}</p>
    </div>
      );
}



export default Login