'use strict'

var React = require('react')
var ReactDOM = require('react-dom')

var SearchBox = React.createClass({
  handleChange: function () {
    this.props.onUserInput(
      this.refs.inputField.value
    )
  },
  render: function () {
    return (
      <form>
        <input
          type="text"
          ref="inputField"
          placeholder="Find a skill you want.. "
          value={ this.props.filterQuery }
          onChange={ this.handleChange }/>
      </form>
    )
  }
})

var Table = React.createClass({
  render: function () {
    var rows = []

    var filteredList = this.props.skills.filter(function (skill) {
      var inList = (
        skill.name.indexOf(this.props.filterQuery) > -1
      )

      return inList
    }.bind(this))
    filteredList.forEach(function (skill) {
      rows.push(
        <Skill
          skill={skill.name}
          level={skill.level}
          key={skill.name} />)
    })

    return (
      <ul>
          { rows }
      </ul>
    )
  }
})

var Skill = React.createClass({
  render: function () {
    return (
      <li className="skills-list">
        { this.props.skill }
      </li>
    )
  }
})

var SkillsTable = React.createClass({
  getInitialState: function () {
    return {
      filterQuery: ''
    }
  },
  handleInput: function (inputField) {
    this.setState({
      filterQuery: inputField
    })
  },
  render: function () {
    return (
      <div>
        <SearchBox
          onUserInput={ this.handleInput }
          filterQuery={ this.state.filterQuery } />
        <Table
          skills={ this.props.skills }
          filterQuery={ this.state.filterQuery } />
      </div>
    )
  }
})

module.exports = SkillsTable
