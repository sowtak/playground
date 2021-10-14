import React from "react";
import { useDispatch, useSelector} from "react-redux";
import {Container, Nav, Navbar, NavDropdown,Button} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


import './NavBar.css';
import huedditLogo from '../../images/logo.png'
import {isAdmin} from "../../service/CommonUtil";

export const NavBar = (props: any) => {
    const userLogin = useSelector((state: any) => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    return(
        <header>
            <Navbar
                style={{
                    background: 'rgba(0,0,0,1)',
                    border: '0',
                    color: '#00000'
                }}
                className='navbar navbar-expand-lg navbar-dark' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <img width='160px' height='auto'
                        className='image-responsive' src={huedditLogo} alt='logo' />
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='navbar-nav ml-auto'>
                            {userInfo? (
                                <NavDropdown title={userInfo.username} id='username'>
                                    <LinkContainer to='/userProfile'>
                                        <NavDropdown.Item>プロフィール</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link href='/login'>
                                        <Button variant='outline-primary'>ログイン</Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && isAdmin() && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>ユーザー</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>商品</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>取引済み商品リスト</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
