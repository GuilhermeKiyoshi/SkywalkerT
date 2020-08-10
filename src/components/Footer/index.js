import React from 'react';
import { FooterBase } from '../Footer/styles';
import Logo from '../../assets/img/Logo.png';
import IconLinkedin from '../../assets/img/linkedin.png';
import IconGithub from '../../assets/img/github.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Hiroflix" />
      </a>
      <p>
        Guilherme Kiyoshi Mazaro

        <p style={{ display: 'flex', justifyContent: 'center' }}>
            <a target="_blank" href="https://www.linkedin.com/in/guilherme-mazaro-96630a185/"><img alt="Linkedin" style={{ width: '32px', margin: '4px' }} src={IconLinkedin} /></a>
            <a target="_blank" href="https://github.com/GuilhermeKiyoshi"><img alt="Github" style={{ width: '32px', margin: '4px' }} src={IconGithub} /></a>
        </p>

        <p style={{ fontSize: '.6em' }}>

          {' '}
          <a href="https://www.alura.com.br/">Feito na Imersão React da Alura</a>
        </p>

      </p>
    </FooterBase>
  );
}

export default Footer;
