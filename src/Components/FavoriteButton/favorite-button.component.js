import React from "react";
import {Button } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

class FavoriteButton extends React.PureComponent{

    render(){
        const { data : { trackId }, favoriteAlbums } = this.props;
        const isAlreadyFav = favoriteAlbums.findIndex( element => element.trackId === trackId);
        return(
            <Button icon={ isAlreadyFav > -1 ? <HeartFilled /> : <HeartOutlined />} type="link" onClick={ this.onClickListener}/>
        )
    }

    
    onClickListener = () => {
        const { data, favoriteAlbums } = this.props;
        const isAlreadyFav = favoriteAlbums.findIndex( element => element.trackId === data.trackId);
        if(isAlreadyFav > -1){
            const newFavorites = favoriteAlbums.filter( element => element.trackId !== data.trackId)
            this.props.removeFromFavorite(newFavorites);
        }else{
            this.props.saveToFavoriteAlbum( data )
        }
        
    }
}

export default FavoriteButton;