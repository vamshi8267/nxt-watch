import styled from 'styled-components'

export const VideoPlayer = styled.div`
  padding: 20px;
`

export const PlayVideoTitle = styled.p`
  color: ${props => props.color};
  font-size: 25px;
  font-family: 'Roboto';
`

export const PlayVideoStatus = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`

export const PlayVideoStatusContainer = styled.div`
  display; flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PlayVideoDot = styled.span`
  width: 20px;
  heigth: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-rigth: 5px;
`

export const PlaySocialButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const SocialButton = styled.button`
  color: #3b82f6;
  color: ${props => props.color}
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

export const ButtonText = styled.span`
  color: #3b82f6;
  margin-left: 5px;
  @media screen and (max-width: 576px) {
    dispaly: none;
  }
`

export const HrLine = styled.hr`
  border: 1px solid #909090;
`

export const ChannelImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin-right: 20px;
`

export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  margin: 0px;
`

export const ChannelSubscribers = styled.p`
  color: ${props => props.color};
  font-size: 12px;
  font-family: 'Roboto';
`

export const ChannelDescription = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
`

export const BtnContainer = styled.div`
  background: none;
  display: flex;
`
