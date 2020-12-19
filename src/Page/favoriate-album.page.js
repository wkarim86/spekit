import React from "react";
import { connect} from "react-redux";
import { Row, Col, Typography, PageHeader} from "antd";
import AlbumThumb from "../Components/AlbumThumb";
import FilterDropdown from "../Components/FilterDropDown";

class FavoriteAlbum extends React.PureComponent {

    constructor(props){
        super(props);
        this.state = { 
            list : []
        }
    }

    componentDidMount(){
        const { favoriteAlbums } = this.props;
        this.setState({ list : favoriteAlbums});
    }
    
    render(){ 
        const { list } = this.state;
        return(
            <>
             <PageHeader
                className="site-page-header"
                onBack={() => this.props.history.goBack()}
                title="My Favorites"
                extra={[
                    <FilterDropdown onChange={ e => { this.onFilterChange(e.key) } } />
                ]}
            />
           
          

            <Row gutter={[16,20]}>
            { list  && list.map( song =>{
                return (
                <Col xs={24} sm={12} md={6} lg={4} key={song.trackId}>
                    <AlbumThumb data={song} key={song.trackId}/>
                </Col>

                )
            })} 
            </Row>
        </>
        )
    };

    onFilterChange = ( collectionId ) => { 
        const { favoriteAlbums } = this.props;
        let filteredList = favoriteAlbums.filter( item => item.collectionId === parseInt(collectionId));
        if(collectionId > 0){
            this.setState({list : filteredList});
        }else{
            this.setState({ list : favoriteAlbums});
        }
        
    }
}; 





const mapStateToProps = state => { 
    return{
        favoriteAlbums : state.favoriteAlbums
    }
}

export default connect(mapStateToProps)(FavoriteAlbum);