import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import qs from 'qs'

const App = () => {
  useEffect(() => {
    axios
      .get(`/auth/apilogin/?account=lora_jack&password=lora_170602`)
      .then(res => {
        const sid = res.data[0].retVal
        localStorage.setItem('sid', sid)
      })
    const sid = 'd87760ce79558d469abfa350f5b680c6f09b999d'
    const uid = 'lora_jack'
    const nid = '19572b16df36a50441386459949e303d3bbffbfc'
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      document.cookie = `SID=${sid}&UID=${uid}&NID=${nid}`
    } else {
      document.cookie = `SID=${sid}&UID=${uid}&NID=${nid};domain=.${window.location.hostname};path=/`
    }
  })
  useEffect(() => {
    const data = [{ account: 'owen', password: 'owen', langid: 'tw' }]
    const method = 'managerlogin'
    axios({
      method: 'post',
      url: `/backend/${method}`,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },

      data: qs.stringify({
        sid: localStorage.getItem('sid'),
        data: JSON.stringify(data),
      }),
    }).then(res => {
      console.log(res)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
