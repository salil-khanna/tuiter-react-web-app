const PostSummaryItem = (post) => {
    return(`
    <li href="#" class="list-group-item list-group-item-action">
        <div class="row">
            
            <div class="col-10">
                <div class="fw-light">${post.topic}</div>
                <div>
                    <span class="fw-bold">${post.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    <span class="fw-lighter"> - ${post.time}</span>
                </div>
                <div class="fw-bold">
                    ${post.title}
                </div>
                <div class="fw-light">
                    ${post.tweets}
                </div>
                
            </div>

            <div class="col-2">
                <img class="topic-img" src=${post.image} alt=${post.topic}>
            </div>

        </div>
    </li>
    `);
   }
export default PostSummaryItem;