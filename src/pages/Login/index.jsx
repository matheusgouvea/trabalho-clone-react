import React from 'react';
import styles from './style';
import Button from '../../components/Buttons';

const Login = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form}>
          <label htmlFor="email" style={styles.label}><p>Email:</p></label>
          <input
            type="email"
            id="email"
            style={styles.input}
            placeholder="Digite seu email"
            required
          />

          <label htmlFor="password" style={styles.label}><p>Senha:</p></label>
          <input
            type="password"
            id="password"
            style={styles.input}
            placeholder="Digite sua senha"
            required
          />

          <Button type="primary" onClick={() => console.log('Login clicked')}>
            Entrar
          </Button>
        </form>
        <p style={styles.footerText}>
          Esqueci minha senha <span style={styles.link}><p>Registrar-se</p></span>
        </p>
      </div>
    </div>
  );
};

export default Login;
