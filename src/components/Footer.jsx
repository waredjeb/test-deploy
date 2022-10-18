import React from 'react'
import { Link } from 'react-scroll';
import cmslogo from '../images/cms-logo.png';
import cernlogo from '../images/cern-logo.png';
import bmbf from '../images/BMBF.png'
import rwth from '../images/rwth_logo.png'
function Footer() {
    return (
        <body>
            <div class="footer-dark" id='reference'>
                <div class="">
                    <div class="">
                        <h3>Authors</h3>
                        <ul>Marco Rovere<sup>1</sup>, Felice Pantaleo<sup>1</sup>, Abhirikshma Nandi<sup>2</sup>, Alexander Schmidt<sup>3</sup>, Wahid Redjeb<sup>1,2</sup></ul>
                        <ul>Shamik Ghosh<sup>5</sup>, Alessandro Tarabini<sup>5</sup>,Florian Beaudette<sup>5</sup>,  Alice Savona<sup>2</sup> </ul>
                        <ul>Benedikt Maier<sup>1</sup>, Soham Bhattacharya<sup>4</sup>, Ankush Reddy Kanuganti<sup>6</sup>, Kenichi Hatakeyama<sup>6</sup></ul>

                    </div>
                    {/* <div class="col-sm-6 col-md-3 item"> */}
                        <h3>References</h3>
                        <ul>
                            <li><a href="https://inspirehep.net/literature/1831593">[1] GPU-based Clustering Algorithm for the CMS High Granularity Calorimeter</a></li>
                            <li><a href="https://cds.cern.ch/record/2759072/">[2] The Phase-2 Upgrade of the CMS Data Acquisition and High Level Trigger</a></li>
                            <li><a href="#">[3]</a></li>
                        </ul>
                    {/* </div> */}
                    <div className='img-container-logo'>
                        <img src={cmslogo} alt='logo'></img>
                        <img src={cernlogo} alt='logo2'></img>
                        <img src={bmbf} alt=''></img>
                        <img src={rwth} alt=''></img>
                    </div>
                </div>
            </div>

        </body>
    )
}

export default Footer