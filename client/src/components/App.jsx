import React from 'react';
import axios from 'axios';

const DB_URL = `http://localhost:3000/transactions`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: [{}]
    }
  }

  componentDidMount() {
    this.fetchTransactionData();
  }

  fetchTransactionData() {
    axios.get(DB_URL)
      .then(res => {
        this.setState({
          transactions: res.data
        });
        console.log('STATE ', this.state)
      })
      .catch(err => {
        console.log('Error in GET: ', err);
      });
  }

  render() {
    return (
      <div>Hello from App JSX</div>
    );
  }

}

export default App;
