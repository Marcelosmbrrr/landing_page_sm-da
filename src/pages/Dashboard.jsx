import * as React from 'react';
import styled from 'styled-components';
import { Header } from '../components/layout/header/Header';
import { Product } from '../components/layout/product/Product';
import { Contact } from "../components/layout/contact/Contact";
import { Footer } from '../components/layout/footer/Footer';

const Container = styled.div`
 transition: 1s;
`;

export function Dashboard() {
    return (
        <Container className="p-5">
            <Header />
            <Product />
            <Contact />
            <Footer />
        </Container>
    )
}