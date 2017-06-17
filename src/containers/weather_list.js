/**
 * Created by jhinchley on 6/14/17.
 */

import React, {Component} from 'react';
export default class WeatherList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>City</th>
                    </tr>
                </thead>
            </table>
        );
    }
}