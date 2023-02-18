import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../components/layout/header/Header';
import { Main } from '../components/layout/main/Main';
import { Footer } from '../components/layout/footer/Footer';

const Container = styled.div`
 transition: 1s;
`;

export function Dashboard() {
    return (
        <Container className="p-8">
            <Header />
            <Main />
            <Footer />
        </Container>
    )
}