/**
 * Created by jhinchley on 6/17/17.
 */
import FETCH_WEATHER from '../actions/index';

export default function(state = null, action){
    switch (action.type){
        case FETCH_WEATHER:{
            //concats new city on top of old and flattens [city,city,...]
            return [ action.payload.data, ...state ];
            
        }
        default:
            return state;        
    }
    
}