const WhoToFollowListItem = (who) => {
    return (`
    <a href="#" class="list-group-item list-group-item-action">
    <div class="row">
        <div class="col-2">
            <img class="profile-img" src="../../images/${who.avatarIcon}" alt=${who.userName}>
        </div>
        <div class="col-8">
            <span class="fw-bold">${who.userName}</span>
            <i class="fa fa-check-circle"></i>
            <div class="fw-light">@${who.handle}</div>
        </div>
        <div class="col-2">
            <button class="btn btn-primary rounded-pill float-end">
                Follow
            </button>
        </div>
    </div>
</a>


 `); }

export default WhoToFollowListItem;