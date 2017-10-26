import React from 'react';
import { Nav } from './main';

export default class Income extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incCateg: ['Salary','Profits','Capital Gain']
    }
  }

  render() {
    return (
      <div className='container-expense' >
        <h1 className='header'>Add Income</h1>
        <div className='left-expense'>
          <h2>Date</h2>
          <h2>Amount</h2>
          <h2>Category</h2>
        </div>
        <div className='right-expense' >
          <h2><input type='date' onChange={this.props.onDateChange}/></h2>
          <h2><input type='number' onChange={this.props.onAmountChange}/></h2>
          <h2><input list='category' onChange={this.props.onCategoryChange}/></h2>
            <datalist id='category'>
              {this.state.incCateg.map(item => <option value={item} />)}
            </datalist>   
        </div>
        <div className='nav-expense'>
          <button className='button-income' onClick={this.props.onClick}>Add</button>
        </div>
        <div className='nav-trans-expense'>
          <Nav page='main' navigate={this.props.navigate} >Go Back</Nav>
          <Nav page='transaction' navigate={this.props.navigate} >Transactions</Nav>
        </div>
      </div>
    );
  }
}

