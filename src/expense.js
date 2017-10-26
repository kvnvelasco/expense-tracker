import React from 'react';
import { Nav } from './main';

export default class Expense extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expCateg: ['Food','Rent','Utilities','Travel','Entertainment']
    }
  }

  addCateg = () => { 
    let newCateg = prompt('Enter new category')

    if(!newCateg) {
      alert('Category cannot be blank')
    }
    this.setState({expCateg: this.state.expCateg.concat(newCateg)})
  }

  render() {
    return (
      <div className='container-expense' >
        <h1 className='header'>Add Expense</h1>
        <div className='left-expense'>
          <h2>Date</h2>
          <h2>Amount</h2>
          <h2>Category</h2>
        </div>
        <div className='right-expense' >
          <h2>
            <input
                className='inputDate' 
                type='date' 
                onChange={this.props.onDateChange}
                max='2100-01-01'
                min='2000-01-01'/>
          </h2>
          <h2><input className='inputAmount' type='number' onChange={this.props.onAmountChange}/></h2>
          <h2><input className='inputCategory' list='category' onChange={this.props.onCategoryChange}/></h2>
            <datalist id='category'>
              {this.state.expCateg.map(item => <option value={item} />)}
            </datalist>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Plus_font_awesome.svg/512px-Plus_font_awesome.svg.png'
              className='addCateg' 
              onClick={this.addCateg}
              height='20px'/>            
        </div>
        <div className='nav-expense'>
          <button className='button-expense' onClick={this.props.onClick} >Add</button>
        </div>
        <div className='nav-trans-expense'>
          <Nav page='main' navigate={this.props.navigate} >Go Back</Nav>
          <Nav page='transaction' navigate={this.props.navigate} >Transactions</Nav>
        </div>
      </div>
    );
  }
}

