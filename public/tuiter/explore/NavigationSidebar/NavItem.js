const NavItem = (item) => {
    return(`
    <a href=${item.href} class="list-group-item list-group-item-action">
        <i class="fa fa-${item.icon}"></i>
        <span class="d-none d-xl-inline">${item.text}</span>
    </a>
    `);
   }
   export default NavItem;