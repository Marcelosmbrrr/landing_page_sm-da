import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
`;

export function Contact() {
    return (
        <Container className="container max-w-full h-screen bg-clean_canva mt-5" id="contact">
            <h1>CONTACT</h1>
        </Container>
    )
}