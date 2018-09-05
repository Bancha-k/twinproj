import React, { Component } from 'react'
import {
  Row,
  Col,
  Button,
  FormGroup,
  ControlLabel,
  FormControl,
} from 'react-bootstrap'
import dataAnalyze from '../../libs/dataAnalyze'
import logo from './logo.svg'
import './App.css'

export default class App extends Component {

  state = {
    list: [],
    team: [],
    teamLimit: 14,
    msg: '',
    full: false,
    name: '',
    stadium: '',
    time: '',
    level: '',
    style: '',
    age: '',
    favTeam: ''
  }

  handleInput = (f, v) => {
    this.setState({ [f]: v.target.value })
  }

  submit = async () => {
    this.setState({ msg: '' })
    const { name, stadium, time, level, style, age, favTeam, list, teamLimit } = this.state
    let arr = []
    list.forEach(val => {
      if (val.stadium === stadium && val.time === time) {
        arr.push(val)
      }
    })
    if (arr.length === teamLimit) {
      this.setState({ msg: 'full' })
    } else {
      const data = [level, style, favTeam, age]
      const obj = { name, stadium, time, data }
      const checkTeamLength = arr.length === teamLimit - 1 && true
      await this.setState({ list: [...list, obj], full: checkTeamLength })
      this.process()
    }
  }

  process = () => {
    const { list } = this.state
    const result = dataAnalyze(list)
    this.setState({ team: result })
  }

  render() {

    const { name, stadium, time, list, level, style, age, favTeam, msg, team, full } = this.state

    const header = (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Football</h1>
      </header>
    )

    const form = (
      <form>
        <FormGroup>
          <ControlLabel>name</ControlLabel>
          <FormControl
            type="text"
            value={name}
            placeholder={name}
            onChange={this.handleInput.bind(this, 'name')}
          />
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>stadiums</ControlLabel>
          <FormControl componentClass="select" value={stadium} onChange={this.handleInput.bind(this, 'stadium')}>
            <option>-</option>
            <option value="statium 1">stadium 1</option>
            <option value="statium 2">stadium 2</option>
            <option value="statium 3">stadium 3</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>times</ControlLabel>
          <FormControl componentClass="select" value={time} onChange={this.handleInput.bind(this, 'time')}>
            <option value="">-</option>
            <option value="evening">evening</option>
            <option value="afternoon">afternoon</option>
            <option value="night">night</option>
          </FormControl>
        </FormGroup>
      </form>
    )

    const interests = (
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Level</ControlLabel>
          <FormControl componentClass="select" value={level} onChange={this.handleInput.bind(this, 'level')}>
            <option>-</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Style</ControlLabel>
          <FormControl componentClass="select" value={style} onChange={this.handleInput.bind(this, 'style')}>
            <option>-</option>
            <option value="Passing">Passing</option>
            <option value="High Speed">High Speed</option>
            <option value="Long Shot">Long Shot</option>
            <option value="Finishing">Finishing</option>
            <option value="Defensive">Defensive</option>
            <option value="Attacker">Attacker</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Age</ControlLabel>
          <FormControl componentClass="select" value={age} onChange={this.handleInput.bind(this, 'age')}>
            <option>-</option>
            <option value="Student">Student</option>
            <option value="University">University</option>
            <option value="Adult">Adult</option>
            <option value="Older person">Older person</option>
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Favorite Team</ControlLabel>
          <FormControl componentClass="select" value={favTeam} onChange={this.handleInput.bind(this, 'favTeam')}>
            <option value="">-</option>
            <option value="Real Madrid">Real Madrid</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Juventus">Juventus</option>
            <option value="Manchester Utd">Manchester Utd</option>
            <option value="Liverpool">Liverpool</option>
            <option value="Arsernal">Arsernal</option>
            <option value="Manchester City">Manchester City</option>
            <option value="Napoli">Napoli</option>
            <option value="Tottenham Hotspur">Tottenham Hotspur</option>
            <option value="Atletico Madrid">Atletico Madrid</option>
          </FormControl>
        </FormGroup>
      </form>
    )

    const submit = (
      <Button bsStyle="success" onClick={() => this.submit()}>Submit</Button>
    )

    const msgTag = (
      <div>
        {msg}
      </div>
    )

    const list1 = list.map((val, key) => (
      <li key={key}>
        <label>{val.name} -  {val.data}</label>
      </li>
    ))

    const list2 = team.map((val, key) => (
      <li key={key}>
        <label>{val.name} -  {val.data} - {val.team}</label>
      </li>
    ))

    return (
      <div className="App">
        {header}
        <div className="App-intro">
          <Row className="show-grid">
            <Col xs={6}>
              {form}
              {interests}
              {submit}
            </Col>
            <Col xs={6}>
              length:{list.length} - stadium:{stadium} - time:{time}
              {msgTag}
              {full ? list2 : list1}
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}