import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import qs from 'qs'
import { Router, Route, Link } from 'react-router-dom'
import Material from './Material'

const App = () => {
  useEffect(() => {
    // 有 jsonp
    axios({
      url: 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&search=rainbow',
      adapter: jsonpAdapter,
    }).then(res => {
      console.log(res)
    })

    // 沒有 jsonp
    // axios({
    //   url: 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&search=rainbow',
    // }).then(res => {
    //   console.log(res)
    // })
  })
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="/" className="App-link">
          Home
        </Link>
        <Link to="/material" className="App-link">
          material
        </Link>
        <Route path="/material/" component={Material} />
      </header>
    </div>
  )
}

export default App
