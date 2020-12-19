import React from "react";
import { Col} from "antd";
import AlbumThumb from "../AlbumThumb";

export default class GridComponent extends React.PureComponent {
    
    render(){ 
        const { songs } = this.props;
     
        return(
           <>
            { songs.results  && songs.results.map( song =>{
                return (
                <Col xs={24} sm={12} md={6} lg={4} key={song.trackId}>
                    <AlbumThumb data={song} />
                </Col>

                )
            })} 
            </>
        )
    };
};



