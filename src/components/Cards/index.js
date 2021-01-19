import React from 'react';
import './Cards.css';
import CardItem from '../CardItem';
import ArtistHop from "../../Images/artisthop.jpg";
import Voter from "../../Images/voter.jpg";
import Burger from "../../Images/burger.jpg";
import Team from "../../Images/team.jpg";
import ReadMe from "../../Images/readmegenclip.png";
import News from "../../Images/newscycle.png"


function Cards() {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/NewsCycle">
              <div className="img-wrapper">
                <img className="card-img-top" src={News} alt="NewsCycle" />
              </div>
              <CardItem
                title="NewsCycle"
                text="An app designed to give you the fastest and easiest way to learn today's top news stories created with React, SASS, Node, and MongoDB. [UN: Guest/ PW: Guest]"
              />
              <a className="link-muted" href="https://fathomless-scrubland-72060.herokuapp.com/">Deployed App</a> <br></br>
            </a></div>
        </div>
        <div className="col-md">
          <div className="cs-grid-item">
            <a className="card border-0 box-shadow" href="https://github.com/csbryant/ArtistHop">
              <div className="img-wrapper">
                <img className="card-img-top" src={ArtistHop} alt="Artist Hop" />
              </div>
              <CardItem
                title="Artist Hop"
                text="A web application that helps you discover new music based on your music tastes using JQueery, Foundation, HTML5, and CSS. [UN: Guest/ PW: Guest]"
              />
              <a className="link-muted" href="https://csbryant.github.io/ArtistHop/">Deployed App</a> <br></br>
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
                text="An app that displays the latest election information and tracks user voter data created with Node, MySQL, Express, and Bootstrap. [UN: Guest/ PW: Guest]"
              />
              <a className="link-muted" href="https://afternoon-peak-23794.herokuapp.com/">Deployed App</a> <br></br>
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