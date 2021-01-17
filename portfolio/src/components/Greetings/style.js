import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 50px;

p:first-child {
  color: var(--green);
  font-family: SFMono;
  padding: 10px;
  font-size: 16px;
  align-self: flex-flex-start;
}

p:nth-child(2) {
  color: var(--lightest-slate);
  font-family: SFMono;
  padding: 10px;
  font-weight: 600;
  font-size: clamp(40px, 8vw, 65px);
  font-family: Calibre
}

p:nth-child(3) {
  color: var(--slate);
  font-family: SFMono;
  padding: 10px;
  font-weight: 400;
  font-size: clamp(20px, 8vw, 36px);
  font-family: Calibre
}

`