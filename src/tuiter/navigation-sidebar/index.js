import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
 return (
   <div className="list-group">
     <a className="list-group-item" href="/tuiter">
      <i className="bi bi-twitter"></i>
     </a>
     <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href="/tuiter">
       <i className="fa fa-home"></i> <span className="d-none d-xl-inline">Home</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href="/tuiter">
       <i className="fa fa-hashtag"></i> <span className="d-none d-xl-inline">Explore</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href="/tuiter">
       <i className="fa fa-bell"></i> <span className="d-none d-xl-inline">Notifications</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href="/tuiter">
       <i className="fa fa-envelope"></i> <span className="d-none d-xl-inline">Message</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`} href="/tuiter">
       <i className="fa fa-bookmark"></i> <span className="d-none d-xl-inline">Bookmarks</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href="/tuiter">
       <i className="fa fa-list"></i> <span className="d-none d-xl-inline">Lists</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href="/tuiter">
       <i className="fa fa-user"></i> <span className="d-none d-xl-inline">Profile</span> 
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href="/tuiter">
       <i className="fa fa-ellipsis-h"></i> <span className="d-none d-xl-inline">More</span> 
     </a>
   </div>
 );
};
export default NavigationSidebar;