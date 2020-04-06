import React, { Component, Fragment } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.show !== this.props.show){
            return true
        } 
    }

    componentDidUpdate(){
        console.log('[Modal] did update');
    }
    
    render(){
        return ( 
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                 <div 
                     className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}
                     >
                 {this.props.children}
                 </div>
            </Fragment>
             ) 
    }
   
        
}

export default Modal;