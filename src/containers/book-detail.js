/**
 * Created by jhinchley on 6/13/17.
 */

import React, {Component} from 'react';

import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <div>Select a book to get started</div>;
        }
        return(
            <div>
                <div>Title: {this.props.book.title}</div>
                <div>Page Count: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    //whatever returned here shows up as props in BookList
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);