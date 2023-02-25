import * as React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    width: 100%;
`;

export function Footer() {
    return (
        <Container className="container max-w-full h-10 flex justify-center items-center mt-5">
            <div className='text-white'>
                {`Copyright © SM DIGITAL ART ${new Date().getFullYear()}`}
            </div>
        </Container>
    )
}