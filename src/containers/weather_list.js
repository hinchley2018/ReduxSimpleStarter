/**
 * Created by jhinchley on 6/14/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from "../components/google_map";

class WeatherList extends Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    /**
     * @param cityData - weather obj from api for a specific city
     * @returns {XML} - table data for our city
     */
    renderWeather(cityData) {
        const name = cityData.city.name;

        //convert temp to celisus
        const temps = _.map(cityData.list.map(weather => weather.main.temp),(temp) => temp-273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        //grab coord data from citydata
        const { lon, lat} = cityData.city.coord;


        return(
            <tr key={name}>
                <td><GoogleMap lng={lon} lat={lat} /></td>
                <td>
                    <Chart data={temps} color="red" units="C"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="blue" units="%"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps({weather}) {//pull only weather from state
    return{weather:weather};
}
export default connect(mapStateToProps)(WeatherList);