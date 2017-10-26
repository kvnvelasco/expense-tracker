import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import Main from './main';
import Expense from './expense';
import Income from './income';
import Transaction from './transaction';
import Dashboard from './dashboard';

class ExpenseApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'main',
      date: '',
      amount: 0,
      category: '',
      totalIncome: 0,
      totalExpense: 0,
      transaction: [],
      income: [],
      alltrans: []  
    }
  }

  addTransaction = () => {
    if(this.state.amount===0) {
      alert('Amount is required!') 
    }

    if(!this.state.category) {
      alert('Category is required!')  
    }

    if(this.state.amount!==0 && this.state.category) {
      this.setState({page: 'main'})
      this.setState({
        transaction: this.state.transaction.concat(
          {
            date: this.state.date,
            amount: this.state.amount,
            category: this.state.category,
          }
        )
      });
      this.setState({
        alltrans: this.state.alltrans.concat(
          {
            date: this.state.date,
            amount: this.state.amount,
            category: this.state.category,
            type: 'red'
          }
        )
      });
    }
  } 

  addIncome = () => {
    if(this.state.amount===0) {
      alert('Amount is required!') 
    }

    if(!this.state.category) {
      alert('Category is required!')  
    }

    if(this.state.amount!==0 && this.state.category) {
      this.setState({page: 'main'});
      this.setState({
        income: this.state.income.concat(
          {
            date: this.state.date,
            amount: this.state.amount,
            category: this.state.category,
          }
        )
      });
      this.setState({
        alltrans: this.state.alltrans.concat(
          {
            date: this.state.date,
            amount: this.state.amount,
            category: this.state.category,
            type: 'green'
          }
        )
      });
    }
  }

  reset = x => {
    this.setState({page: x});
    this.setState({
      date: '',
      amount: 0,
      category: ''
    })
  }

  navigate = x => this.setState({page: x});

  render() {
    switch(this.state.page) {
      case 'main':
        return <Main 
                  trans={this.state.transaction}
                  income={this.state.income}
                  totalInc={this.state.totalIncome} 
                  totalExp={this.state.totalExpense} 
                  navigate={this.navigate}
                  reset={this.reset} />
      case 'expense':
        return <Expense 
                  visibility={this.state.visibility}
                  onDateChange={e => this.setState({date: e.target.value})} 
                  onAmountChange={e => this.setState({amount: e.target.value})} 
                  onCategoryChange={e => this.setState({category: e.target.value})} 
                  onClick={this.addTransaction} 
                  navigate={this.navigate} />
      case 'income':
        return <Income 
                 onDateChange={e => this.setState({date: e.target.value})} 
                 onAmountChange={e => this.setState({amount: e.target.value})} 
                 onCategoryChange={e => this.setState({category: e.target.value})} 
                 onClick={this.addIncome} 
                 navigate={this.navigate} />
      case 'transaction':
        return <Transaction
                  amount={this.state.amount}
                  category={this.state.category}
                  alltrans={this.state.alltrans} 
                  navigate={this.navigate}/>
      case 'dashboard':
      return <Dashboard
                trans={this.state.transaction} 
                navigate={this.navigate}/>
    }
  }
}

ReactDOM.render(<ExpenseApp />, document.getElementById('root'));

