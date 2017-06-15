/**
 * Created by jhinchley on 6/13/17.
 */

import BOOK_SELECTED from '../actions/index'

//not app state
export default function(state=null,action){
    switch (action.type){
        case BOOK_SELECTED: {
            //dont mutate state here return it
            return action.payload;
        }



    }
    return state;
}