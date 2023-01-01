import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-right: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  padding: 20px;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.5);
`;

export const NavItem = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: 500;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  &.active {
    color: ${p => p.theme.colors.red};

  }
  :hover,
  :focus {
    text-decoration: underline currentColor;
  }
`;
