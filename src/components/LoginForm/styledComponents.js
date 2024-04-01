import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-heigth: 100h;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width; 350px;
`

export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`

export const LoginButton = styled.button`
  background-color: #4f46e5;
  width: 100%;
  height: 30px;
  color: #ffffff;
  font-size: 15px;
  font-family: 'Roboto';
  border-radius: 5px;
  border: none;
  margin-top: 20px;
`

export const SubmitError = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
`

export const InputLabel = styled.label`
  color: #475569;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 500;
`

export const UserInput = styled.input`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
  padding: 8px;
  width; 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  outline: none;
  margin-top: 5px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`

export const Checkbox = styled.input`
  width: 5px;
  height: 5px;
  margin-right: 5px;
`

export const ShowPassword = styled.label`
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
`
