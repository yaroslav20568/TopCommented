import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *: before, *: after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-size: 14px;
        font-weight: 400;
        line-height: 1.2;
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
    }
`;

export const RootContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 15px;
`;

export const RootTitle = styled.h1`
    font-size: 28px;
    color: #e58327;
    margin-bottom: 20px;
`;

export const RootFilter = styled.div`
    margin-bottom: 15px;
`;

export const FilterRow = styled.div`
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`;

export const FilterTitle = styled.span`
    font-size: 18px;
    color: #e58327;
`;

export const FilterButton = styled.button`
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: #d816d4;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
`;

export const FilterRange = styled.input`
    width: 100%;
`;