import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
const TuitItem = (
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
 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuit(id));
 }
    
 return(
    <li className="list-group-item list-group-item-action">
    <div className="row">
        <div className="col-2">
            <img width={70} className="rounded-circle" alt="tuit" src={`../../images/${tuit.image}`}/>
        </div>
        <div className="col-10">
            <div>
                <span className="fw-bold">{tuit.userName} </span>
                <i className="bi bi-check-circle-fill"></i>
                <span className="fw-light"> {tuit.handle} </span>
                <span className="text-muted"> • {tuit.time}</span>
                <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <div>{tuit.tuit}</div>
            <TuitStats tuit={tuit}/>
        </div>
    </div>
</li>
 );
};
export default TuitItem;