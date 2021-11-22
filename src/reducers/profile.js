import profilesData from './data/profileData.json'

const profile = (state = profilesData, action) => {
    switch (action.type) {
        case 'fetch-all-profiles':
            console.log('entering fetch-all-profiles, action.profiles: ', action.profiles)
            console.log('state.profile:', state);
            return (
                action.profiles
            )
        case 'save-profile':
            return (
                action.profile
            )
        case 'exit-profile':
            break;
        default:
            return(state);
    }
};

export default profile;