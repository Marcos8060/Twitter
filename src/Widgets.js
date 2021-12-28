import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, 
    TwitterTweetEmbed,
    TwitterMentionButton,
    TwitterHashtagButton,
    TwitterMomentShare,
    TwitterVideoEmbed
     } from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets_input">
               <SearchIcon />
               <input type="text"  placeholder='Search Twitter'/>
            </div>

               <TwitterTweetEmbed
                 tweetId={'933354946111705097'}
               />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="MarcosOchieng8"
                    options={{height: 400}}
                />

                <TwitterMentionButton
                    screenName={'MarcosOchieng8'}
                />
                <TwitterHashtagButton
                tag={'cybersecurity'}
                />

                <TwitterVideoEmbed
                    id={'560070183650213889'}
                />

                <TwitterMomentShare
                    momentId={'650667182356082688'}
                />

        </div>
    )
}

export default Widgets
