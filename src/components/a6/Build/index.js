import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
const Build = () => {
    return(
        <>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem who={{
                avatarIcon: '../../../images/virgin.png',
                userName: 'Virgin Galactic',
                handle: 'virgingalactic',
            }}/>
        </>
    )
};
export default Build;