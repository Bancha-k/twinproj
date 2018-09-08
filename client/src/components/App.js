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
                  Stadium : xxxx
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
                  Time : xxxx
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
                    bordered={false}
                    dataSource={teamMatched}
                    renderItem={item => (
                      <List.Item style={{ paddingLeft: 50 }}>{item.fullName}</List.Item>
                    )}
                  />
                  <br />
                </div>
              </Col>
              <Col sm={4} />
            </Col>
            <Col sm={12} align="center" justify="center">
              <FormInput action={this.getData} />{' '}
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
