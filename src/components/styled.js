import styled from 'styled-components'

export const Part = styled.p.attrs(props => ({
    className: props.className,
}))`
    background-color: white;
    color: #7CBF69;
    font-family: Inter, sans-serif;
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem;
`

export const Btn = styled.button`
    width: 40%;
    background-color: white;
    color: #7CBF69;
    font-family: Inter, sans-serif;
    border-radius: 15px;
    padding: 1rem;
    margin: 1rem;
`

export const Background = styled.body`
    background-image: url(${props => props.image})
`