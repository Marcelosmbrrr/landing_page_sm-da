import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    position: relative;
`;

const TextBox = styled.div`
    padding: 5px;
    flex-basis: 250px;
`;

const ImageBox = styled.div`
    flex-grow: 2;
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    //transform: perspective(900px) rotateX(1deg);
    transition: 1s;
    &:hover {
        transform: scale(1.05);
    }
`;

const Card = styled.div`
    width: 100%;
`;

export function Product() {

    return (
        <Container className="container bg-clean_canva max-w-full h-screen mt-5" id="product">
            <TextBox className='flex justify-center items-center'>
                <div className='grid grid-cols-none grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-none justify-items-center'>
                    <Card>
                        <div
                            class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-orange-400">
                                Qualidade
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                    </Card>
                    <Card>
                        <div
                            class="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
                            <h5
                                class="mb-2 text-xl font-medium leading-tight text-orange-400">
                                Qualidade
                            </h5>
                            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                        </div>
                    </Card>
                </div>

            </TextBox>
            <ImageBox className='grid grid-cols-none grid-rows-3 gap-1 md:grid-cols-3 md:grid-rows-none justify-items-center'>
                <Image className='bg-photo2' />
                <Image className='bg-photo3' />
                <Image className='bg-photo1' />
            </ImageBox>
        </Container>
    )
}