import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer'
import styled from 'styled-components';

const main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function PageDefault({ children }) {
    return(
      <>
        <Menu />
            <main>
                {children}
            </main>
        <Footer />
      </>
    );
}

    export default PageDefault;