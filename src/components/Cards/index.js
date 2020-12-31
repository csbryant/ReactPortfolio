import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import ArtistHop from "../../Images/artisthop.jpg";
import Voter from "../../Images/voter.jpg";
import Burger from "../../Images/burger.jpg";
import Team from "../../Images/team.jpg";
import Schedule from "../../Images/Scheduleclip.png";
import ReadMe from "../../Images/readmegenclip.png";
import News from "../../Images/newscycle.png"


function Cards() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/ArtistHop">
              <div className="img-wrapper">
                <img className="card-img-top" src={ArtistHop} alt="Artist Hop" />
              </div>
              <CardItem
                title="Artist Hop"
                text="Music Reference Site"
              />
            </a></div>
        </div>
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/VoterCheatSheet">
              <div className="img-wrapper">
                <img className="card-img-top" src={Voter} alt="Voter Cheat Sheet" />
              </div>
              <CardItem
                title="Voter Cheat Sheet"
                text="Voting Data App"
              />
            </a></div>
        </div>
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/NewsCycle">
              <div className="img-wrapper">
                <img className="card-img-top" src={News} alt="NewsCycle" />
              </div>
              <CardItem
                title="NewsCycle"
                text="A React/MongoDB App"
              />
            </a></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/ReadMeGenerator">
              <div className="img-wrapper">
                <img className="card-img-top" src={ReadMe} alt="Read Me Generator" />
              </div>
              <CardItem
                title="Read Me Generator"
                text="Read Me Node CLI"
              />
            </a></div>
        </div>
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/Burger">
              <div className="img-wrapper">
                <img className="card-img-top" src={Burger} alt="Burger App" />
              </div>
              <CardItem
                title="Burger!"
                text="A retro themed burger-eating app"
              />
            </a></div>
        </div>
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/TeamProfileGen">
              <div className="img-wrapper">
                <img className="card-img-top" src={Team} alt="Team Profile Gen" />
              </div>
              <CardItem
                title="Team Profile Generator!"
                text="A node CLI that creates HTML"
              />
            </a></div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>

  );
}

export default Cards;