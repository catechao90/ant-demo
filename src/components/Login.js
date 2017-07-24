import React from 'react'
import './Login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Value } from '@/public'
// import { Redirect } from 'react-router-dom'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    redirectToReferrer: Value.auth.isAuthenticated
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var self = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Value.auth.authenticate()
        self.setState({ redirectToReferrer: true })        
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form

    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      window.location.href="/";
    }

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login;