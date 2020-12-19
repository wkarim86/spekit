import React from "react";
import { Card, Typography }  from "antd";
import FavoriteButton from "../FavoriteButton";

class AlbumThumbComponent extends React.PureComponent{ 
    render(){
        const { data } = this.props;
        return(
            <Card
            cover={<img src={data.artworkUrl100} alt={data.collectionName} />}
            actions={[
                <FavoriteButton data={data}/>
            ]
            }
        >
         <Typography.Title level={5}>{data.trackName}</Typography.Title>
         <Typography.Text strong>Album: </Typography.Text><Typography.Link>{data.collectionName}</Typography.Link>
         <br />
         <Typography.Text strong>Artist: </Typography.Text><Typography.Text>{data.artistName}</Typography.Text>
    </Card>
        )
    }
}

export default AlbumThumbComponent;