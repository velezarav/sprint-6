import styled from 'styled-components'

export const Part = styled.p.attrs((props) => ({
    className: props.className,
}))`
    padding: 1rem;
    margin: 1rem;
    background-color: rgb(255, 255, 255, .8);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    color: #314fa7;
    text-shadow: 1px 1px 2px rgb(49, 79, 167, .2);
    border-radius: 15px;
`

export const Btn = styled.button`
    width: 40%;
    padding: 1rem;
    margin: 1rem;
    background-color: rgb(255, 255, 255, .9);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 1.5rem;
    color: #7CBF69;
    font-weight: bold;
    letter-spacing: .1rem;
    border: none;
    border-radius: 15px;
    &:hover {
        background-color: rgb(124, 191, 105, .8);
        color: white;
    }
`

export const Background = styled.div`
    text-align: center;
    height:100vh;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`