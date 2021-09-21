import React from 'react';

function handleChange(event) {
  this.setState({ [event.target.name]: event.target.value }, () => {
    const { email, password, valid } = this.state;
    const regex = /(.)(.*)@(.)(.*)\.(...)(.*)/;
    const passNum = 6;
    if (email.match(regex) && password.length >= passNum && valid === false) {
      this.setState({ valid: true });
    }
  });
}

export default function Login() {
  return (
    <div className="login-panel">
      <form>
        <label htmlFor="email">
          Email:
          <input
            data-testid="email-input"
            type="email"
            name="email"
            onChange={ () => handleChange() }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ () => handleChange() }
          />
        </label>
        <button data-testid="login-submit-btn" type="button">Entrar</button>
      </form>
    </div>
  );
}
