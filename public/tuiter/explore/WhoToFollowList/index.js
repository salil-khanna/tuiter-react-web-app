import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
   return (`
           <ul class="list-group">
                <li class="list-group-item">
                        <h6><b>Who to follow</b></h6>
                </li>
                ${who.map(WhoToFollowListItem).join("")}
           </ul>
`); }

export default WhoToFollowList;