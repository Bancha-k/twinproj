import React from 'react'
import { withRouter } from 'react-router-dom'

import { Row, Col, List, Button } from 'antd'
import FormInput from './FormInput'
import TextArea from 'antd/lib/input/TextArea'

const bgSrc = require(`../assets/matchkickoff_bg.png`)
const logoSrc = require(`../assets/logo@72x.png`)
// const fieldSrc = require(`../assets/field.png`)

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamMatched: []
    }

    this.getData = this.getData.bind(this)
  }
  getData(val) {
    this.setState({
      teamMatched: val
    })
  }

  nextPath(path) {
    this.props.history.push(path)
  }

  render() {
    const { teamMatched } = this.state
    
    return (
      <div
        style={{
          flex: 1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          backgroundImage: `url(${bgSrc})`,
          backgroundSize: 'cover',
          backgroundColor: 'black',
          overflow: 'auto'
        }}
      >
        <div
          style={{
            flex: 1,
            position: 'relative',
            height: '100px',
            marginTop: 50
          }}
        >
          <img
            src={logoSrc}
            style={{
              position: 'absolute',
              margin: 'auto',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            }}
            alt="logo"
          />
        </div>
        <div
          style={{
            margin: '24px 20px 0',
            overflow: 'initial',
            textColor: 'white'
          }}
        >
          <Row
            gutter={24}
            align="center"
            justify="center"
            style={{ marginTop: 50 }}
          >
            <Col sm={12} align="center" justify="center">
              <div>
                <List
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    width: 400,
                    backgroundColor: '#000000',
                    opacity: 0.8
                  }}
                  size="small"
                  // header={<div>Team A</div>}
                  bordered={false}
                  dataSource={teamMatched}
                  renderItem={item => (
                    <List.Item style={{ paddingLeft: 50 }}>{item.fullName}</List.Item>
                  )}
                />
                <br />
                {/* <List
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    width: 400,
                    backgroundColor: '#000000',
                    opacity: 0.8
                  }}
                  size="small"
                  header={<div>Team B</div>}
                  bordered={false}
                  dataSource={teamB}
                  renderItem={item => (
                    <List.Item style={{ paddingLeft: 50 }}>{item}</List.Item>
                  )}
                /> */}
              </div>
            </Col>
            <Col sm={12}>
              <FormInput action={this.getData} />{' '}
              <Button
                type="default"
                icon="area-chart"
                style={{
                  marginLeft: 265,
                  opacity: 0.3,
                  backgroundColor: '#000000',
                  color: '#fff'
                }}
                onClick={() => this.nextPath('/profile')}
              >
                Profile
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
