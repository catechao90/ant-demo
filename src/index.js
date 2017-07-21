import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '@/index.css';
import App from '@/components/App';
import Index from '@/components/Index';
import registerServiceWorker from './registerServiceWorker';
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

ReactDOM.render(
	<Router>
		<div>
			<Layout className="layout">
		        <Header>
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
		        <Content style={{ padding: '0 50px' }}>
		          <Breadcrumb style={{ margin: '12px 0' }}>
		            <Breadcrumb.Item>Home</Breadcrumb.Item>
		            <Breadcrumb.Item>List</Breadcrumb.Item>
		            <Breadcrumb.Item>App</Breadcrumb.Item>
		          </Breadcrumb>
		          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
		          	<Link to="/index">index</Link>
		          	<Route path="/index" component={Index}/>
		          </div>
		        </Content>
		        <Footer style={{ textAlign: 'center' }}>
		        Ant Design ©2016 Created by Ant UED
		        </Footer>
	      	</Layout>			
		</div>
  	</Router>, document.getElementById('root'));
registerServiceWorker();
