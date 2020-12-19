import Search from "antd/lib/input/Search";
import { connect } from "react-redux";
import { fetchAlbums, reportError} from "./Search.action";
import SearchBox from "./Search.component";

export const mapDispatchToState = dispatch => {
    return { 
        searchSongs : (payload)=>{
            dispatch(fetchAlbums(payload))
        }
    }
}

export default connect(null, mapDispatchToState)(SearchBox);