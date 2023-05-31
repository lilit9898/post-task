import { FC, ReactNode } from 'react';
import AppHeader from '../containers/AppHeader/AppHeader';
import { Container } from 'react-bootstrap';  

interface IMainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <div className="mainContainer"> {children}</div>
    </div>
  );
};

export default MainLayout;
