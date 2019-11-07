import React, { Component } from 'react';

class BookSelector extends Component {
  render() {
    return (
      <div>
        {this.props.error !== '' && <h2>please enter a value</h2>}
        <form>
          <input
            required
            type='text'
            name='search'
            placeholder='search book'
            value={this.props.authorName}
            onChange={this.props.handleChange}
          />
          <select
            value={this.props.booktype}
            onChange={this.props.handleChangeType}
          >
            <option value='partial' selected>
              partial
            </option>
            <option value='free-ebooks'>free-ebooks</option>
            <option value='paid-ebooks'>paid-ebooks</option>
            <option value='ebooks'>ebooks</option>
          </select>

          <button type='button' onClick={this.props.handleForm}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default BookSelector;
