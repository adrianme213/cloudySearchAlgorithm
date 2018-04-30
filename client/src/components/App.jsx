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
      query: '',
      filteredTransactions: [{}],
      transactions: [{}]
    }
    this.fetchTransactionData = this.fetchTransactionData.bind(this);
    this.arrangeTransactionByDate = this.arrangeTransactionByDate.bind(this);
    this.updateTransactionsByQuery = this.updateTransactionsByQuery.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.fetchTransactionData();
  }

  fetchTransactionData() {
    axios.get(DB_URL)
      .then(res => {
        this.setState({
          transactions: res.data,
          loading: false
        }, () => { this.updateSearch(); });
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

  updateTransactionsByQuery(query) {
    if (query === '') { return this.state.transactions; }
    let filteredArray = this.state.transactions;
    filteredArray = filteredArray.filter((item) => {
      const condensedData = `${item.amount}${item.date}${item.card_last_four}`;
      return condensedData.includes(query);
    });
    return filteredArray;
  }

  updateSearch(e) {
    const query = document.getElementById('search-input').value
    this.setState({query}, () => {
      const filteredArray = this.updateTransactionsByQuery(query);
      const filteredAndByDateArray = this.arrangeTransactionByDate(filteredArray);
      this.setState({filteredTransactions: filteredAndByDateArray});
    });
  }

  render() {
    return (
      <div>
        Cloudy Search Algorithm
        <Search updateSearch={this.updateSearch}/>
        {this.state.loading ?
          <h6>Loading True</h6>:
          <TransactionList data={this.state.filteredTransactions}/>
        }
      </div>
    );
  }

}

export default App;
