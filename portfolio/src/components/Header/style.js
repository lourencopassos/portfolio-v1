import styled from 'styled-components'

export const HeaderContainer = styled.div`
background-color: #0a192f;
height: 100px;
display: flex;
align-items: center;
justify-content: flex-end;
`

export const HeaderMenu = styled.div`
display: flex;
margin-right: 50px;
p {
  color: var(--lightest-slate);
  font-family: SFMono, source-code-pro;
  font-size: 13px;
  padding: 0 10px;

  &:hover {
    color: var(--green);
    cursor: pointer;
  }
}
`

export const Logo = styled.img``  
