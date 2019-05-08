import React, { Component } from 'react';
import '../css/add-property.css';

class AddProperty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        bedrooms: '',
        bathrooms: '',
        price: '',
        city: 'Manchester',
        email: '',
      },
    };
  }

handleAddProperty = (event) => {
  event.preventDefault();
  console.log(this.state.fields);
};

handleFieldChange = (event) => {
  this.setState({
    fields: {
      ...this.state.fields,
      [event.target.name]: event.target.value,
    },
  });
};

render() {
  return (
    <div>
      <div className="add-property-title">
        Add a Property
      </div>
      <div className="add-property-form">
        <form onSubmit={this.handleAddProperty}>
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="Title" />
          <br />
          <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option label="Flat" value="Flat" />
            <option label="Detached" value="Detached" />
            <option label="Semi-Detached" value="Semi-Detached" />
            <option label="Terraced" value="Terraced" />
            <option label="End of Terrace" value="End of Terrace" />
            <option label="Cottage" value="Cottage" />
            <option label="Bungalow" value="Bungalow" />
          </select>
          <br />
          <input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} placeholder="No. of bedrooms" />
          <br />
          <input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} placeholder="No. of bathrooms" />
          <br />
          <input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} placeholder="Price(£)" />
          <br />
          <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option label="Manchester" value="Manchester" />
            <option label="Leeds" value="Leeds" />
            <option label="Sheffield" value="Sheffield" />
            <option label="Liverpool" value="Liverpool" />
          </select>
          <br />
          <input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="Email address" />
          <br />
          <button type="submit">Add...</button>
        </form>
      </div>
    </div>
  );
}
}

export default AddProperty;
