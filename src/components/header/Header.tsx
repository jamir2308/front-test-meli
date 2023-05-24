import React, { useState } from 'react';
import { useNavigate   } from "react-router-dom";
import search from '../../assets/images/ic_Search.png';
import logo from '../../assets/images/Logo_ML@2x.png';
import './header.scss';

const Header: React.FC = () => {

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const searchProduct = ()=>{
    if(username !== ''){
      navigate(`/items?search=${username}`);
    }
  }
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>)=> {
    setUsername(evt.target.value)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchProduct();
    }
  }

  return (
    <header className="header">
      <div className='header-content'>
        <picture className="header-logo">
          <img src={logo} alt="Mercado Libre" />
        </picture>
        <div className="header-search">
          <form className='input-field'>
            <input id='seeker' type="text" placeholder="Nunca dejes de buscar" value={username} onChange={handleChange} onKeyDown={handleKeyDown}/>
            <button type="button" onClick={searchProduct}><img src={search} alt="buscar" /></button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;