import React from "react";
import Queen from '../Images/Queen.jpeg'
import maryann from "../Images/maryann.png"
import joy from "../Images/joy.jpg";
import lavyne from "../Images/lavyne.jpg";
import me from "../Images/me.jpeg";
import './Team.css'
const Team = () => {
    return (
        <div id="team">
            <h1>Our Team</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="profile">
                        <img src={joy} className="circle" width={300} height={300} />
                    </div>
                    <h4>Joy Wamaitha</h4>
                    <h4>Software Developer</h4>
                </div>

                <div className="col-md-4">
                    <div className="profile">
                        <img src={Queen} className="circle" width={300} height={300} />
                    </div>
                    <h4>Quienzy Ong'eye</h4>
                    <h4>Software Developer</h4>
                </div>

                <div className="col-md-4">
                    <div className="profile">
                        <img src={maryann} className="circle" width={300} height={300} />
                    </div>
                    <h4>Maryann Gathanga</h4>
                    <h4>Software Developer</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="profile">
                        <img src={me} className="circle" width={300} height={300} />
                    </div>
                    <h4>Salma Suleiman</h4>
                    <h4>UI/UX Designer</h4>
                </div>
                <div className="col-md-6">
                    <div className="profile">
                        <img src={lavyne} className="circle" width={300} height={300} />
                    </div>
                    <h4>Lavyne Owiti</h4>
                    <h4>Software Developer</h4>
                </div>
            </div>
        </div >
    );
}
export default Team;