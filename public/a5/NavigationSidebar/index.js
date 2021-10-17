const NavigationSidebar = (active) => {

    return (`
      <div class="list-group">
        <a class="list-group-item" href="#"><i class="fab fa-twitter"></i></a>
        <a id="home" href="../HomeScreen/index.html" class="list-group-item"><i class="fa fa-home"></i> Home</a>
        <a id="explore" href="../ExploreScreen/explore.html" class="list-group-item"><i class="fa fa-hashtag"></i> Explore</a>
        <a id="notification" href="#" class="list-group-item"><i class="fa fa-bell"></i> Notifications</a>
        <a id="messages" href="#" class="list-group-item"><i class="fa fa-envelope"></i> Messages</a>
        <a id="bookmarks" href="#" class="list-group-item"><i class="fa fa-bookmark"></i> Bookmarks</a>
        <a id="lists" href="#" class="list-group-item"><i class="fa fa-list"></i> Lists</a>
        <a id="profile" href="#" class="list-group-item"><i class="fa fa-user"></i> Profile</a>
        <a id="profile" href="#" class="list-group-item"><i class="fa fa-circle"></i> More</a>       
        <a id="profile" href="#" class="list-group-item"><i class="fa fa-circle"></i> More</a>       
            
          
        
        <button class="btn btn-primary rounded-pill w-100 mt-2">Tweet</button>
      </div>
        
  `)

}
export default NavigationSidebar;