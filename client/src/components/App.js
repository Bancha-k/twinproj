import React from 'react'
import { withRouter } from 'react-router-dom'

import { Row, Col, List, Button } from 'antd'
import FormInput from './FormInput'

const bgSrc = require(`../assets/matchkickoff_bg.png`)
const logoSrc = require(`../assets/logo.png`)
const fieldSrc = require(`../assets/field.png`)

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamMatched: [],
      inform: []
    }

    this.getData = this.getData.bind(this)
    this.getInform = this.getInform.bind(this)
  }
  getData(val) {
    this.setState({
      teamMatched: val
    })
  }

  getInform(val) {
    this.setState({
      inform: val
    })
  }

  nextPath(path) {
    this.props.history.push(path)
  }

  render() {
    const { teamMatched, inform } = this.state

    const teamA = []
    const teamB = []

    teamMatched.forEach(val => {
      if (val.team === 'A') {
        teamA.push(val.fullName)
      } else if (val.team === 'B') {
        teamB.push(val.fullName)
      }
    })

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
        <div>
          <img
            src={logoSrc}
            style={{
              display: 'block',
              marginTop: 50,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
              maxWidth: '330px',
              maxHeight: '54px'
            }}
            alt="logo"
          />
        </div>
        <div
          style={{
            margin: '24px 20px 0',
            overflow: 'initial',
            textColor: 'white',
            marginBottom: '50px'
          }}
        >
          <Row
            gutter={24}
            align="center"
            justify="center"
            style={{ marginTop: 50 }}
          >
            <Col sm={12} align="center" justify="center">
              <Col sm={12} style={{ flex: 1 }}>
                <h2
                  className="ant-form-label"
                  style={{
                    textAlign: 'center',
                    // marginBottom: 0,
                    color: 'white'
                  }}
                >
                  Stadium : {inform.stadium}
                </h2>
              </Col>
              <Col sm={12} style={{ flex: 1 }}>
                <h2
                  className="ant-form-label"
                  style={{
                    textAlign: 'center',
                    // marginBottom: 0,
                    color: 'white'
                  }}
                >
                  Time : {inform.time}
                </h2>
              </Col>
              <Col sm={4} />
              <Col sm={16}>
                <div
                  style={{
                    flex: 1,
                    height: '700px',
                    backgroundImage: `url(${fieldSrc})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                >
                  <List
                    style={{
                      flex: 1,
                      color: '#fff',
                      fontSize: 15,
                      width: 'auto',
                      opacity: 0.8,
                      maxWidth: '520px'
                    }}
                    size="small"
                    header={<div>Team A</div>}
                    bordered={false}
                    dataSource={teamA}
                    renderItem={item => (
                      <List.Item style={{ paddingLeft: 50 }}>{item}</List.Item>
                    )}
                  />
                  <List
                    style={{
                      flex: 1,
                      color: '#fff',
                      fontSize: 15,
                      width: 'auto',
                      opacity: 0.8,
                      maxWidth: '520px'
                    }}
                    size="small"
                    header={<div>Team B</div>}
                    bordered={false}
                    dataSource={teamB}
                    renderItem={item => (
                      <List.Item style={{ paddingLeft: 50 }}>{item}</List.Item>
                    )}
                  />
                  <br />
                </div>
              </Col>
              <Col sm={4} />
            </Col>
            <Col sm={12} align="center" justify="center">
              <FormInput action={this.getData} detail={this.getInform} />{' '}
              <Button
                type="default"
                icon="area-chart"
                style={{
                  // marginLeft: '270px',
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
