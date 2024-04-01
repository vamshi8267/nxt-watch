import styled from 'styled-components'

export const NoVideosView = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NoVideosHeading = styled.h1`
  color: ${props => props.headingColor}
  font-size: 25px;
  font-family: 'Roboto';
`

export const NoVideosNote = styled.p`
  color: ${props => props.noteColor}
  font-size: 18px;
  font-family: 'Roboto';
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
`

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`
