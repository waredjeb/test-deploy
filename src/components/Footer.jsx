import React from 'react'

function Footer() {
  return (
<body>
    <div class="footer-dark" id='reference'>
        <footer>
            <div class="container">
                <div class="">
                    <div class="">
                        <h3>Authors</h3>
                        <ul>    
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>References</h3>
                        <ul>
                            <li><a href="#">[1]</a></li>
                            <li><a href="#">[2]</a></li>
                            <li><a href="#">[3]</a></li>
                        </ul>
                    </div>
                </div>
                {/* <p class="copyright">Company Name © 2018</p> */}
            </div>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
</body>
  )
}

export default Footer