import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    let a = this.props.trans.reduce((acc, item) => {
      let final = acc
      final.totalAmount = final.totalAmount + parseInt(item.amount);
      switch (item.category) {
        case 'Food':
          final.totalFood = final.totalFood + item.amount;
          break;
        case 'Rent':
          final.totalRent = final.totalRent + item.amount;
          break;
        case 'Utilities':
          final.totalUtilities = final.totalUtilities + item.amount;
          break;
        case 'Travel':
          final.totalTravel = final.totalTravel + item.amount;
          break;
        case 'Entertainment':
          final.totalEntertainment = final.totalEntertainment + item.amount;
          break;
      }

      final.food = (final.totalFood / final.totalAmount)*100;
      final.rent = (final.totalRent / final.totalAmount)*100;
      final.utilities = (final.totalUtilities / final.totalAmount)*100;
      final.travel = (final.totalTravel / final.totalAmount)*100;
      final.entertainment = (final.totalEntertainment / final.totalAmount)*100;
      console.log(final);
      return final;
    }
    ,{
      food: 0,
      rent: 0,
      utilities: 0,
      travel: 0,
      entertainment: 0,
      totalAmount: 0,
      totalFood: 0,
      totalRent: 0,
      totalUtilities: 0,
      totalTravel: 0,
      totalEntertainment: 0
    })

    return (
      <div className="container-dash">
        <h1 className="header">Dashboard</h1>
        <h2 className='food'>Food</h2><h2 className='foodresult'>{a.food.toFixed(2)}%</h2>
        <h2 className='rent'>Rent</h2><h2 className='rentresult'>{a.rent.toFixed(2)}%</h2>
        <h2 className='util'>Utilities</h2><h2 className='utilresult'>{a.utilities.toFixed(2)}%</h2>
        <h2 className='travel'>Travel</h2><h2 className='travelresult'>{a.travel.toFixed(2)}%</h2>
        <h2 className='ent'>Entertainment</h2><h2 className='entresult'>{a.entertainment.toFixed(2)}%</h2>
        <div className='nav-dash'>
          <button className='nav-button' onClick={() => this.props.navigate('main')}>Go Back</button>
          <i className='fa fa-trash' />
        </div>
      </div>
    ); 
  }
}