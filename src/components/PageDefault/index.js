import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
    ${({ paddingAll }) => css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <main paddingAll={paddingAll}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default PageDefault;
