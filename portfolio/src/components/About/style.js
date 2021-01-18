import styled from 'styled-components'

export const Container = styled.div`
margin-top: 50px;
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
  display: block;
}



` 

export const Content = styled.div`
display: flex;
margin: 0 50px;
justify-content: space-around;

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
export const Skills = styled.div`
align-self:   ;
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--slate);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;