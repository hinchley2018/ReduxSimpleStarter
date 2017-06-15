/**
 * Created by jhinchley on 6/14/17.
 */

import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


import {fetchWeather} from "../actions/index";


class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            city:'',
            country:''
        }
        this.onInputChangeCity = this.onInputChangeCity.bind(this)
        this.onInputChangeCountry = this.onInputChangeCountry.bind(this)
    }

    onInputChangeCity(event){
        console.log(event);
        this.setState({city: event.target.value});
    }
    onInputChangeCountry(event){
        console.log(event);
        this.setState({country: event.target.value});
    }

    render(){
        return(
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}
            >
                <input
                    placeholder="Get a 5-day forecast in your favorite city"
                    className="form-control"
                    value={this.state.city}
                    onChange={this.onInputChangeCity}
                />

                <span className="input-group-btn">
                     <input
                         placeholder="Country Code"
                         className="form-control"
                         value={this.state.country}
                         onChange={this.onInputChangeCountry}
                     />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        );
    }

    onFormSubmit(event) {
        event.preventDefault();

        //go fetch weather data
        this.props.fetchWeather(this.state.city,this.state.country)

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);