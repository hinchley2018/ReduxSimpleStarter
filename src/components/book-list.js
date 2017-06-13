/**
 * Created by jhinchley on 6/13/17.
 */

import React, {Component} from 'react';

export default class BookList extends Component{

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }

    renderList(){
        return this.props.books.map((book) =>{
            return (
                <li
                key={}
                className="list-group-item">{book.title}</li>
            );
        })
    }
}