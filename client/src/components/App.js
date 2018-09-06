import React from 'react'

import { Row, Col } from 'antd'
import FormInput from './FormInput'

const bgSrc = require(`../assets/matchkickoff_bg.png`)
const logoSrc = require(`../assets/logo@72x.png`)
const fieldSrc = require(`../assets/field.png`)

const App = props => {
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
      <div style={{ flex: 1, position: 'relative', height: '100px' }}>
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
        />
      </div>
      <div
        style={{
          margin: '24px 20px 0',
          overflow: 'initial',
          textColor: 'white'
        }}
      >
        <Row gutter={24} align="center" justify="center">
          <Col sm={12} align="center" justify="center">
            <img src={fieldSrc} style={{ marginBottom: '40px' }} />
          </Col>
          <Col sm={12}>
            <FormInput />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
