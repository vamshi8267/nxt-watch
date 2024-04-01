import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`

export const GamingListItem = styled.li`
  background: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`

export const GamingThumbNailImage = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`

export const GamingTitle = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 0px;
`

export const GamingViewsAndDate = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`
