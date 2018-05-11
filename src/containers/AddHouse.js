import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addHouse } from '../actions';

class AddHouse extends Component {

  render() {
    let input;
    let addressInput;
    let priceInput;
    let dispatch = this.props.dispatch;

    return (
      <div>
        <form
          onSubmit={function (e) {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            if (!addressInput.value.trim()) {
              return
            }
            if (!priceInput.value.trim()) {
              return
            }

            dispatch(addHouse(input.value, addressInput.value,
            priceInput.value));

            input.value = '';
            addressInput.value = '';
            priceInput.value = '';
          }}
        >
          Titulo:<input ref= {function (node) { input = node; }} />
          <br/>
          Dirección:<input ref= {function (node) { addressInput = node; }} />
          <br/>
          Precio:<input ref= {function (node) { priceInput = node; }} />
          <br/>
          <button type="submit">
            Agregar Casa
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddHouse);
