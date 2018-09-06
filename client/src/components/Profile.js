import React from 'react'
import { withRouter } from 'react-router-dom'

import { Layout, Menu, Icon, Dropdown, Input } from 'antd'
import './Profile.css'

import ProfileTable from './ProfileTable'

const { Header, Sider, Content, Footer } = Layout

class Profile extends React.Component {
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
            defaultSelectedKeys={['1']}
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

            <Input
              prefix={
                <Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />
              }
              size="large"
              placeholder=" Search Profile"
              style={{
                width: 400,
                background: '#ffffff'
              }}
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
          <h1 style={{ margin: '24px' }}>Profile</h1>
          <Content
            style={{
              marginLeft: '24px',
              marginRight: '24px',
              padding: 24,
              background: '#fff'
            }}
          >
            <ProfileTable />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            © Matching AI Team 2018. All Rights Reserved.
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(Profile)
