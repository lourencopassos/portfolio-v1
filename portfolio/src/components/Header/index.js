import React from 'react';
import { HeaderContainer, HeaderMenu } from './style'

function index(props) {
  return (
    <HeaderContainer>
      <HeaderMenu>
        <p>About</p>
        <p>Experience</p>
        <p>Work</p>
        <p>Contact</p>
        <p>Resume</p>
      </HeaderMenu>
    </HeaderContainer>
  );
}

export default index;