import React from 'react';

const styles = {
    fontWeight: "bold"
}

const Banner = () => (
    <div className="jumbotron jumbotron-fluid mt-5">
        <div className="col text-center p-5">
            <h1 className="display-4" style={styles}>Pokemon Memory Game</h1>
            <p className="lead">Click on an Pokemon to earn points, but don't click on any more than once!</p>
        </div>
    </div>
);

export default Banner;