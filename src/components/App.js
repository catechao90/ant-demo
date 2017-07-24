import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import Index from '@/components/Index'
import { Route } from 'react-router-dom'
import * as Public from '@/public'
const { Header, Content, Footer } = Layout

class App extends React.Component {
  constructor() {
    super();
    var self = this;
    this.state = {
      value: "default",
    };
    Public.cFetch(Public.API_CONFIG.index.api, {
      method: 'POST',
      body: JSON.stringify({
        cityCode: 1
      })
    }).then(response => {
      self.setState({value: response.cityName});
    });    
}
  render() {
    return (
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
            <img src="images/test.png" width="100" alt=""/>
            <span className="icon-hint-08"></span>
            <span>{this.state.value}</span>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
        Ant Design 2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

export default App;