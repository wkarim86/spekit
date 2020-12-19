import { connect} from "react-redux";
import FilterDropdownComponent from "./filter-dropdown.component";
export const mapStateToProps = state => {
    return {
        favoriteAlbums : state.favoriteAlbums
    }
}

export default connect(mapStateToProps)(FilterDropdownComponent);