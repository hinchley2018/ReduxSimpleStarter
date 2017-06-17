/**
 * Created by jhinchley on 6/17/17.
 */
import {FETCH_WEATHER} from '../actions/index';

//Important this state arg needs to be the correct state for the component
export default function(state = [], action){
    console.log("switch?");
    switch (action.type){

        case FETCH_WEATHER:
            console.log("here?");
            //concats new city on top of old and flattens [city,city,...]
            //if this is undefined then redux promise is missing from src/index.js
            //make sure to apply middleware to it as well :P
            //console.log(action.payload.data);
            return [ action.payload.data, ...state ];
    }
    return state;

}