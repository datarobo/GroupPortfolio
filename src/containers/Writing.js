import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const Date = styled.p`
  font-size: 12px;
`

class Writing extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I write about tech, life, and personal development.</CenteredHeader>
        </div>
        <h5>Tech-related:</h5>
        <ul>
          <li>
            <a href="" target="_blank">Blog post 1</a>
            <Date>November XXX, 2017</Date>
          </li>
          <li>
            <a href="" target="_blank">Blog post 2</a>
            <Date>November XXX, 2017</Date>
          </li>
          
        </ul>
        <h5>Other:</h5>
        <ul>
          <li>
            <a href="" target="_blank">Other post </a>
            <Date>April xxx 2018</Date>
          </li>
          
        </ul>
        <div>
          <CenteredHeader>Read more on <a href="" target="_blank"><i className="fa fa-medium fa-fw" />Medium</a>.</CenteredHeader>
        </div>
      </div>
    );
  }
}

export default Writing;
