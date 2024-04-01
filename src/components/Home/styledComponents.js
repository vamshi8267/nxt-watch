import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => props.bgColor}
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const Bannercontainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  width: 100%;
  display: ${props => props.display};
  justify-content: space-between;
  padding: 20px;
`

export const BannerImage = styled.img`
  width: 80px;
  height: 30px;
`

export const BannerText = styled.p`
  color: #000000;
  font-size: 15px;
  font-family: 'Roboto';
  @media screen and (min-width: 576) {
    font-size: 20px;
  }
`

export const BannerButton = styled.button`
  background: none;
  color: #000000;
  border: 1px solid #000000;
  padding-left: 10px;
  padding-rigth: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const BannerLeftPart = styled.div`
  width: 50%;
`

export const BannerRigthPart = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BannerCloseButton = styled.button`
  background: none;
  border: none;
  height: 25px;
`

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #909090;
  border-radius: 3px;
  margin: 20px;
  height: 40px;
  width: 60%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
`

export const SearchInput = styled.imput`
  background: none;
  color: ${props => props.color};
  font-family: 'Roboto';
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
`

export const SearchIconContainer = styled.button`
  background-color: #909090;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  border: none;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
