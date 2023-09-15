import TeamMember1 from "../teamMembers/TeamMember1";
import TeamMember2 from "../teamMembers/TeamMember2";
import TeamMember3 from "../teamMembers/TeamMember3";

const OurTeam = () => {
    return (
        <div className="ourTeams sm:h-screen pt-32 pb-20 sm:pt-52 w-screen" id="ourTeam">
            <div className="team text-center">
                <h2 className="font-semibold text-xl ">Our Team</h2>
                <p className="text-lg">We introduce our Expert Team</p>
            </div>
            <div className="team-members sm:flex grid ">
               <TeamMember1/>
               <TeamMember2/>
               <TeamMember3/>
            
            </div>
        </div>
    );
}

export default OurTeam;
