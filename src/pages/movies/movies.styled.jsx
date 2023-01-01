import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FilmList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
`;

export const FilmLinks = styled(Link)`
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const Form = styled.form`
  padding-top: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const InputField = styled.input`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal}px 0 0
    ${p => p.theme.radii.normal}px;
  border: ${p => p.theme.borders.normal};
  outline: none;
  :hover,
  :focus {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.red};
  }
`;

export const SubmitButton = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: 0 ${p => p.theme.radii.normal}px 
    ${p => p.theme.radii.normal}px 0;
  
`;