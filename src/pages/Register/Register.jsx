import { useState } from 'react';
import styles from './Register.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      displayName,
      email,
      password
    };

    if (password !== confirmPassword) {
      setError('As senhas precisam ser iguais!');
      return;
    };

    const res = await createUser(user);
  };

  return (
    <div className={styles.register}>
      <h1>
        Cadastre-se para postar
      </h1>
      <p>
        Crie seu usuário e compartilhe suas histórias
      </p>
      <form onClick={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name='displayName'
            required
            placeholder='Nome do usuário'
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name='email'
            required
            placeholder='Email do usuário'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name='password'
            required
            placeholder='Insira sua senha'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name='confirmPassword'
            required
            placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <button className='btn'>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register;