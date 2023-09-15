import { useState } from 'react'

const FormWeb = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true)

  
  const handleNameChange = (event) => {
    const inputName = event.target.value;
    setName(inputName);
    setIsNameValid(inputName.length > 5); // Validar que el nombre no esté vacío
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar el email
    setIsEmailValid(emailRegex.test(inputEmail));
  }

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false) 


    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (isNameValid && isEmailValid) {
        setShow(true)
        setError(false)
    } else {
        setError(true)
        setShow(false)
    }
    };
    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          
          <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={handleEmailChange}
          />
          </div>

        <button type="submit">Enviar</button>
      </form>
      <div>
      {show && <h3 style={{color: 'green'}}>Gracias {name}, te contactaremos cuando antes vía mail</h3>}
      {error && <h4 style={{color: 'red'}}>Por favor verifique su información nuevamente</h4>}
        </div>
    </div>
  );
};
    

  export default FormWeb


