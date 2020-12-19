import { connect } from "react-redux";
import HeaderComponent from "./header.component";
export const mapStateToProps = state => {
    return {
        favoriteCount : state.favoriteAlbums.length
    }

}

export default connect(mapStateToProps)(HeaderComponent)