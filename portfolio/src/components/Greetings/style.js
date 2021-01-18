import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin:25px 50px;

p:first-child {
  color: var(--green);
  font-family: SFMono;
  padding: 10px;
  font-size: 16px;
}

p:nth-child(2) {
  color: var(--lightest-slate);
  font-family: SFMono;
  padding: 10px;
  font-weight: 600;
  font-size: clamp(40px, 8vw, 80px);
  font-family: Calibre
}

p:nth-child(3) {
  color: var(--slate);
  font-family: SFMono;
  padding: 10px;
  font-weight: 400;
  font-size: clamp(20px, 8vw, 40px);
  font-family: Calibre
}

`

export const TypeWriterContainer = styled.div`
display: inline;

`