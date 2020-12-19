import  { FETCH_ALBUMS, SERVER_ERROR } from "../../Redux/actionTypes";
import {serviceSearchAlbum} from "./Search.service";

export const fetchAlbums = ( payload ) => {
    return {
        type : FETCH_ALBUMS,
        payload
    }
}

export const reportError = ( payload ) =>{
    return {
        type: SERVER_ERROR,
        payload
    }
}

export const searchAlbumByArtistAction = (term) => {
    return (dispatch)=>{
        return serviceSearchAlbum(term).then(
            response => {
                console.log("response", response.data);
                dispatch(fetchAlbums(response.data))
            },
            error => dispatch( reportError(error))
        )
    }
}
