import React from 'react';
import axios from 'axios';

import Search from './Search';
import TransactionList from './TransactionList';

const DB_URL = `http://localhost:3000/transactions`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      transactions: [{}]
    }
  }

  componentDidMount() {
    this.fetchTransactionData();
  }

  fetchTransactionData() {
    axios.get(DB_URL)
      .then(res => {
        const sortedData = this.arrangeTransactionByDate(res.data);
        this.setState({
          transactions: sortedData,
          loading: false
        });
        console.log('STATE ', this.state)
      })
      .catch(err => {
        console.log('Error in GET: ', err);
      });
  }

  arrangeTransactionByDate(arr) {
    let result = arr.slice();

    // Helper Function
    const convertIsoDateToNum = (date) => {
      const dateTime = date.split('T')
      const yearMonthDay = dateTime[0].split('-').reverse().join('');
      let timeAsNumber = dateTime[1].split(':').join('');
      while (timeAsNumber.length < 4) {
        timeAsNumber = '0' + timeAsNumber;
      }
      const number = Number(`${yearMonthDay}${timeAsNumber}`);
      return number;
    };

    // Sorting by Date
    result.sort((one, two) => {
      return convertIsoDateToNum(two.date) - convertIsoDateToNum(one.date);
    });
    return result;
  }

  render() {
    return (
      <div>
        Hello from App JSX
        <Search />
        {this.state.loading ?
          <h6>Loading True</h6>:
          <TransactionList data={this.state.transactions}/>
        }
      </div>
    );
  }

}

export default App;
