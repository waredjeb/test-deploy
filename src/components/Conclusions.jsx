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


function Conclusions() {
    return (
        <section class="section " id="conclusions">
            <div className='tile'>
                <h1>
                    Conclusions
                </h1>
                <div class="work__container_alone bd-grid">
                    <div>
                        <p class='about__text'>
                        The current version of the <b>TICL</b> framework applied on the HGCAL reconstruction consists in a novel Pattern Recognition that employs the <b>CLUE3D algorithm</b> and a new plugin system for
                        the <b>Linking task</b> for connecting CLUE3D tracksters together. It demonstrates <b>excellent performance</b> in reconstructing electromagnetic objects, even in pileup 200. The hadronic reconstruction requires 
                        some more efforts for achieveing optimal reconstruction performance. The <b>modularity</b> and <b>semplicity</b> of the TICL framework provides a fertile ground for developing <b> new algorithms</b> and
                        <b> machine learning</b> architectures. The future plan is to <b>extend</b> TICL to the <b>barrel</b> region of the CMS detector, to provide a <b>uniform Particle Flow framework</b> for the whole detector.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conclusions;