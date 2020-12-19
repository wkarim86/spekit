import React from "react";
import { Col} from "antd";
import { Link } from "react-router-dom";
import { HeartFilled } from "@ant-design/icons";
import SearchBox from "../Search";

class HeaderComponent extends React.PureComponent{
    render(){
        const {favoriteCount} = this.props;
        return(
            <>
                 <Col>
                   <SearchBox />
                 </Col>
                 <Col>
                   <Link to="/favorite"><HeartFilled /> Favorite Albums ({favoriteCount})</Link>
                </Col>
            </>
        )
    }
}
export default HeaderComponent;