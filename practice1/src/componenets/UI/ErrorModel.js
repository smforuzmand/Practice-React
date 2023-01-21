import React from 'react';
import Card from './Card';
import Button from './Button'
import classes from './ErrorModal.module.css'
import { ReactDOM } from 'react-dom';

const Backdrop = (props) => {
    return

    <div className={classes.backdrop} onclick={props.onConfirm} />

}


const ModelOverlay = props => {
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={classes.content}>
            <p>
                {props.message}

            </p>



        </div>

        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>
                Okay
            </Button>
        </footer>

    </Card>

}

const ErrorModel = (props) => {
    return (
        <React.Fragment>

            {ReactDOM.createPortal(<Backdrop onClick={props.onConfirm} />, document.getElementById('backdrop-root'))}

        </React.Fragment>
    );
};

export default ErrorModel;