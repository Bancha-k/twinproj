import React from 'react'
import { Mutation } from 'react-apollo'
import { ADD_PROFILE } from '../queries'

import dataAnalyte from '../lib/dataAnalyte'

import { Form, Select, Input, Button, notification } from 'antd'

const FormItem = Form.Item

const Option = Select.Option

class FormInput extends React.Component {
  handleReset = () => {
    this.props.form.resetFields()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    // const { dataList, fullplayer } = this.state
    const { action } = this.props
    return (
      <Mutation mutation={ADD_PROFILE}>
        {(addProfile, { error, data }) => (
          <Form
            onSubmit={e => {
              e.preventDefault()
              this.props.form.validateFields((err, values) => {
                if (!err) {
                  addProfile({
                    variables: {
                      fullName: values.fullname,
                      stadium: values.stadium,
                      selectedTime: values.time,
                      level: values.level,
                      style: values.style,
                      age: values.age,
                      favoriteTeam: values.favoriteTeam
                    }
                  }).then(data => {
                    if (data.data.addProfile == null) {
                      this.setState({ fullplayer: true })
                      notification['error']({
                        message:
                          'Stadium Unavaliable!, Please Select other Stadium and Time!',
                        description: 'Cannot Match'
                      })
                      // this.props.form.resetFields()
                    } else {
                      const result = data.data.addProfile.length === 14 ? dataAnalyte(data.data.addProfile) : data.data.addProfile
                      action(result)
                      notification['success']({
                        message: 'Successfully Adding',
                        description: `${values.fullname}`
                      })
                      // this.props.form.resetFields()
                    }
                  })
                }
              })
            }}
          >
            <FormItem
              label={<label style={{ color: 'white' }}>Full Name</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 12 }}
            >
              {getFieldDecorator('fullname', {
                rules: [
                  { required: true, message: 'Please input your Full Name!' }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem
              label={<label style={{ color: 'white' }}>Stadium</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('stadium', {
                rules: [{ required: true, message: 'Please select Stadium!' }]
              })(
                <Select
                  placeholder="Select a Stadium"
                // onChange={this.handleSelectChange}
                >
                  <Option value="Stadium 1">Stadium 1</Option>
                  <Option value="Stadium 2">Stadium 2</Option>
                  <Option value="Stadium 3">Stadium 3</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label={<label style={{ color: 'white' }}>Time</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('time', {
                rules: [{ required: true, message: 'Please select Time!' }]
              })(
                <Select
                  placeholder="Select a Time"
                // onChange={this.handleSelectChange}
                >
                  <Option value="Morning">Morning</Option>
                  <Option value="Afternoon">Afternoon</Option>
                  <Option value="Evening">Evening</Option>
                </Select>
              )}
            </FormItem>

            <FormItem
              wrapperCol={{ span: 8, offset: 0 }}
              style={{ marginBottom: 10 }}
            >
              <h2
                className="ant-form-label"
                style={{ textAlign: 'center', marginBottom: 0, color: 'white' }}
              >
                Interest
              </h2>
            </FormItem>
            <FormItem
              label={<label style={{ color: 'white' }}>Level</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('level', {
                rules: [{ required: true, message: 'Please select Level!' }]
              })(
                <Select
                  placeholder="Select a Level"
                // onChange={this.handleSelectChange}
                >
                  <Option value="High">High</Option>
                  <Option value="Medium">Medium</Option>
                  <Option value="Low">Low</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label={<label style={{ color: 'white' }}>Style</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('style', {
                rules: [{ required: true, message: 'Please select Style!' }]
              })(
                <Select
                  placeholder="Select a Style"
                // onChange={this.handleSelectChange}
                >
                  <Option value="Passing">Passing</Option>
                  <Option value="High Speed">High Speed</Option>
                  <Option value="Long Shot">Long Shot</Option>
                  <Option value="Finishing">Finishing</Option>
                  <Option value="Defensive">Defensive</Option>
                  <Option value="Attacker">Attacker</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label={<label style={{ color: 'white' }}>Favorite Team</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('favoriteTeam', {
                rules: [
                  {
                    required: true,
                    message: 'Please select Your Favorite Team!'
                  }
                ]
              })(
                <Select
                  placeholder="Select a Team"
                // onChange={this.handleSelectChange}
                >
                  <Option value="Real Madrid">Real Madrid</Option>
                  <Option value="Barcelona">Barcelona</Option>
                  <Option value="Juventus">Juventus</Option>
                  <Option value="Manchester Utd">Manchester Utd</Option>
                  <Option value="Liverpool">Liverpool</Option>
                  <Option value="Arsernal">Arsernal</Option>
                  <Option value="Manchester City">Manchester City</Option>
                  <Option value="Napoli">Napoli</Option>
                  <Option value="Tottenham Hotspur">Tottenham Hotspur</Option>
                  <Option value="Atletico Madrid">Atletico Madrid</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label={<label style={{ color: 'white' }}>Age</label>}
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('age', {
                rules: [{ required: true, message: 'Please select Age!' }]
              })(
                <Select
                  placeholder="Select a Age"
                // onChange={this.handleSelectChange}
                >
                  <Option value="Student">Student</Option>
                  <Option value="University">University</Option>
                  <Option value="Adult">Adult</Option>
                  <Option value="Older person">Older person</Option>
                </Select>
              )}
            </FormItem>
            <FormItem wrapperCol={{ span: 12, offset: 7 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                Clear
              </Button>
            </FormItem>
          </Form>
        )}
      </Mutation>
    )
  }
}

export default Form.create()(FormInput)
