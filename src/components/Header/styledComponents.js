import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavbarHeader = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: @{props => props.bgColor};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px; 
  }
`

export const HeaderLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ThemeButton = styled.button`
  background: none;
  border: none;
  margin-right: 10px;
`

export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-family: 'Roboto';
  border: 1px solid;
  border-color: ${props => props.color};
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  margin-left: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`

export const ModalContainer = styled.div`
  background-color: #cbd5e1;
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  color: grey;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Roboto';
  border: 1px solid grey;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const ConfirmButton = styled.button`
  align-self: flex-start;
  background-color: #3b82f6;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Roboto';
  border: 1px solid #3b82f6;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`

export const ModalDesc = styled.p`
  color: #000000;
  font-size: 15px;
  text-align: center;
  font-family: 'Roboto';
  margin: 10px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const ButtonsContainer = styled.div`
  display; flex;
  flex-direction: row;
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  text-decoration: none;
`
