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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nostrum expedita consectetur, omnis possimus dolor tempore. Numquam praesentium unde explicabo libero autem nisi eveniet, repudiandae minima voluptate maiores cum fugiat?
              </p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nostrum expedita consectetur, omnis possimus dolor tempore. Numquam praesentium unde explicabo libero autem nisi eveniet, repudiandae minima voluptate maiores cum fugiat?
              </p>
            </div>
            <div class="about__img">
              {/* <hr></hr> */}
              <div class="row">
                <div class="column">
                  <img src={neutralCand} alt=""></img>
                </div>
                {/* <div class="column">
                  <img src={eff} alt=""></img>
                </div> */}
              </div>
            </div>
          </div>
          <hr></hr>
          <div>
            <br></br>
            <h2>
              <u>Linking - Physics Performance</u>
            </h2>
            <center>
              <p>
                Timing performance obtained executing the reconstruction on Single core CPU, on a pileup 200 sample
              </p>
            </center>
          </div>
          <div class="work__container bd-grid">
            <p class='about__text'>
              <ul>
                <li>CLUE3D <b>scales better</b> than the CA</li>
                <ul>
                  Almost 1.8 faster at 200 PU!
                </ul>
                <li>CLUE3D takes <b>only 1% of the current CMS offline reconstruction</b></li>
                <li>CLUE is already ported on GPU</li>
                <ul>
                  <li>CLUE3D has been developed with <b>heterogeneous computing in mind</b></li>
                  <li>CLUE3D version on GPU expected very soon</li>
                  <li>Offloading the computation on the GPU will improve timing performance</li>
                </ul>
              </ul>
            </p>
            <div class="about__img">
              <div class="row">
                <div class="column1">
                  <img src={time} className="timing" alt=""></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Linking;