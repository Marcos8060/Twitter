import React from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({displayName,username,text,image,avatar,verified}) {
    return (
        <div className='post'>
            <div className="post-header">
                <img src={avatar} alt="" />
                <h3>{displayName}</h3>
                { verified && <VerifiedIcon className='verified'/>}
                <span>@{username}</span>
            </div>
            <div className="post_headerText">
                <p>{text}</p>
                 <img src={image} alt="cnn" />
            </div>
            <div className="post_headerTextIcons">
                <ChatBubbleOutlineIcon />
                <RepeatIcon />
                <FavoriteBorderIcon />
                <IosShareIcon />
            </div>
        </div>
    )
}

export default Post
