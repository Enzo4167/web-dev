//const WHO_API = "https://node-enzo.herokuapp.com/api/whoToFollow";
const WHO_API = 'http://localhost:4000/api/who';
export const fetchAllWho = (dispatch) => {
    console.log('A9 fetch from server for who...')
    fetch(WHO_API)
        .then(response => response.json())
        .then(whos =>
            dispatch({
                type: 'fetch-all-whos',
                whos
            })
        )
}

export default {
    fetchAllWho
}