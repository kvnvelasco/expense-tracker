import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);
    let curMonth = new Date();
    let options = { month: 'long', year: 'numeric' };
    this.state = {
      curDate: curMonth.toDateString('us-en', options)
    }
  }

  
  
  render() {
    return (
      <div className='container-main' >
        <div className='header'>
          <h1>{this.state.curDate}</h1>
        </div>
        <div className='left-column'>
          <h2>Income</h2>
          <h2>Expenses</h2>
        </div>
        <div className='left-total'>
          <h2>Balance</h2>
        </div>
        <div className='right-column'>
          <h2>{this.props.income.reduce((sum, amt) => sum + parseInt(amt.amount), 0)}</h2>
          <h2>{this.props.trans.reduce((sum, amt) => sum + parseInt(amt.amount), 0)}</h2>
        </div>
        <div className='right-total'>
          <h2>{this.props.income.reduce((sum, amt) => sum + parseInt(amt.amount), 0) - this.props.trans.reduce((sum, amt) => sum + parseInt(amt.amount), 0)}</h2>
        </div>
        <div className='nav-exp'>
          <button id='addExp' onClick={() => this.props.reset('expense')}>Add Expense</button>
          <button id='addInc' onClick={() => this.props.reset('income')}>Add Income</button>
        </div>
        <div className='nav-trans'>
          <Nav page='transaction' navigate={this.props.navigate} >Transactions</Nav>
          <Nav page='dashboard' navigate={this.props.navigate} >Dashboard</Nav>
        </div>
      </div>
    );
  }
}

export class Nav extends React.Component {
  render() {
    return (
      <button class='nav-button' onClick={() => this.props.navigate(this.props.page)}>{this.props.children}</button>  
    );
  }
}