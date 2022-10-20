import React from 'react';
import clue3d from '../images/clue3d-nobkg.png'
import purity from '../images/pur_vs_distance.png'
import merge from '../images/merge_vs_distance.png'
import eff from '../images/eff_vs_distance.png'

import purity200 from '../images/PurityVSPU_HD.png'
import eff200 from '../images/EfficiencyVSPU_HD.png'
import time from '../images/TimeVSPU_HD.png'

import chargedCand from '../images/charge_cand.png'
import neutralCand from '../images/neutral_cand.png'
import photons from '../images/phtons0PU200PU_vertical.png'
import pions from '../images/pions0PU200PU_vertical.png'
import linking from '../images/Linking_Visualization.png'


function Linking() {
  return (
    <section class="section " id="linking">
      <div className='tile'>
        <h1>
          Linking
        </h1>
        {/* <hr style="height:0.25rem;background-color:#4070F4;color:#4070F4;width:100px">  */}
        <div class="about__container">
          <div>
            <p class="about__text">
              The <b>Linking</b> step is foundamental for the Particle Flow reconstruction. CLUE3D is tuned to reconstruct extremely pure tracksters, at the price of splitting the shower in multiple energy clusters.
              The goal of the linking is to <b>connect the energy clusters</b> together, to reconstruct the full particle shower. <b>Exploiting links information to
                assign particle id</b>.
            </p>
          </div>
          <br></br>
          <h2>
            <u>Linking -</u>&nbsp; <u>Algorithm</u>
          </h2>
          <div>
            <center>
              <p class='about__text'>
                The linking targets <b>Tracks-to-Tracksters</b> and <b>Trackster-to-Tracksters</b> links for building <b>Charged Candidates</b> and <b>Neutral Candidates</b>
              </p>
            </center>
          </div>
          <br></br>
          <h3>
            Charged Candidates
          </h3>
          <div class="work__container bd-grid">
            <div>
              <p class='about__text'>
                <ul>
                  <li>Propagate Tracks to the first and to the last CE-E HGCAL layers</li>
                  <li>Propagate Tracksters to the first and to the last CE-E HGCAL layers</li>
                  <li>Geometric compatibility between Tracks and Tracksters at the first or last CE-E layer</li>
                  <li>Geometric compatibility between Tracksters at the last CE-E layer</li>
                  <li>Tracks without linked Tracksters are directly promoted to charged candidates</li>
                  <li>Depth First Search (DFS) approach</li>

                </ul>
                <br></br>
                Once a geometrical link is found, <b>Energy </b> and <b>Time</b> compatibility are performed. Linked Tracksters are added in the same final collection of <b>TICLCandidate</b>, as well as the eventual associated Track
              </p>
              <br></br>
            </div>
            <div class="about__img">
              {/* <hr></hr> */}
              <div class="row">
                <div class="column">
                  <img src={chargedCand} alt=""></img>
                </div>
                {/* <div class="column">
                  <img src={eff} alt=""></img>
                </div> */}
              </div>
            </div>
          </div>
          <hr></hr>
          <br></br>
          <h3>
            Neutral Candidates
          </h3>
          <div class="work__container bd-grid">
            <div>
              <p class='about__text'>
                For neutral candidate the Track linking is not performed
                <ul>
                  <li>Propagate Tracksters to the first and to the last CE-E HGCAL layers</li>
                  <li>Geometric compatibility between Tracksters at the last CE-E layer</li>
                  <li>Trackster without links are directly promoted to neutral candidates</li>
                  <li>Depth First Search (DFS) approach</li>
                </ul>
              </p>
            </div>
            <div class="">
              {/* <hr></hr> */}
              <div class="row">
                <div class="column">
                  <img src={neutralCand} className="" alt=""></img>
                </div>
                {/* <div class="column">
                  <img src={eff} alt=""></img>
                </div> */}
              </div>
            </div>
          </div>
          <hr></hr>
          <div class="work__container_alone">
            <div class="">
              {/* <hr></hr> */}
              <div class="row">
                <div class="column">
                  <img src={linking} className = 'merged-link' alt=""></img>
                  <figcaption><b>Fireworks event visualization</b>: CLUE3D Tracksters (left) Merged Tracksters obtained by the Linking procedure (Right)</figcaption>
                </div>
                {/* <div class="column">
                  <img src={eff} alt=""></img>
                </div> */}
              </div>
            </div>
          </div>
          <div>
            <br></br>
            <h2>
              <u>Linking - Physics Performance</u>
            </h2>
            <center>
              <p>
                Physics performance have been evaluated on Electromagnetic and Hadronic objects at 0 and 200 pileup.
              </p>
            </center>
          </div>
          <h3>
            Photon reconstruction
          </h3>
          <div class="work__container bd-grid">

            <p class='about__text'>
              <ul>
                <li><b>Excellent performance</b> in reconstructing electromagnetic objects</li>
                <li>For the whole energy range and calorimeter coverage</li>
                <li><b>Small impact of pileup</b> on the reconstruction efficiency</li>
                </ul>
            </p>
            <div class="">
              <div class="row">
                <div class="column">
                  <img src={photons} className="merged" alt=""></img>
                </div>
              </div>
            </div>
          </div>

          <h3>
            Pion reconstruction
          </h3>
          <div class="work__container bd-grid">

            <p class='about__text'>
              <ul>
                <li><b>Excellent performance</b> in 0PU</li>
                <li>Small efficiency drop at low energies</li>
                <li>Big impact of pileup on the reconstruction efficiency</li>
                <ul>
                <li>Especially in the high &eta; region, where the detector occupancy is much higher</li>
                </ul>
                </ul>
            </p>
            <div class="">
              <div class="row">
                <div class="column">
                  <img src={pions} className="merged" alt=""></img>
                </div>
              </div>
            </div>
          </div>

          <div class="work__container_alone">

            <p class='about__text'>
                Good performance in reconstructing electromagnetic and hadronic objects in 0 pileup. The linking algorithm requires some improvements, especially for dealing with high pileup. 
                <b> Machine Learning </b> methods, in particular <b>Graph Neural Networks</b>  can be exploited for this task, and they are currently under study and development.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Linking;