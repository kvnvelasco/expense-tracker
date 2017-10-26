import React from 'react';
import { Nav } from './main';

export default class Transaction extends React.Component {
  render() {
    return (
      <div className='container-trans'>
        <h1 className='header-trans'>Transactions</h1>
        <table className='table'>
          {this.props.alltrans.map(item => (
            <Item style={item.type} category={item.category} date={item.date} amount={item.amount} />
          ))}
        </table>
        
        <div className='nav-trans-2'>
          <Nav page='main' navigate={this.props.navigate} >Go Back</Nav>
        </div>
      </div>
    );
  }
}

class Item extends React.Component {
  render() {
    return (
      <tr className='row'>  
        <td className='col-1'>
          <h2 style={{'color':this.props.style}}>{this.props.category}</h2>
          <h4>{this.props.date}</h4>
        </td>
        <td className='col-2'>
          <h2>{this.props.amount}</h2>
        </td>
      </tr>
    );   
  }
}