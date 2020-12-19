import { connect } from "react-redux";
import FavoriteButton from "./favorite-button.component";
import { saveToFavoriteAlbumAction, removeFromFavoriteAction } from "./favorite-button.action";

export const mapStateToProps = state => {
    return {
        favoriteAlbums : state.favoriteAlbums
    }
}

export const mapDispatchToProps = dispatch =>{
    return {
        saveToFavoriteAlbum : ( rowItem )=>{
            dispatch(saveToFavoriteAlbumAction(rowItem));
        },
        removeFromFavorite : ( payload )=>[
            dispatch(removeFromFavoriteAction(payload))
        ]
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);