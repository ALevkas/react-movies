import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const menus = [
  { id: 0, title: 'Main', path: '/' },
  { id: 1, title: 'Favourites', path: '/favourites' },
];

const Menu = () => {
  const location = useLocation();

  return (
    <Row gutter={[16, 16]}>
      {menus.map((menuItem) => {
        const { id, title, path } = menuItem;
        return (
          <Col key={id}>
            <Button type={location.pathname === path ? 'primary' : 'secondary'}>
              <Link to={path}>{title}</Link>
            </Button>
          </Col>
        );
      })}
    </Row>
  );
};

export default Menu;
