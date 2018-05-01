import React from 'react';
import axios from 'axios';

import Search from './Search';
import TransactionList from './TransactionList';
import {convertIsoDateToNum, displayAmount} from '../helpers/helpers';

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
      })
      .catch(err => {
        console.log('Error in GET: ', err);
      });
  }

  arrangeTransactionByDate(arr) {
    let result = arr.slice();
    result.sort((one, two) => {
      return convertIsoDateToNum(two.date) - convertIsoDateToNum(one.date);
    });
    return result;
  }

  updateTransactionsByQuery(query) {
    if (query === '') { return this.state.transactions; }
    let filteredArray = this.state.transactions.map(entry => {
      return {
        date: entry.date,
        amount: displayAmount(entry.amount),
        card_last_four: entry.card_last_four
      };
    });
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
        <h1>Cloudy Search Algorithm</h1>
        <div>
          <Search updateSearch={this.updateSearch}/>
          <br />
          <hr />
        </div>
        <div>
        <br />
          {this.state.loading ?
            <h6>Loading True</h6>:
            <TransactionList data={this.state.filteredTransactions}/>
          }
        </div>
      </div>
    );
  }

}

export default App;
