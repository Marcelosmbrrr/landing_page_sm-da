import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-shadow: #fb923c 0px 3px 5px;
    position: relative;
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

const Link = styled.a`
    transition: 1s;
    &:hover {
        color: #f97316;
    }
`;

export function Header() {

    /*
    const titleRef = "SM DIGITAL ART";
    const [title, setTitle] = React.useState("");

    React.useEffect(() => {

        let isMounted = true;
        const title_arr = titleRef.split("");

        title_arr.forEach((letter, index) => {
            setTimeout(() => {
                if (isMounted) {
                    setTitle((prev) => prev + letter);
                }
            }, 75 * index);
        });

        return () => {
            isMounted = false;
        };

    }, []);
    */

    function handleClickOnLink(event) {
        event.preventDefault();

        const element = event.target;
        const href = element.getAttribute("href");
        const scroll_to = document.querySelector(href).offsetTop;

        window.scroll({
            top: scroll_to,
            behavior: "smooth"
        });
    }

    return (
        <Container className="container max-w-full h-screen bg-images" id="home">
            <HeaderTop className="flex flex-row justify-around items-center h-20 p-1">
                <div className="cursor-pointer">
                    <img src="images/logo.png" className="inline" width="110px"></img>
                </div>
                <div>
                    <nav>
                        <ul className="flex flex-row text-white">
                            <Li className="px-5 flex-col">
                                <Link href="#home" onClick={handleClickOnLink}>Home</Link>
                            </Li>
                            <Li className="px-5">
                                <Link href="#product" onClick={handleClickOnLink}>Produto</Link>
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