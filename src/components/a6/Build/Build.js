import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import PostSummaryItem from  "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
const Build = () => {
    return(
        <>
            <PostSummaryItem post={{
                "topic": "Web Development",
                "userName": "",
                "title": "jQuery",
                "time": "last week",
                "image": "../../../images/jquery.png",
                "tweets": "122K"
            }}/>
            <NavigationSidebar active="home"/>
            <WhoToFollowListItem/>
            <PostSummaryList/>
            <ExploreScreen/>
            </>
    );
}
export default Build;