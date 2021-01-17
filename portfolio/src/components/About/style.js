import styled from 'styled-components'

export const Container = styled.div`
background-color: var(--navy);
`

export const PhotoContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
img {
    width: 100%;
  height: auto;
}
`

export const Biography = styled.div`
width: 80%;
line-height: 1.25;

h1 {
color: var(--lightest-slate);
font-size: 48px;
font-weight: 800;

}

p {
  color: var(--slate);
  font-size: 24px;
}

` 




export const Content = styled.div`
display: flex;
margin: 0 50px;

& > div {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
}

`

export const ProfessionalTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p:first-child {
  color: var(--green);
  font-family: SFMono;
  font-weight: 600;
  padding: 10px;
  font-size: 20px;
}

p:last-child {
  color: var(--lightest-slate);
  font-family: SFMono;
  font-weight: 600;
  padding-bottom: 15px;
}




`