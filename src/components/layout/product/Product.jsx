import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Image = styled.div`
    width: 330px;
    height: 330px;
    background-position: center center;
    background-size: cover;
    border-radius: 5px;
`;

export function Product() {

    return (
        <Container className="container max-w-full mt-5" id="product">

            <div class="bg-gradient-to-b">
                <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
                    <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
                        <h2 class="text-2xl text-black font-bold md:text-4xl">Decore sua casa com lindas artes digitais impressas em material de alta qualidade!</h2>
                    </div>
                    <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">

                        <div class="relative group md:w-6/12 lg:w-7/12">
                            <div aria-hidden="true" className="bg-clean_canva absolute top-0 w-full h-full rounded-2xl shadow-lg transition duration-500 group-hover:scale-105"></div>
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16 flex justify-center items-center">
                                <Image className='bg-photo1' />
                                <p class="text-gray-700"></p>
                            </div>
                        </div>

                        <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                            <div class="relative p-6 space-y-6 lg:p-8">
                                <h3 class="text-3xl text-gray-700 font-semibold text-center"></h3>
                                <div>
                                    <div class="relative flex justify-around">
                                        <div class="flex items-end">
                                            <span class="text-6xl text-gray-800 font-bold leading-0">R$ 35</span>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" class="w-max space-y-4 py-6 m-auto text-gray-600">
                                    <li class="space-x-2">
                                        <span class="text-green-500 font-semibold"> <FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Impressão em lona canvas.</span>
                                    </li>
                                    <li class="space-x-2">
                                        <span class="text-green-500 font-semibold"><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Tamanho 30x30.</span>
                                    </li>
                                    <li class="space-x-2">
                                        <span class="text-green-500 font-semibold"><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Todas pelo mesmo preço!</span>
                                    </li>
                                </ul>
                                <p class="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                                    <a href="tel:+24300" class="flex space-x-2 items-center text-purple-600">
                                        <svg xmlns="icons/whatsapp.png" fill="currentColor" class="w-6" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="relative group md:w-6/12 lg:w-7/12">
                            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-clean_canva shadow-lg transition duration-500 group-hover:scale-105"></div>
                            <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16 flex justify-center items-center">
                                <Image className='bg-photo2' />
                                <p class="text-gray-700"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}