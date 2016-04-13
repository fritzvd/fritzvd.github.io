require('./style.scss')

var React = require('react')
var ReactDOM = require('react-dom')
var SkillsTable = require('./filters.jsx')

var SkillsObject = [
  {tag: "javascript", name: "angularjs", level: 4},
  {tag: "javascript", name: "python", level: 3},
  {tag: "javascript", name: "javascript", level: 4},
  {tag: "javascript", name: "django", level: 3},
  {tag: "javascript", name: "django rest framework", level: 3},
  {tag: "javascript", name: "css", level: 4},
  {tag: "javascript", name: "html", level: 5},
  {tag: "javascript", name: "gulp", level: 3},
  {tag: "javascript", name: "webpack", level: 2},
  {tag: "javascript", name: "browserify", level: 3},
  {tag: "javascript", name: "npm", level: 3},
  {tag: "javascript", name: "virtualenv", level: 3},
  {tag: "javascript", name: "flask", level: 3},
  {tag: "javascript", name: "git", level: 4},
  {tag: "javascript", name: "mercurial", level: 2},
  {tag: "javascript", name: "hapi.js", level: 2},
  {tag: "javascript", name: "express", level: 3},
  {tag: "javascript", name: "backbone", level: 4},
  {tag: "javascript", name: "node.js", level: 3},
  {tag: "javascript", name: "linux", level: 4},
  {tag: "javascript", name: "macosx", level: 3},
  {tag: "javascript", name: "reactjs", level: 1}
]

ReactDOM.render(
  <SkillsTable skills={SkillsObject} />,
  document.getElementById('skills')
)
