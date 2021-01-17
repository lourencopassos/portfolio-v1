import React from 'react';
import  {Container, PhotoContainer, Biography, Content, ProfessionalTitle} from './style'
import AboutMeImage from '../../images/foto.png'

function index(props) {
  return (
    <Container>
        <Content>
          <div>
            <PhotoContainer>
              <img src={AboutMeImage} alt="Lourenço"/>
            </PhotoContainer>
            <ProfessionalTitle>
              <p>Lourenço Passos </p>
              <p>Software Engineer</p>
            </ProfessionalTitle>
          </div>
          <div>
            <Biography>
              <h1>About Me </h1>
              <p>
                Hello, my name is Lourenço! I am a fullstack software developer (React Js and Node Js) passionate about solving problems through creativity, innovation and great code. Originally from the marketing area, I bring my expertise in business area to bring solutions in code that positively impact the company's results. 
              </p>
            </Biography>
          </div>
        </Content>
    </Container>
  );
}

export default index;