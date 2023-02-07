import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row mb-2">
            <div class="position-relative col-11">
                <input type="text" class="form-control form-control-lg rounded-pill ps-5" placeholder="Search Twitter"
                    aria-label="Search" aria-describedby="basic-addon2" />
                <span class="position-absolute search">
                    <i class="fa fa-search"></i></span>
            </div>
            <a class="mt-2 col-1" href="#">
                <i class="fa fa-cog fa-2x" style="color: rgb(0, 131, 253)"></i>
            </a>
        </div>
        <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-inline">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
        </ul>
        
        <div class="position-relative">
            <img src="../../images/starship.png" alt="Starship" width="100%">
            <h1 class="position-absolute bottom-0 text-white m-1"> SpaceX's Starship</h1>
         </div>

         ${PostSummaryList()}

    `);
}
export default ExploreComponent;
