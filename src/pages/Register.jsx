import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

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

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      const userData = {
        username,
        email,
        password,
        about,
        pic,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
        <h1>Register:</h1>
        <p>Please create an account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            placeholder='*Enter your username'
            onChange={onChange}
          />
          <br />
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            placeholder='*Enter your email'
            onChange={onChange}
          />{' '}
          <br />
          <input
            type='password'
            id='password'
            name='password'
            value={password}
            placeholder='*Enter your password'
            onChange={onChange}
          />
          <br />
          <input
            type='password'
            id='password2'
            name='password2'
            value={password2}
            placeholder='*Confirm your password'
            onChange={onChange}
          />
          <br />
          <input
            type='text'
            id='about'
            name='about'
            value={about}
            placeholder='Tell us little bit about yourself'
            onChange={onChange}
          />
          <br />
          <input
            type='url'
            id='pic'
            name='picc'
            value={pic}
            placeholder='url for your profile pic'
            onChange={onChange}
          />
          <br />
          <button type='submit' >Submit</button>
        </form>
      </section>
    </>
  );
};

export default Register;
