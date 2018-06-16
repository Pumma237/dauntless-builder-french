import React from "react";

import {Link} from "react-router-dom";

export default class IndexView extends React.Component {
    render() {
        return <div>
            <h1 className="title">Welcome to Dauntless-Builder.com!</h1>
            <h2 className="subtitle">World!</h2>

            <p>Lorem ipsum dolor sit amet!</p>

            <div className="featured">
                <div className="columns">
                    <div className="column">
                        <Link to="/b/new">
                            <div className="notification is-success new-build-tile feature-tile">
                                <p className="title">Make a new build</p>
                                <div className="feature-tile-background">
                                    <i className="fas fa-plus"></i>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <Link to="/fav">
                            <div className="tile notification is-danger feature-tile">
                                <p className="title">Favorite Builds</p>
                                <div className="feature-tile-background">
                                    <i className="fas fa-heart"></i>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="column">
                        <a href="https://github.com/atomicptr/dauntless-builder" target="_blank">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">GitHub</p>
                                <div className="feature-tile-background">
                                    <i className="fab fa-github"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="column">
                        <a href="https://buymeacoff.ee/atomicptr" target="_blank">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">Support Me</p>
                                <div className="feature-tile-background">
                                    <i className="fas fa-coffee"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="columns">
                    <div className="column">
                        <a href="https://reddit.com/r/dauntless" target="_blank">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">/r/dauntless</p>
                                <div className="feature-tile-background">
                                    <i className="fab fa-reddit"></i>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="column">
                        <a href="https://discord.gg/dauntless" target="_blank">
                            <div className="tile notification is-light feature-tile">
                                <p className="title">Dauntless Discord</p>
                                <div className="feature-tile-background">
                                    <i className="fab fa-discord"></i>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>;
    }
}