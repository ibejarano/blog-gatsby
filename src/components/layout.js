import React from 'react';
import Header from './header';
import Footer from './footer';
import Container from '@material-ui/core/Container';

export default function Layout(props){
    return(
        <div >
            <Container maxWidth="lg">
                <Header />
                {props.children}
                </Container>
            <Footer />
        </div>

    );
};
