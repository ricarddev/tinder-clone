import React from 'react';
import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipeButtons flex">
            <IconButton className="btn-reapet">
                <ReplayIcon fontSize="large" style={{ color: "#f5b748" }} />
            </IconButton>
            <IconButton className="btn-reapet">
                <CloseIcon fontSize="large" style={{ color: "#ec5e6f" }} />
            </IconButton>
            <IconButton className="btn-reapet">
                <StarRateIcon fontSize="large" style={{ color: "#62b4f9" }} />
            </IconButton>
            <IconButton className="btn-reapet">
                <FavoriteIcon fontSize="large" style={{ color: "#76e2b3" }} />
            </IconButton>
            <IconButton className="btn-reapet">
                <FlashOnIcon fontSize="large" style={{ color: "#915dd1" }} />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
