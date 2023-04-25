import React from "react";

const Team = () => {
    return (
    <React.StrictMode>
        <div id="team">
            <h1>Brain Gain 2023 Team</h1>   
            <div class="team-member">
                <img src="assets/img/person_2.jpg" alt="John Doe"></img>
                <div>
                    <h3>Alex Chen</h3>
                    <p>President</p>
                </div>
            </div>

            <div class="team-member">
                <img src="assets/img/person_3.jpg" alt="Jane Smith"></img>
                <div>
                    <h3>Gordon Wu</h3>
                    <p>Chief Technology Officer</p>
                </div>
            </div>

        </div>
    </React.StrictMode>
        
    );
}

export default Team;