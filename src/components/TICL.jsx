import React from 'react'
import purity from '../images/dummy.png'
import purity2 from '../images/pur_vs_distance.png'
import lc from '../images/LC.png'
import lcs from '../images/lcs.png'
import trackster from '../images/dag_trackster.png'
import ticl from '../images/TICL-nobkg.png'
import ticlcand from '../images/ticlCandidate-nobkg.png'
import clue from '../images/CLUE-procedure.png'


function TICL() {


  return (
    <section class="section " id="ticl">
      <div className='tile'>

        <h1>
          TICL
        </h1>
        {/* <hr style="height:0.25rem;background-color:#4070F4;color:#4070F4;width:100px"> </hr> */}

        <div>
          <div>
            <p class="about__text">
              <b>TICL</b> (<b>T</b>he <b>I</b>terative <b>CL</b>stering) is a <b>modular</b> framework developed within the CMS software (CMSSW), and it is
              the candidate for the new Particle Flow (PF) framework for the CMS Phase-2 reconstruction.
              {/* TICL has been developed to identify particles and reconstruct their properties, starting from the rechits left by the particles interaction, up to the Particle Flow reconstruction and interpretation. <br></br>
                All the TICL's modules are designed such that new algorithms or techniques (e.g. Machine Learning) can be plugged in easily, providing a fertile ground
                for developing new algorithms and Machine Learning architectures. */}
            </p>
          </div>
        </div>
        <div class="about__img">
          <img src={ticl} alt=""></img>
        </div>
        <h2>
          <u>TICL</u>&nbsp; <u>Components</u>
        </h2>
        < div class="work__container bd-grid" >
          <div>
            <p class='about__text'>
              <h3>
                <u>CLUE</u>&nbsp; - &nbsp;<u>Layer</u> &nbsp;<u>Clusters</u>
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
          <div class="work__img">
            {/* <figure> */}
            <img src={lcs} alt=""></img>
            <figcaption><b>Figure</b>: Example of two Layer Clusters built by CLUE</figcaption>

            <img src={clue} className = 'clue-img' alt=""></img>
            <figcaption><b>Figure</b>: Example of two Layer Clusters built by CLUE</figcaption>
            {/* </figure> */}
          </div>
        </div >
        <hr></hr>
        <div class="work__container bd-grid">
          <div>
            <p class='about__text'>
              <h3>
                <u>Pattern</u>&nbsp; <u>Recognition</u>&nbsp; -&nbsp; <u>Tracksters</u>
              </h3>
              The <b>Pattern Recognition</b> module  is the core of the TICL framework and aims to reconstruct the 3D objects (Particle Showers) starting from the 2D Layer
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
              <img src={trackster} alt=""></img>
              <figcaption><b>Figure</b> :400 GeV Photon Trackster, each disk corresponds to a Layer Cluster</figcaption>
            </figure>
          </div>
        </div>

        <hr></hr>
      <div class="work__container_alone bd-grid">
        <div>
          <p class='about__text'>
            <h3>
              <u>Particle</u>&nbsp; <u>Flow</u>&nbsp; <u>Interpretation</u> &nbsp;- &nbsp;<u>TICLCandidate</u>
            </h3>
            The final step is the <b>Particle Flow reconstruction and interpretation</b>, where, starting from the Tracksters produced by the Pattern Recognition,
            information are gathered and combined for building the final objects that contain the particles information.
            <ul>
              <li><b>Linking Algorithm</b> for connecting CLUE3D Tracksters, originated from the same particle, together</li>
              <li><b>Linking Algorithm</b> for connecting CLUE3D Tracksters with Tracks</li>
              <li><b>Particle ID assignment and energy regression</b> based on the shower properties and the association with tracks</li>
              <li>Building the final <b>TICLCandidate</b> with all the informations</li>
            </ul>
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default TICL



