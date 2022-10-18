import React from 'react';
import clue3d from '../images/clue3d-nobkg.png'
import purity from '../images/pur_vs_distance.png'
import merge from '../images/merge_vs_distance.png'
import eff from '../images/eff_vs_distance.png'

import purity200 from '../images/PurityVSPU_HD.png'
import eff200 from '../images/EfficiencyVSPU_HD.png'
import time from '../images/TimeVSPU_HD.png'
function CLUE3D() {
  return (
    <section class="section " id="clue3d">
      <div className='tile'>
      <div className='img-clue3d'>
        <img src={clue3d}></img>
      </div>
      {/* <hr style="height:0.25rem;background-color:#4070F4;color:#4070F4;width:100px">  */}
      <div class="about__container">
        <div>
          <p class="about__text">
            <b>CLUE3D</b> is the current Pattern Recognition algorithm used for building Tracksters. It is based on CLUE, but instead of being applied on the rechits
            it clusters 2D Layer Clusters, considering also the third longitudinal dimension.
          </p>
        </div>
        <h2>
          <u>CLUE3D -</u>&nbsp; <u>Physics</u>&nbsp; <u>Performance</u>
        </h2>
        <div>
        <center>
          <p class='about__text'>
            Physics Performance compared to the previous Pattern Recognition Algorithm (Cellular Automaton (CA))<sup>[2]</sup><br></br><br></br>
          </p>
          </center>
        </div>
        <h2>
              0PU
        </h2>
        <div class="work__container bd-grid">
          <div>
            <p class='about__text'>
              Results for two photons of 50GeV produced at the HGCAL front face in <b>0 pileup</b>.
              <ul>
                <li>Excellent reconstruction efficiency</li>
                <li>Excellent trackster purity rate</li>
                <ul>
                  <li>When the two showers are resolved</li>
                </ul>
                <li>Better shower resolution power with respect to CA</li>
              </ul>
            </p>
          </div>
          <div class="about__img">
            {/* <hr></hr> */}
            <div class="row">
              <div class="column">
                <img src={purity} alt=""></img>
              </div>
              <div class="column">
                <img src={eff} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <h2>
              200PU
        </h2>
        <div class="work__container bd-grid">
          <div>
            <br></br>
            <p class='about__text'>
              Results for two photons of 50GeV produced at the HGCAL front face in <b>200 pileup</b>, separated by 4cm.
              <ul>
                <li><b>Zero impact</b> from pileup on the reconstruction efficiency for CLUE3D</li>
                <li><b>Zero impact</b> from pileup on the reconstruction purity for CLUE3D</li>
              </ul>
            </p>
          </div>

          <div class="about__img">
            {/* <hr></hr> */}
            <div class="row">
              <div class="column">
                <img src={purity200} alt=""></img>
              </div>
              <div class="column">
                <img src={eff200} alt=""></img>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr></hr>
          <br></br>
          <h2>
            CLUE3D - Timing Performance
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

export default CLUE3D;