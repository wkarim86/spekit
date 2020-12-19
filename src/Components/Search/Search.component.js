import React from "react";
import { Input} from "antd";
import {serviceSearchAlbum} from "./Search.service"
const { Search } = Input;

class SearchBox extends React.Component{ 

    render(){
        console.log(this.props);
        return(
            <Search
                placeholder="Search for artist"
                allowClear
                onSearch={ this.onSearchHandle}
            />
        )
    }
    onSearchHandle = value =>{
        serviceSearchAlbum( value, response =>{
            this.props.searchSongs(response.data);
        } );
     }
  
}

export default SearchBox;