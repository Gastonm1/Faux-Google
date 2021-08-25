import styled from "styled-components";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 14px;
`;

export const LeftLinks = styled.div`
  padding: 10px;
  margin-left: 10px;
`;
export const RightLinks = styled.div`
  padding: 10px;
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
export const NavLinks = styled(Link)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;
`;
export const Menu = styled(CgMenuGridO)`
  padding: 0 8px;
  text-decoration: none;
  color: #000;
  height: 40px;
  width: 40px;
`;
export const UserProfile = styled(FaUserCircle)`
  padding: 0 8px;
  text-decoration: none;
  color: #1a73e8;
  height: 40px;
  width: 40px;
`;
