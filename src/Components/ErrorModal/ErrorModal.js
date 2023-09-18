import ReactDOM from "react-dom";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./ErrorModal.module.css";
import React from "react";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeModal} />
}

const Overlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>Invalid Input</h2>
            </header>
            <div className={classes.content}>
                {props.content}
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.closeModal}>Close</Button>
            </footer>
        </Card>
    )
}

function ErrorModal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<Overlay content={props.content} closeModal={props.closeModal} />, document.getElementById('modal-overlay'))}
        </React.Fragment>
    );
}

export default ErrorModal;