import initialStates from "./initialstates";
import {FETCH_ALBUMS, LOADING,CLEAR_SEARCH_RESULT, SAVE_TO_FAVORITE, SERVER_ERROR, REMOVE_FROM_FAVORITE} from "./actionTypes";

const appReducer  = ( state = initialStates, action) => {
    switch(action.type){
        case LOADING:
            return {
                ...state,
                isLoading : !action.payload
            }
        case FETCH_ALBUMS:
            return{ 
                ...state,
                songs : action.payload
            }
        case CLEAR_SEARCH_RESULT:
            return{
                ...state,
                songs: initialStates.artists
            }
        case SAVE_TO_FAVORITE:
            return{ 
                ...state,
                favoriteAlbums: [...state.favoriteAlbums, action.payload]
            }
        case SERVER_ERROR : 
            return{
                ...state,
                error : action.payload
            }
        case REMOVE_FROM_FAVORITE :
            return{
                ...state,
                favoriteAlbums:  action.payload
            }
        default : 
            return state
    };
};

export default appReducer;