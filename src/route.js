import {
    BrowserRouter as Router,
    Switch,
     Route,
} from "react-router-dom";

import App from "./App";
import FavoriteAlbum from "./Page/favoriate-album.page";

import { Row, Col, Layout, Typography} from "antd";
import "antd/dist/antd.css";
import './index.css';
const { Header, Content} = Layout;

export default function AppRouter(){
    return(
        <Router>
            <Switch>
            <Layout>
            <Header>Spekit</Header>
                <Content className="padding20">
                    <Route path="/" component={App} exact/>
                    <Route path="/favorite" exact component={FavoriteAlbum} />
                </Content>
            </Layout>
               
            </Switch>
        </Router>
    )
}