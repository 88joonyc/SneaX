import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import styles from './NavBar.module.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)
  const sneax = useSelector((state) => Object.values(state.sneax))
  const [ searchInput, setSearchInput ] = useState('')

  const filter = (sneakers, query) => {
    return sneakers.filter((shoe) => {
      const sneakerName = shoe.name.toLowerCase()
      const sneakerBrand = shoe.brand_name.toLowerCase()
      if (sneakerName.includes(query)) return sneakerName.includes(query)
      if (sneakerBrand.includes(query)) return sneakerBrand.includes(query)
    })
  }

  const kicks = filter(sneax, searchInput)

  return (
    <div>
    {!sessionUser ?
    <nav className={styles.navBar}>
      <div className={styles.logo}>
        <Link to='/'>
        <img className={styles.photo} src='https://i.imgur.com/mu6iY5g.png'></img>
        </Link>
      </div>
      <div className={styles.btnContainer}>
      <NavLink to='/login'>
      <button className={`${styles.btn} ${styles.btn1}`}>Log in</button>
      </NavLink>
      <NavLink to='/signup'>
      <button className={`${styles.btn} ${styles.btn2}`}>Sign up</button>
      </NavLink>
      </div>
    </nav> :

    <nav className={styles.navBar2}>
      <div className={styles.logo}>
      <Link to='/'>
        <img className={styles.photo} src='https://i.imgur.com/mu6iY5g.png'></img>
        </Link>
      </div>
      <form className={styles.searchForm}>
      <div className={styles.searchBarDiv}>

        <input
          placeholder='Search for your favorite Sneax'
          type='text'
          className={styles.searchBar}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className={styles.searchBtn}><i class="fab fa-searchengin"></i></button>
      </div>
      </form>

      <div className={styles.dropContainer}>
        <div className={styles.dropdown}>
            <i className="icon far fa-user-circle fa-3x"></i>
            <div className={styles.dropdownContent}>
              <div className={styles.account}>
              <p>{`${sessionUser.first_name} ${sessionUser.last_name}`}</p>
              <p>User Name: {sessionUser.username}</p>
              <p>Email: {sessionUser.email}</p>
              <p>Purchasing power: ${sessionUser.wallet}</p>

              </div>

              <div className={styles.account}>
              <p>Free Sneax</p>
              <p>Account</p>
              <p>Banking</p>
              <p>Recurring</p>
              <p>History</p>
              <p>Settings</p>
              </div>

              <div className={styles.settingDrop}>
              <p>Help Center</p>
              <p>Contact Us</p>
              <p>Disclosures</p>
              </div>
              <Link className={styles.links} to='/'><LogoutButton /></Link>

              </div>
              </div>
      </div>
    </nav> }
    {sessionUser ?
    <div className='searchfield'>
      {kicks.map(sneaker => (
        <div className='searchfield-container'>
          <ul>
            <Link to={`/sneax/${sneaker.id}`}>
              <li>{sneaker.name}</li>
            </Link>
          </ul>
        </div>
      ))}
      {/* {kicks.map(sneaker => (
        <div className='searchfield-container'>
          <ul>
            <Link to={`/sneax/${sneaker.id}`}>
              <li>{sneaker.brand_name}</li>
            </Link>
          </ul>
        </div>
      ))} */}
    </div>
    : null}
    </div>
  );
}

export default NavBar;
