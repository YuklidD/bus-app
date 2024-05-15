import React from 'react';

const Testimonials = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ex euismod, tincidunt nunc id, lacinia nisl."</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Jane Smith</h5>
                            <p className="card-text">"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec euismod, nunc id lacinia nisl."</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Mike Johnson</h5>
                            <p className="card-text">"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vitae ex euismod."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;