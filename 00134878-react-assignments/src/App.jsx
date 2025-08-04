import React, { Component } from 'react'
import Task1 from './task1/Task1'
import Task2 from './task2/Task2'
import Parent from './task3/parent/Parent'
import Task4 from './task4/Task4'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Task 1:</h1>
        <Task1></Task1>
        <h1>Task 2:</h1>
        <Task2></Task2>
        <h1>Task 3:</h1>
        <Parent></Parent>
        <h1>Task 4:</h1>
        <Task4></Task4>
      </div>
    )
  }
}
