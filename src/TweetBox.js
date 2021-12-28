import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import './TweetBox.css'
import {Button} from '@mui/material';
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const newTweet = (e) =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName : 'Marcos Ochieng',
            username: 'MarcosOchieng8',
            text: tweetMessage,
            verified: true,
            avatar: 'https://pbs.twimg.com/profile_banners/1375830689023672322/1616859668/600x200',
            image: tweetImage
        })

        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <>
            <div className='tweetBox'>
                <div className="tweetBox_input">
                    <img src="https://pbs.twimg.com/profile_banners/1375830689023672322/1616859668/600x200" alt="" />
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    type="text" 
                    placeholder='What"s happening?'/>
                </div>
                <div className="tweetBox_ImageInput">
                    <ImageIcon className='imageIcon'/>
                    <input 
                       onChange={e => setTweetImage(e.target.value)}
                       value={tweetImage}
                       type="text" 
                       placeholder='Enter image URL...'/>
                </div>
            <div className="tweetBox_button">
                <Button onClick={newTweet} type='submit' variant='outlined'>Tweet</Button>
            </div>
            </div>
        </>
        
    )
}

export default TweetBox
