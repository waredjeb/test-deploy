import React from 'react';
import clue3d from '../images/clue3d-nobkg.png'
function CLUE3D() {
  return (
    <div class="about section" id="ticl">
        <div className='img-clue3d'>
          <img src = {clue3d}></img>
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
          Components
        </h2>
        <div class="work__container bd-grid">
          <div>
            <p class='about__text'>
              <h3>
                CLUE - Layer Clusters
              </h3>
              <b>CLUE<sup>[1]</sup></b> (Clustering of Energy) is an energy-density based clustering for clustering rechits, on each HGCAL layers, and produce
              2D clusters (Layer Clusters)
              <ul>
                <li>Energy density based</li>
                <li>Reduces problem size of one order of magnitude</li>
                <li>Highly Parallelizable</li>
                <ul>
                  <li>Already on GPU</li>
                </ul>
              </ul>
            </p>
          </div>
          <div class="about__img">
            <img src={""} alt=""></img>
          </div>
        </div>


        <div class="work__container bd-grid">
          <div>
            <p class='about__text'>
              <h3>
                Pattern Recognition - Tracksters
              </h3>
              The Pattern Recognition module  is the core of the TICL framework and aims to reconstruct the 3D objects (Particle Showers) starting from the 2D Layer
              Clusters obtained by CLUE.
              <ul>
                <li>Creates Direct Acyclic Graphs connecting 2D LCs: <b>Tracksters</b></li>
                <li>Follows energy flow to connect LCs together</li>
                <li>Current Pattern Recognition algorithm: <b>CLUE-3D</b></li>
              </ul>
            </p>
          </div>
          <div class="about__img">
            <figure>
            <img src={""} alt=""></img>
            <figcaption><b>Figure</b> :400 GeV Photon Trackster</figcaption>
            </figure>
          </div>
        </div>

        <div class="work__container bd-grid">
          <div>
            <p class='about__text'>
              <h3>
                Particle Flow Interpretation - TICLCandidate
              </h3>
              The final step is the Particle Flow reconstruction and interpretation, where, starting from the Tracksters produced by the Pattern Recognition,
              information are gathered and combined for building the final objects that contain the particles information.
              <ul>
                <li><b>Linking Algorithm</b> for connecting CLUE3D Tracksters, originated from the same particle, together</li>
                <li><b>Linking Algorithm</b> for connecting CLUE3D Tracksters with Tracks</li>
                <li>Particle ID assignment and energy regression based on the shower properties and the association with tracks</li>
                <li>Building the final TICLCandidate with all the informations</li>            
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CLUE3D;