import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.normal}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.profileSecondaryColor};
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FilmInfo = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]};
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
`;

export const InfoLabel = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;