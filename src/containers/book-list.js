/**
 * Created by jhinchley on 6/13/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {selectBook} from '../actions/index';


class BookList extends Component{

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
                key={book.title}
                className="list-group-item"
                onClick={() => this.props.selectBook(book)}
                >{book.title}</li>
            );
        })
    }
}
function mapStateToProps(state){
    //whatever returned here shows up as props in BookList
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    //whenever selectbook called pass result to all reducers
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//promote booklist from component to container by telling about new dispatch method
//make these things avail as props
export default connect(mapStateToProps,mapDispatchToProps)(BookList);