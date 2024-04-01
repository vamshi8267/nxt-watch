import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const GamingTitleIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width; 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const GamingVideoTitle = styled.div`
  display: flex;
  align-items: center;
`

export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const GamingText = styled.h1`
  color: ${props => props.color};
  font-size: 25px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  a;ign-items: center;
  min-height: 80vh;
`
