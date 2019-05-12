import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../css/properties.css';

const URL = 'http://localhost:3000/api/v1/PropertyListing';

class Properties extends React.Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => this.setState({ properties: response.data }))
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'Sorry, we could not find any properties.',
        });
      });
  }

  render() {
    return (
      <div className="properties">
        {this.state.properties.map((property) => <PropertyCard key={property._id} {...property} />)}
      </div>
    );
  }
}

export default Properties;
