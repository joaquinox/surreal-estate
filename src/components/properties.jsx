import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../css/properties.css';
import { Link } from 'react-router-dom';

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
      .then(({ data: properties }) => this.setState({ properties }))
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'Sorry, we could not find any properties. Please try again.',
        });
      });
  }

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios.get(`URL${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <Link to={'/?query={ "city": "Manchester" })'}>Manchester</Link>
          <Link to={'/?query={ "city": "Leeds" })'}>Leeds</Link>
          <Link to={'/?query={ "city": "Sheffield" })'}>Sheffield</Link>
          <Link to={'/?query={ "city": "Liverpool" })'}>Liverpool</Link>
        </div>
        <div className="properties">
          {this.state.properties.map(property => <div key={property._id} className="col"> <PropertyCard {...property} /> </div>)}
        </div>
      </div>
    );
  }
}

export default Properties;
