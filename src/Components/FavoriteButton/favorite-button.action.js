import  { SAVE_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../../Redux/actionTypes";

export const saveToFavoriteAlbumAction = ( payload ) => {
    return {
        type : SAVE_TO_FAVORITE,
        payload
    }
}
export const removeFromFavoriteAction = ( payload ) =>{
    return {
        type : REMOVE_FROM_FAVORITE,
        payload
    }
}
