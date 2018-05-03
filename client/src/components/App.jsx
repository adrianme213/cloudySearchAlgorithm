import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import Search from './Search';
import TransactionList from './TransactionList';
import NoResults from './NoResults';
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
    this.clearSearch = this.clearSearch.bind(this);
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
    let result = [...arr];
    result.sort((one, two) => {
      return convertIsoDateToNum(two.date) - convertIsoDateToNum(one.date);
    });
    return result;
  }

  updateTransactionsByQuery(query) {
    if (query === '') { return [...this.state.transactions]; }
    const filteredArray = [...this.state.transactions].filter((item) => {
      const condensedData = [`${displayAmount(item.amount)}`,`${item.date}`,`${item.card_last_four}`];
      return condensedData[0].includes(query) || condensedData[1].includes(query) || condensedData[2].includes(query);
    });
    return filteredArray;
  }

  updateSearch() {
    const query = document.getElementById('search-input').value;
    this.setState({query}, () => {
      const filteredArray = this.updateTransactionsByQuery(query);
      const filteredAndByDateArray = this.arrangeTransactionByDate(filteredArray);
      if (filteredAndByDateArray.length > 0){
        this.setState({
          filteredTransactions: filteredAndByDateArray,
          loading: false
        });
      } else {
        this.setState({loading: true});
      }
    });
  }

  clearSearch() {
    document.getElementById('search-input').value = '';
    this.updateSearch();
  }

  render() {
    return (
      <div>
        <h1>Cloudy Search Algorithm</h1>
        <br />
        <div>
          <Search
            updateSearch={_.debounce(this.updateSearch, 500)}
            clearSearch={this.clearSearch}
          />
          <br />
          <hr />
        </div>
        <div>
          <br />
          {this.state.loading ?
            <NoResults />:
            <TransactionList data={this.state.filteredTransactions}/>
          }
        </div>
      </div>
    );
  }

}

export default App;
