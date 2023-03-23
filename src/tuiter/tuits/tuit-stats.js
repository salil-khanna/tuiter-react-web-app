import React from "react";
import './index.css'
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

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
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "We going vroom vroom baby nothing to stop us now, the gravity of earth is nothing compared to here on mars."
        }
    }

) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-2">
            <div className="col-2">
                <i className='bi bi-chat-left-text'/>
                <span className="fw-light"> {tuit.replies}</span>
            </div>
            <div className="col-2">
                <i className="bi bi-arrow-repeat"/>
                <span className="fw-light"> {tuit.retuits}</span>
            </div>
            <div className="col-3">
                Likes: {tuit.likes} 
                <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-1 text-danger"></i>
            </div>
            <div className="col-3">
                Dislikes: {tuit.dislikes} 
                <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down me-1 text-danger"></i>
            </div>
            <div className="col-1">
                <i className="bi bi-share"/>
            </div>
        </div>
    );

}

export default TuitStats;