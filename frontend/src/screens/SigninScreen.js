import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import { Link, useNavigate } from "react-router-dom";
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';


export default function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
    // if (!error)  navigate("/");
  };
  const SigninScreen = useSelector((state) => state.SigninScreen)
  const {userInfo, loading, error} = SigninScreen;

  useEffect(() => {
    if(userInfo){
    navigate("/shiping")
    }
    else {
      navigate('/');
    }
    }, [userInfo, navigate])
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to={`/register?redirect=${redirect}`}>Create your account</Link>
          </div>
        </div>
      </form>
    </div>
  );
}