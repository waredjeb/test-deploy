import React from 'react'

function Introduction() {
  return (
    <div class="about section" id="introduction">
      <div className='tile'>
      <h1>
        Introduction
      </h1>
      {/* <hr style="height:0.25rem;background-color:#4070F4;color:#4070F4;width:100px">  */}
      <div class="about__container">

      <p class="about__text">
          To sustain the harsher conditions of the high-luminosity LHC, the CMS Collaboration is designing a <b>novel endcap calorimeter</b> system.
          The new calorimeter will use silicon sensors and scintillators achieving <b>highly granular information </b> 
          the CMS Software CMSSW to fully exploit the granularity and other significant detector features, such as particle identification and precision timing,
          with a view to mitigating pile up in the very dense environment of HL-LHC, and, for these reasons, TICL is the candidate for the new <b>Particle Flow (PF)</b> framework for the CMS Phase-2 reconstruction.
           The TICL framework has been thought of with <b>heterogeneous computing</b> in mind:  the algorithms and their data structures are designed to be executed on GPUs.
          TICL allows the composition of different combinations of modules that can be chained together in an iterative fashion. <br></br>
          
          </p>
      </div>
      {/* </div> */}
    </div>
    </div>
  )
}

export default Introduction