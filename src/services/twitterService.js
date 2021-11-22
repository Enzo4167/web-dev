const TWEET_API = 'https://node-enzo.herokuapp.com/api/tweets';

export const fetchAllTweets = (dispatch) => {
    // console.log('fetching tweets...')
    fetch(TWEET_API)
        .then(response => response.json())
        .then(tweets =>
            dispatch({
                type: 'fetch-all-tweets',
                tweets
            })
        )
}

export const postNewTweet = (dispatch, newTweet) => {
    fetch(TWEET_API, {
        method: 'POST',
        body: JSON.stringify(newTweet),
        headers: {
            'Content-Type':'application/json'
        }
    })
        .then(response => response.json())
        .then(tweet => dispatch({
                type: 'create-tweet',
                tweet
            })
        );
}

export const deleteTweet = (dispatch, tweet) => {
    console.log(tweet._id);
    fetch(`${TWEET_API}/${tweet._id}`, {
        method: 'DELETE'
    })
        .then(response => dispatch({
                type: 'delete-tweet',
                tweet
            })
        )
}

export const likeTweet = (dispatch, tweet) => {
    fetch(`${TWEET_API}/${tweet._id}/like`, {
        method: 'PUT'
    })
        .then(response => dispatch({
                type: 'like-tweet',
                tweet
            })
        )
}