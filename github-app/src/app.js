/* eslint no-unused-vars: 0 */

'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'

import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then(result => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  handleRepos (e) {
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
      .then(result => {
        this.setState({
          repos: result
        })
      })
  }

  handleStarred (e) {
    ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
      .then(result => {
        this.setState({
          starred: result
        })
      })
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={e => this.handleSearch(e)}
      handleRepos={e => this.handleRepos(e)}
      handleStarred={e => this.handleStarred(e)}
    />
  }
}

export default App
