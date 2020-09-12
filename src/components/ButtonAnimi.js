import React from 'react'
import Button from '@material-ui/core/Button';


const ButtonAnimi = ({name}) => {
    
    return (
        <div className="button-animi">
            <Button className="btn btn-yellow">
                <span className="name-descripeion">{name}</span>
                <div className="btn-bg"></div>
            </Button>
        </div>
    )
}

export default ButtonAnimi
