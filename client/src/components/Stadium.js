import React from 'react'
import { withRouter } from 'react-router-dom'

import { Query, Mutation } from 'react-apollo'
import { GET_PLAYER, CLEAR_PLAYER } from '../queries'

import {
  Layout,
  Menu,
  Icon,
  Dropdown,
  Row,
  Col,
  Form,
  Button,
  Select,
  Table
} from 'antd'
import './Stadium.css'

const { Header, Sider, Content, Footer } = Layout
const FormItem = Form.Item
const Option = Select.Option

class Stadium extends React.Component {
  state = {
    collapsed: false,
    selectStadium: '',
    selectTime: ''
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
    const { getFieldDecorator } = this.props.form
    const { selectStadium, selectTime } = this.state
    const columns = [
      {
        title: 'PLAYER',
        dataIndex: 'fullName',
        align: 'center'
      }
    ]
    function onChange(sorter) {
      console.log('params', sorter)
    }
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
              <Button
                type="default"
                icon="home"
                style={{ marginRight: 20 }}
                onClick={() => this.nextPath('/')}
              >
                Homepage
              </Button>

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
                <Form
                  onSubmit={e => {
                    e.preventDefault()
                    this.props.form.validateFields((err, values) => {
                      if (!err) {
                        this.setState({ selectStadium: values.stadium })
                        this.setState({ selectTime: values.time })
                      }
                    })
                  }}
                >
                  <FormItem
                    label="Stadium"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    style={{ marginTop: 30 }}
                  >
                    {getFieldDecorator('stadium', {
                      rules: [
                        { required: true, message: 'Please select Stadium!' }
                      ]
                    })(
                      <Select
                        placeholder="Select Stadium"
                        style={{ width: 200 }}
                      >
                        <Option value="Stadium 1">Stadium 1</Option>
                        <Option value="Stadium 2">Stadium 2</Option>
                        <Option value="Stadium 3">Stadium 3</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem
                    label="Time"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 14 }}
                  >
                    {getFieldDecorator('time', {
                      rules: [
                        { required: true, message: 'Please select Time!' }
                      ]
                    })(
                      <Select placeholder="Select Time" style={{ width: 200 }}>
                        <Option value="Morning">Morning</Option>
                        <Option value="Afternoon">Afternoon</Option>
                        <Option value="Evening">Evening</Option>
                      </Select>
                    )}
                  </FormItem>
                  <FormItem
                    wrapperCol={{ span: 14, offset: 5 }}
                    style={{ marginBottom: 0 }}
                  >
                    <Button type="primary" htmlType="submit">
                      Find
                    </Button>
                  </FormItem>
                </Form>
              </Content>
            </Col>
            {/* <Col span={8}>
              <Content
                style={{
                  marginRight: '24px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 500
                }}
              >
                <h3 style={{ marginLeft: 15, color: 'rgb(62, 200, 195)' }}>
                  TEAM A
                </h3>
                <Table
                  style={{ marginTop: 30 }}
                  columns={columns}
                  size="middle"
                />
              </Content>
            </Col> */}
            <Col span={16}>
              <Content
                style={{
                  marginRight: '24px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 500
                }}
              >
                <h3 style={{ marginLeft: 15, color: 'rgb(62, 200, 195)' }}>
                  PLATER LIST
                  <Mutation mutation={CLEAR_PLAYER}>
                    {(clearSelectedTeam, { loading, error, data }) => {
                      return (
                        <Button
                          icon="sync"
                          style={{
                            marginLeft: 8,
                            backgroundColor: '#e20303',
                            color: 'white',
                            float: 'right'
                          }}
                          onClick={() => {
                            clearSelectedTeam({
                              variables: {
                                stadium: selectStadium,
                                selectedTime: selectTime
                              }
                            }).then(() => {
                              alert('Stadium Has Avaliable now.')
                              window.location.reload()
                            })
                          }}
                        >
                          Clear
                        </Button>
                      )
                    }}
                  </Mutation>
                </h3>

                <Query
                  query={GET_PLAYER}
                  variables={{
                    stadium: selectStadium,
                    selectedTime: selectTime
                  }}
                >
                  {({ loading, error, data }) => {
                    return (
                      <Table
                        style={{ marginTop: 30 }}
                        columns={columns}
                        size="middle"
                        dataSource={data.getSelectedTeam}
                        rowKey={record => record._id}
                        pagination={false}
                        onChange={onChange}
                      />
                    )
                  }}
                </Query>
              </Content>
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

export default withRouter(Form.create()(Stadium))
