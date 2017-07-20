import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import registerServiceWorker from './registerServiceWorker';
const { Header, Content, Footer } = Layout;


ReactDOM.render(
	<Layout id='app'>
	    <Header style={{ position: 'fixed', width: '100%' }}>
	      <div className="logo" />
	      <Menu
	        theme="dark"
	        mode="horizontal"
	        defaultSelectedKeys={['2']}
	        style={{ lineHeight: '64px' }}
	      >
	        <Menu.Item key="1">nav 1</Menu.Item>
	        <Menu.Item key="2">nav 2</Menu.Item>
	        <Menu.Item key="3">nav 3</Menu.Item>
	      </Menu>
	    </Header>
	    <Content style={{ padding: '0 50px', marginTop: 64 }}>
			<Breadcrumb style={{ margin: '12px 0' }}>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
	      	<div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
				<Row>
					<Col span={8}><App /></Col>
					<Col span={8}>col-8</Col>
					<Col span={8}>col-8</Col>
			    </Row>
			</div>
	      
	    </Content>
	    <Footer style={{ textAlign: 'center' }}>
	      Ant Design ©2016 Created by Ant UED
	    </Footer>
  	</Layout>, document.getElementById('root'));
registerServiceWorker();
