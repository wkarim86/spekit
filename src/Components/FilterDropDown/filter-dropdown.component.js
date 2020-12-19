import React from "react";
import { Menu, Dropdown} from "antd";
import { DownOutlined } from "@ant-design/icons";

class FilterDropdownComponent extends React.PureComponent{ 
    constructor(props){
        super(props);
        this.state = { 
            albums : [],
            selectedMenuIndex: 0
        }
    }

    render(){
        return(
            <Dropdown.Button overlay={this.renderDropdownMenu()} trigger={['click']}>
               
                 { this.props.label}
                
                
             </Dropdown.Button>
        )
    }

    componentDidMount(){
      
        const { favoriteAlbums } = this.props;
        const favalbum = [];
        
        favoriteAlbums.forEach( item => {
                 if(favalbum.findIndex( element => element.collectionId === item.collectionId) === -1) {
                    favalbum.push( { collectionId : item.collectionId, name : item.collectionName});
                 }

        });
        this.setState({albums : favalbum});

    }

    renderDropdownMenu = () => {
        const { albums } = this.state;
        return (
            <Menu onSelect={ this.onClickHandle } selectable={true}>
                <Menu.Item key={0}>All</Menu.Item>
                {
                    albums.map( (item, index) => {
                        return (
                            <Menu.Item key={item.collectionId} value={index}>{item.name}</Menu.Item>
                        )
                    })
                    
                }
            </Menu>
        )
    }

    onClickHandle = e => {
        this.props.onChange(e);
        //this.setState({ selectedMenuIndex : e.key})
    }

    static defaultProps = { 
        label : "Filter by album"
    }
}

export default FilterDropdownComponent;