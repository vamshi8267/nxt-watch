import styled from 'styled-components'

export const SavedContainer = styled.div`
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

export const SavedTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 80px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`

export const SavedVideoTitle = styled.div`
  display: flex;
  align-items: center;
`

export const SavedVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`

export const SavedText = styled.h1`
  color: ${props => props.color}
  font-size: 25px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`

export const NoSavedVideosView = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSavedVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoSavedVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
`

export const NoSavedVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`
