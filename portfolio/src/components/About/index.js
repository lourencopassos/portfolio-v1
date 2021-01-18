import React from 'react';
import  {Container, PhotoContainer, Biography, Content, ProfessionalTitle, Skills} from './style'
import AboutMeImage from '../../images/foto.png'

const skills = ['JavaScript', 'HTML & CSS', 'React', 'Typescript', 'Node.js', 'React Native'];

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
                Hello, my name is Lourenço! I am a Full Stack software engineer passionate about solving problems through creativity, innovation and great code. Originally from the marketing area, I bring my expertise in business area to bring solutions in code that positively impact the company's results.
              </p>
              <br/>
               <p>Here are some technologies i've been using in my recent projects: </p>
              


            </Biography>
            <Skills>
              <ul className="skills-list">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>

            </Skills>
          </div>
        </Content>
    </Container>
  );
}

export default index; 