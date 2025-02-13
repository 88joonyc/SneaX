import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [first_name, setFirst] = useState('');
  const [last_name, setLast] = useState('');
  const [date_of_birth, setDob] = useState('');
  const [wallet, setWallet] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, first_name, last_name, date_of_birth, wallet, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      window.alert('Passwords must match! Please try again.')
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateFirst = (e) => {
    setFirst(e.target.value);
  };

  const updateLast = (e) => {
    setLast(e.target.value);
  };

  const updateDob = (e) => {
    setDob(e.target.value);
  };

  const updateWallet = (e) => {
    setWallet(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles.container}>

    <form onSubmit={(e) => onSignUp(e)} className={styles.signupForm}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className={styles.formContainer}>
        <div className={styles.welcome}>
          <Link className={styles.sneaxh3} to='/'>
        <h3 className={styles.sneaxh3}>Sneax</h3>
        </Link>
        <h3>Walk in style</h3>
        <p>Sneax lets you invest in the shoes you love, commission-free.</p>
      </div>
      <div>
        <input
          placeholder='First Name'
          className={styles.input}
          type='text'
          name='first_name'
          required={true}
          onChange={updateFirst}
          value={first_name}
        />
      </div>
      <div>
        <input
        placeholder='Last Name'
          className={styles.input}
          type='text'
          name='last_name'
          required={true}
          onChange={updateLast}
          value={last_name}
        ></input>
      </div>
        <input
        placeholder='User Name'
        className={styles.input}
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
        />
      </div>
      <div>
        <input
        placeholder='Email'
        className={styles.input}
          type='email'
          name='email'
          required={true}
          onChange={updateEmail}
          value={email}
        />
      </div>
      <div className={styles.dob}>
        <label className={styles.dob_label}>Date of Birth</label>
        <input
          placeholder="Date of Birth"
          className={styles.input}
          type='date'
          name='DOB'
          required={true}
          onChange={updateDob}
          value={date_of_birth}
        />
      </div>
      <div>
        <input
          placeholder="wallet"
          className={styles.input}
          type='number'
          name='wallet'
          required={true}
          onChange={updateWallet}
          value={wallet}
        />
      </div>
      <div>
        <input
        className={styles.input}
        placeholder='Password'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        />
      </div>
      <div>
        <input
        className={styles.input}
        placeholder='Confirm Password'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
      </div>
      <button type='submit' className={styles.btn}>Sign Up</button>
      <div className={styles.disclaimerContainer}>
      <p className={styles.disclaimer}>All investments involve risk, including the possible loss of principal. Investors should consider their investment objectives and risks carefully before investing.
Commission-free trading means $0 commission trading on self-directed individual cash or margin brokerage accounts that trade U.S. listed securities via mobile devices or web. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see Robinhood Financial’s fee schedule to learn more.
Securities trading offered through Robinhood Financial LLC. Brokerage clearing services offered through Robinhood Securities, LLC. Both are subsidiaries of Robinhood Markets, Inc.
Check the background of Sneax Financial LLC and Sneax Securities, LLC on FINRA’s BrokerCheck.
Sneax Terms & Conditions  Disclosure Library  Contact Us  FAQ
© 2021 Sneax. All rights reserved.</p>
</div>
    </form>
    <div className={styles.signContainer}>
        <div className={styles.signText}>
          {/* <Link exact to="/">
                  <img alt='logo' src='https://i.imgur.com/HeZZnbz.png' className={styles.logo}></img>
                </Link> */}
          <div className={styles.textContainer}>
            <div className={styles.textContainer2}>
              <h3 className={styles.h3}>Commission-free Trading</h3>
              <p className={styles.text}>At Sneax, we believe everyone should have easy access to luxury shoes. Break free from commission-fees and make unlimited commission-free trades in Sneaxs.</p>
            </div>
            <h3 className={styles.h3}>Account Protection</h3>
            <p className={styles.text}>Sneax is dedicated to keeping your account information secured.</p>
            <h3 className={styles.h3}>Cuztomized your portfolio</h3>
            <p className={styles.text}>Set up customized lists of your preferred Sneaxs to stay on top of your asses as casually or relentlessly as you'd like. Controlling the flow of information is up to you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
