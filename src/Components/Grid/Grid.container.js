import { connect } from "react-redux";
import GridComponent from "./Grid.component";

export const mapStateToProps = state => {
    return {
        songs : state.songs
    }
}

export default connect(mapStateToProps)(GridComponent);