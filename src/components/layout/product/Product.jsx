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

            <div className="bg-gradient-to-b">
                <div className="container m-auto px-6 py-20 md:px-12 lg:px-20">

                    {/* Title */}
                    <div className="m-auto h-20 text-center lg:w-8/12 xl:w-7/12">
                        <h2 id="title" className="text-3xl text-black font-bold md:text-4xl">Decore sua casa com <span className='text-orange-400'>artes digitais</span> impressas em material de alta qualidade!</h2>
                    </div>

                    {/* Boxes container */}
                    <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">

                        {/* Left container */}
                        <div className="relative group flex justify-center">
                            <Image className='bg-photo1' />
                        </div>

                        {/* Middle container */}
                        <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
                            {/* Middle area */}
                            <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-2xl bg-white drop-shadow-md transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"></div>
                            <div className="relative p-6 space-y-6 lg:p-8">
                                <h3 className="text-3xl text-gray-700 font-semibold text-center"></h3>
                                <div>
                                    <div className="relative flex justify-around">
                                        <div className="flex items-end">
                                            <span className="text-6xl text-gray-800 font-bold leading-0">R$ 35</span>
                                        </div>
                                    </div>
                                </div>
                                <ul role="list" className="w-max space-y-4 py-6 m-auto text-gray-600">
                                    <li className="space-x-2">
                                        <span className="text-green-500 font-semibold"> <FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Impressão em lona canvas.</span>
                                    </li>
                                    <li className="space-x-2">
                                        <span className="text-green-500 font-semibold"><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Tamanho 30cm x 30cm.</span>
                                    </li>
                                    <li className="space-x-2">
                                        <span className="text-green-500 font-semibold"><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Mais de 100 opções.</span>
                                    </li>
                                    <li className="space-x-2">
                                        <span className="text-green-500 font-semibold"><FontAwesomeIcon icon="fa-solid fa-circle-check" /></span>
                                        <span>Todas pelo mesmo preço!</span>
                                    </li>
                                </ul>
                                <div className="w-full flex justify-center items-center">
                                    <div className="mr-3">
                                        <a href="https://www.facebook.com/profile.php?id=100090498425426" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16" color='#4064AC'>
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="facebook.com">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16" color='#2FBA4A'>
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right container */}
                        <div className="relative group flex justify-center">
                            <Image className='bg-photo2' />
                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}