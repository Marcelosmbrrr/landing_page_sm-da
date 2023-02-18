import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    width: 100%;
`;

export function Footer() {
    return (
        <Container className="container max-w-full h-12 flex justify-center items-center">
            <div>
                {`Copyright © SM DIGITAL ART ${new Date().getFullYear()}`}
            </div>
        </Container>
    )
}