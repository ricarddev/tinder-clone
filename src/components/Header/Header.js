import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header({ backButton }) {
    const history = useHistory();
    return (
        <div className="header flex s-bt">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header-icon back-btn"/>
                </IconButton>  
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header-icon"/>
                </IconButton>
            )}
            <Link to="/">
                <IconButton>
                    <img className="logo" src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder-png"/>
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon fontSize="large" className="header-icon"/>
                </IconButton>
            </Link>  
        </div>
    )
}

export default Header
