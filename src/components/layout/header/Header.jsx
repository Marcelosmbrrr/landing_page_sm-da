import * as React from 'react';
import styled from 'styled-components';
import { HomeIcon } from '../../icons/HomeIcon';

const Container = styled.div`
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
    //transform: perspective(900px) rotateX(1deg);
`;

const Span = styled.span`
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    &:hover{
        color: orange;
    }
`;

const HeaderTop = styled.div`
    background: rgba(255, 255, 255, 0.023);
    backdrop-filter: blur(6px);
    width: 100%;
`;

const Li = styled.li`
    cursor: pointer;
`;

export function Header() {

    return (
        <Container className="container max-w-full h-screen bg-images">
            <HeaderTop className="flex flex-row justify-around items-center h-20 p-1">
                <div className="cursor-pointer">
                    <img src="images/logo.png" className="inline" width="110px"></img>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-row text-white">
                            <Li className="px-5 flex-col">
                                <Span><HomeIcon /></Span>
                            </Li>
                            <Li className="px-5">
                                <Span>Produto</Span>
                            </Li>
                            <Li className="px-5">
                                <Span>Contato</Span>
                            </Li>
                        </ul>
                    </nav>
                </div>
                <div>
                    {""}
                </div>
            </HeaderTop>
        </Container>
    )
}