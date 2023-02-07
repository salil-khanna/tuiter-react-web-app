import NavItem from "./NavItem.js";

const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i>
        </a>
        ${NavItem({href: "/index.html", icon: "hashtag", text: "Explore"})}
        ${NavItem({href: "#", icon: "bell", text: "Notifications"})}
        ${NavItem({href: "#", icon: "envelope", text: "Messages"})}
        ${NavItem({href: "../bookmarks/index.html", icon: "bookmark", text: "Bookmarks"})}
        ${NavItem({href: "#", icon: "list", text: "Lists"})}
        ${NavItem({href: "#", icon: "user", text: "Profile"})}
        ${NavItem({href: "#", icon: "ellipsis-h", text: "More"})}
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
export default NavigationSidebar;