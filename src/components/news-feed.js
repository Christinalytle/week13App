import React from 'react'; 
import Post from './post'; 



export default class NewsFeed extends React.Component {

    render() {
        let comments = [
            {
                content: 'this is my post', 
                username: 'Tommy',
                date: '12-12-2019'
            },
            {
                content: 'this is another post', 
                username: 'Tim',
                date: '12-15-2019'
            },
            {
                content: 'this is a post from me', 
                username: 'Sally',
                date: '12-10-2019'
            }
        ]
     
        return (
            <div className="container">
                <Post {...{comments: comments, content: "Thisi s my post content" }} />
                <Post {...{content: 'Here is another post!!'}}/>
            </div>
        )
      
    }
}