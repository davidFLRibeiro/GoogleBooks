import React, { Component } from 'react';
import BookApp from './BookApp';
import BookSelector from './BookSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      books: [],
      booktype: 'partial',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleForm = this.handleForm.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ authorName: e.target.value });
    console.log(e.target.value);
  }

  handleChangeType(e) {
    this.setState({ booktype: e.target.value });
  }

  handleForm(e) {
    e.preventDefault();
    console.log(
      'componentDidMount',
      this.state.authorName,
      this.state.booktype
    );

    let author = this.state.authorName;
    if (author === '') {
      this.setState({ error: 'please enter a value' });
      return;
    } else {
      this.setState({ error: '' });
    }

    let type = this.state.booktype;
    let url = `https://www.googleapis.com/books/v1/volumes?q=${author}&filter=${type}&key=AIzaSyDnk0LGmy2CxgFKdEwHhodGSw2Gt80CvpM`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          books: data.items
        });
      })
      .catch(err => {});
  }

  render() {
    console.log('appJs render', this.state.authorName);
    return (
      <div>
        <BookSelector
          booktype={this.state.booktype}
          authorName={this.state.authorName}
          handleChange={this.handleChange}
          handleChangeType={this.handleChangeType}
          handleForm={this.handleForm}
          error={this.state.error}
        />
        <BookApp authorName={this.state.authorName} books={this.state.books} />
      </div>
    );
  }
}

export default App;
