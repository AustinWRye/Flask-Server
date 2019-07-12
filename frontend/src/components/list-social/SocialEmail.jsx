import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

class SocialEmail extends Component {
    state = {
        show: false
    };

    handleClose = () => {
        this.setState({ show: false });
    };

    handleShow = () => {
        this.setState({ show: true });
    };

    render() {
        return (
            <Fragment>
                <Button variant="link" onClick={this.handleShow}>
                    <img src={this.props.social.icon} alt="" />
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    className="email-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>austinrye@cmail.carleton.ca</Modal.Body>
                </Modal>
            </Fragment>
        );
    }
}

export default SocialEmail;
