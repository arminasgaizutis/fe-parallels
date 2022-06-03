import { useState, useEffect } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section>
        <p>Please login</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='*Enter your email'
          />
          <br />
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            placeholder='*Enter your password'
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Login;
