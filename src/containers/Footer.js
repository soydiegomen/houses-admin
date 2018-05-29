import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeKeyword } from '../actions';

class Footer extends Component {

  render() {
    let input;
    let dispatch = this.props.dispatch;


    return (
      <div>
        <h3>Footer</h3>
        <form
        onSubmit={function (e) {
          e.preventDefault();

          dispatch(changeKeyword(input.value));
          input.value = '';
        }}
        >
          <input ref= {function (node) { input = node; }} />
          <button type="submit">
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Footer);
