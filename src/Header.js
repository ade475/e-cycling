import React from 'react';
import { Link } from 'react-router-dom';
import images from './images/mylogo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  console.log(basket);
  return (
    <nav className='header'>
      {/* logo */}
      <Link to='/'>
        <img
          src={images}
          alt='paddy'
          className='logo'
          height='80x'
          width='100px'
        />
      </Link>

      {/* searchbar and icon */}
      <div className='header__search'>
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      {/*  link1 */}
      <div className='header__nav'>
        <Link to='/login' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              hello {!user ? 'Guest' : user.email}
            </span>
            <span className='header__optionLineTwo'>sign-in</span>
          </div>
        </Link>

        {/*  link2 */}
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>Orders</span>
          </div>
        </Link>

        {/*  link3 */}

        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Deals</span>
          </div>
        </Link>
        {/*  link4 */}
        <Link to='/checkout' className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
