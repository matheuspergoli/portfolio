import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import useMedia from '../../Hooks/useMedia'

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #333;

  &.navMobile {
    display: block;
    position: absolute;
    right: 15px;
    opacity: 0;
    padding: 0 1rem;
    border-radius: .2rem;
    pointer-events: none;
    transform: translateX(-10px);
    z-index: 100;

    a {
      display: block;
      padding: 10px;
    }
  }

  &.navMobileActive {
    opacity: 1;
    transition: 300ms;
    transform: initial;
    pointer-events: all;
    z-index: 100;
  }

  a {
    color: white;
    font-size: 2rem;
    text-decoration: none;
    
    &.active {
      color: #04c2c9;
    }
  }
`

const BtnMobile = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  padding: 0px;
  height: 40px;
  cursor: pointer;
  transition: all 100ms;
  border-radius: 0.2rem;
  background-color: #333;
  margin: 15px 15px 15px auto;
  border: 1px solid transparent;
  
  &:hover,
  &:focus,
  &.mobileButtonActive {
    outline: none;
    color: #04c2c9;
    border-color: #04c2c9;
    box-shadow: 0 0 0 3px #04c2c9;
  }
  
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 1.2rem;
    border-radius: 2px;
    transition: all 200ms;
    background-color: white;
    box-shadow: 0 6px white, 0 -6px white;
  }

  &.mobileButtonActive::after {
    width: 4px;
    height: 4px;
    transform: rotate(90deg);
    background-color: currentColor;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`

function Navbar() {
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <BtnMobile 
        aria-label='Menu'
        className={mobileMenu ? 'mobileButtonActive' : ''}
        onClick={() => setMobileMenu(!mobileMenu)}></BtnMobile>
      )}
      <NavbarContainer className={`${mobile ? 'navMobile' : ''} ${mobileMenu && 'navMobileActive'}`}>
        <NavLink to='/' end>Home</NavLink>
        <NavLink to='/sobre' end>Sobre</NavLink>
        <NavLink to='habilidades'>Habilidades</NavLink>
      </NavbarContainer>
    </>
  )
}

export default Navbar