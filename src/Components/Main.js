import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

class Main extends Component {

    state = { loading: true };

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false})
        });
        this.props.startLoadingComments()
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Photowall </Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>

                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto {...this.props}/>
                )}/>

                <Route path="/single/:id" render={(params) => (
                    <Single  loading={this.state.loading} {...this.props} {...params}/>
                )}/>
            </div>
        )
    }
}

export default Main