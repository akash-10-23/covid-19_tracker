import React from 'react';
import AllCards from './components/AllCards';
import { fetchData } from './api/';
import './App.css';
import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="App">
        <img className="image" src={image} alt="COVID-19" />
        <AllCards data={data} />
        {/* <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />  */}
      </div>
    );
  }
}

export default App;