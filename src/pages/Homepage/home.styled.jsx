import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.h1`
  font-size: ${p => p.theme.fontSizes.l}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[6]}px;
`;

export const FilmList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[2]}px;
`

export const FilmLinks = styled(Link)`
    font-size: ${p => p.theme.fontSizes.s}px;
`;