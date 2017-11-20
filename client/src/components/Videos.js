import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
//import { getVideoData } from '../../../controllers/videos';

class Videos extends Component {

    constructor() {
        super();
        this.state = { videos: [] };
    }

    getVideos() {
        getVideoData().then((videos) => {
            this.setState({ videos });
        });
    }

    componentDidMount() {
        this.getVideos();
    }

    render() {

        const { videos }  = this.state;

        return (
            <div>
                <Nav />
                <h3 className="text-center">Crossover videos</h3>
                <hr/>

                { videos.map((video, index) => (
                    <div className="col-sm-6" key={index}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title"> <span className="btn">#{ video.id }</span></h3>
                            </div>
                            <div className="panel-body">
                                <p> { video.video } </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

export default Videos;
