import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Landing extends Component {

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }


    render() {
        return (
            
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4 "><bold><i>Kanban Tool</i> </bold></h1>
                                <p className="lead">
                                    Let's manage your projects
                            </p>
                            <hr />
                            {/* <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                Register
                                    </Link>
                                <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                    Sign In
                                </Link> */}
                            
                            <div>
                <img class="img-fluid" src="./1.jpg" height="250px" width="500px" />
            </div>
                                <hr />
                                <p >
                            It is a software application used for issue tracking and project management.<br/> 
                            The tool, is developed by Gaurav Srivastava,<br/> 
                             It is going to be widely used by agile development teams to track bugs,
                              stories, epics, and other tasks.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

        )
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    security: state.security
})

export default connect(mapStateToProps)(Landing);