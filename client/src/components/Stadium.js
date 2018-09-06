import React from 'react'
import { withRouter } from 'react-router-dom'

import {
  Layout,
  Menu,
  Icon,
  Dropdown,
  Row,
  Col,
  Form,
  Input,
  Button,
  Select
} from 'antd'
import './Stadium.css'

const { Header, Sider, Content, Footer } = Layout
const FormItem = Form.Item
const Option = Select.Option

class Stadium extends React.Component {
  state = {
    collapsed: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  nextPath(path) {
    this.props.history.push(path)
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ background: '#333333' }}
        >
          <div className="logo" />
          <Menu
            style={{ background: '#333333', color: '#fff', opacity: 0.8 }}
            mode="inline"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1" onClick={() => this.nextPath('/profile')}>
              <Icon type="user" style={{ color: '#3EC8C3' }} />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => this.nextPath('/stadium')}>
              <Icon type="home" style={{ color: '#3EC8C3' }} />
              <span>Stadium</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#ffffff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <div style={{ float: 'right', marginRight: 30 }}>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <a>Logout</a>
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
                placement="bottomRight"
              >
                <a className="ant-dropdown-link">
                  Admin <Icon type="down" />
                </a>
              </Dropdown>
            </div>
          </Header>
          <h1 style={{ margin: '24px' }}>Stadium</h1>

          <Row>
            <Col span={8}>
              <Content
                style={{
                  marginLeft: '24px',
                  marginRight: '24px',
                  padding: 24,
                  background: '#fff'
                }}
              >
                <h3 style={{ marginLeft: 15 }}>Stadium Management</h3>
                <Form>
                  <FormItem
                    label="Stadium"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 14 }}
                    style={{ marginTop: 30 }}
                  >
                    <Select placeholder="Select Stadium" style={{ width: 300 }}>
                      <Option value="Stadium 1">Stadium 1</Option>
                      <Option value="Stadium 2">Stadium 2</Option>
                      <Option value="Stadium 3">Stadium 3</Option>
                    </Select>
                  </FormItem>
                  <FormItem
                    label="Time"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 14 }}
                  >
                    <Select placeholder="Select Time" style={{ width: 300 }}>
                      <Option value="Morning">Morning</Option>
                      <Option value="Afternoon">Afternoon</Option>
                      <Option value="Evening">Evening</Option>
                    </Select>
                  </FormItem>
                  <FormItem
                    wrapperCol={{ span: 14, offset: 5 }}
                    style={{ marginBottom: 0 }}
                  >
                    <Button type="primary">Find</Button>
                  </FormItem>
                </Form>
              </Content>
            </Col>
            <Col span={8}>
              <Content
                style={{
                  marginRight: '24px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 500
                }}
              />
            </Col>
            <Col span={8}>
              <Content
                style={{
                  marginRight: '24px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 500
                }}
              />
            </Col>
          </Row>

          <Footer style={{ textAlign: 'center', paddingTop: 168 }}>
            © Matching AI Team 2018. All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Stadium)
