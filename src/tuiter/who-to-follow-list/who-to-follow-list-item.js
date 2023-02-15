import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
 }
) => {
 return(
  <li className="list-group-item list-group-item-action">
   <div className="row">
     <div className="col-2">
       <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt={who.userName}/>
     </div>
     <div className="col-8">
            <span class="fw-bold">{who.userName} </span>
            <i class="fa fa-check-circle"></i>
            <div class="fw-light">@{who.handle}</div>
     </div>
     <div className="col-2">
       <button className="btn btn-primary rounded-pill float-end">Follow</button>
     </div>
   </div>
  </li>
 );
};
export default WhoToFollowListItem;