import React from 'react'

import { Row, Col, List } from 'antd'
import FormInput from './FormInput'

const bgSrc = require(`../assets/matchkickoff_bg.png`)
const logoSrc = require(`../assets/logo@72x.png`)
// const fieldSrc = require(`../assets/field.png`)

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamMatched: ''
    }

    this.getData = this.getData.bind(this)
  }
  getData(val) {
    this.setState({
      teamMatched: val
    })
  }

  render() {
    const { teamMatched } = this.state

    const teamA = []
    const teamB = []

    for (let i = 0; i < teamMatched.length; i++) {
      if (teamMatched[i].team === 'A') {
        teamA.push(teamMatched[i].fullName)
      } else if (teamMatched[i].team === 'B') {
        teamB.push(teamMatched[i].fullName)
      }
    }

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
              {/* <img
              src={fieldSrc}
              style={{ marginBottom: '40px' }}
              alt="Field Source"
            /> */}
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
                  header={<div>Team A</div>}
                  bordered={false}
                  dataSource={teamA}
                  renderItem={item => (
                    <List.Item style={{ paddingLeft: 50 }}>{item}</List.Item>
                  )}
                />
                <br />
                <List
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
                />
              </div>
            </Col>
            <Col sm={12}>
              <FormInput action={this.getData} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App
