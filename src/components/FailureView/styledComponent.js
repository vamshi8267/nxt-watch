import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  felx-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

export const FailedImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const FailedHeading = styled.h1`
  color: ${props => props.headingColor}
  text-align: center
  font-size: 25px;
  font-family: 'Roboto';
`

export const FailedNote = styled.p`
  color: ${props => props.noteColor}
  text-align: center;
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
`
