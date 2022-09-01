import { Outlet } from 'react-router-dom';
import Header from './Header'
import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = () => {

  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
}

export default Layout;
