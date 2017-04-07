import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {
  goToStore(event) {
    event.preventDefault();
    //first grab the text from the box
    console.log(this.storeInput.value);
    //second we will transition from / to /store/:storeid
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* COMMENTS */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }}
        />
        <button className="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
