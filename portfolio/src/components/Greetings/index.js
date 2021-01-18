import React from 'react';
import {Container} from './style'
import Typewriter from 'typewriter-effect';

function index(props) {
  return (
    <Container>
      <p>I'm Lourenço, a</p>
      <p>Business oriented software engineer</p> 
      <p>Behind every code line, <span style={{display:'inline-block'}}><Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString('there is an opportunity 🤑')
            .pauseFor(1500)
            .deleteChars(15)
            .typeString(' a business 🚀')
            .pauseFor(1500)
            .deleteChars(19)
            .typeString(' are people 👥')
            .pauseFor(1500)
            .start()
      }}
        /></span></p>
    </Container>
  );
}

export default index;