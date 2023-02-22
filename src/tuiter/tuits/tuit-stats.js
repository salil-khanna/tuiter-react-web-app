import React, {useState} from "react";
import './index.css'

const TuitStats = (
    {
        tuit =   {
            "_id": 123,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",
            "image": "tesla.png",
            "liked": false,
            "replies": 20,
            "retuits": 1000,
            "likes": 350000,
            "handle": "@spacex",
            "tuit": "We going vroom vroom baby nothing to stop us now, the gravity of earth is nothing compared to here on mars."
        }
    }

) => {
    const [liked, setLiked] = useState(tuit.liked);
    const [likes, setLikes] = useState(tuit.likes);

    return(
        <div className="row mt-2">
            <div className="col-3">
                <i className='bi bi-chat-left-text'/>
                <span className="fw-light"> {tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"/>
                <span className="fw-light"> {tuit.retuits}</span>
            </div>
            <div className="col-3">
            <i className={`${liked ? 'fa fa-heart redColor' : 'bi bi-heart '}`}
                   onClick={() => {
                       setLiked(!liked);
                       setLikes(liked ? likes - 1 : likes + 1);
                   }}/>
                <span className="fw-light"> {likes}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-share"/>
            </div>
        </div>
    );

}

export default TuitStats;