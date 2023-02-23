import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const TextBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row-start: 1;
    grid-row-end: 2;
`;

const ImageBox = styled.div`
    grid-row-start: 2;
    grid-row-end: 4;
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

export function Product() {
    return (
        <Container className="container grid grid-row-3 gap-y-1 max-w-full h-screen mt-5" id="product">
            <TextBox className='grow-1'>
                TEXTBOX
            </TextBox>
            <ImageBox className='grid grid-cols-none grid-rows-3 gap-1 md:grid-cols-3 md:grid-rows-none justify-items-center'>
                <Image className='bg-image_ex1' />
                <Image className='bg-image_ex2' />
                <Image className='bg-image_ex3' />
            </ImageBox>
        </Container>
    )
}