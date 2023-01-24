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

            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}

            {ReactDOM.createPortal(<ModelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />
                ,
                document.getElementById('overlay-root')

            )}

        </React.Fragment>
    );
};

export default ErrorModel;



/* This code defines a React component called "ErrorModel" that renders a backdrop and a modal overlay. The backdrop is rendered using the "Backdrop" component, which takes a single prop "onConfirm" and renders a div element with the class "backdrop" that has an onClick event that calls the "onConfirm" function passed as a prop. The modal overlay is rendered using the "ModelOverlay" component, which takes several props such as "title", "message", and "onConfirm". The "ErrorModel" component uses ReactDOM.createPortal to render the "Backdrop" and "ModelOverlay" components inside the elements with the id "backdrop-root" and "overlay-root" respectively. The "onConfirm" prop passed to both components is used to handle the click event on the "Okay" button. */