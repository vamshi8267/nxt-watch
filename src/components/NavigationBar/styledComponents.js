import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBar = styled.div`
  display: flex;
`

export const NavigationLgContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 92%;
  width: 250px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-contnt: space-between;
  top: 60px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NavOptions = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  flex-grow: 1;
  padding: 0px;
  margin-top: 0px;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const NavLinkContainer = styled.li`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
`

export const NavText = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'ROboto';
  margin-left: 15px;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const ContactHeading = styled.p`
  color: ${props => props.color};
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
`

export const ContactIcons = styled.div`
  display: flex;
  align-items: center;
`

export const ContactNote = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-family: 'Roboto';
`

export const ContactImage = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  margin-right: 10px;
`

export const NavigationSmallContainer = styled.nav`
  background-color: ${props => props.bgColor};
  height: 60px;
  width: 100%;
  position: fixed;
  display: flex;
  justify-contnt: space-between;
  align-items: center;
  padding: 10px;
  bottom: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
