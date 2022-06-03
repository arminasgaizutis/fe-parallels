import { useState, useEffect } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    about: '',
    pic: '',
  });

  const { username, email, password, password2, about, pic } = formData;

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
        <h1>Register:</h1>
        <p>Please create an account</p>
      </section>
      <section>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            placeholder='*Enter your username'
          />
          <br />
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='*Enter your email'
          />{' '}
          <br />
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            placeholder='*Enter your password'
          />
          <br />
          <input
            type='password'
            id='password2'
            name='password2'
            value={password2}
            placeholder='*Confirm your password'
          />
          <br />
          <input
            type='text'
            id='about'
            name='about'
            value={about}
            placeholder='Tell us little bit about yourself'
          />{' '}
          <br />
          <input
            type='url'
            id='pic'
            name='picc'
            value={pic}
            placeholder='url for your profile pic'
          />
          <br />
          <button type='submit'>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Register;
