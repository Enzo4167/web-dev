const PROFILE_API = 'https://node-enzo.herokuapp.com/api/profile';

export const fetchAllProfiles = (dispatch) => {
    // console.log('fetching profiles...');
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profiles =>
            dispatch({
                type: 'fetch-all-profiles',
                profiles
            })
        )
}

export const saveProfile = (dispatch, profile) => {
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'Content-Type':'application/json'
        }
    })
        .then(response => dispatch({
                type: 'save-profile',
                profile
            })
        )
}