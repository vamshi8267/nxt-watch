import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
`

export const NotFoundVideosNote = styled.p`
  color: ${props => props.noteColor};
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`
