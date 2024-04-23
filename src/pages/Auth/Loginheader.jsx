
const Loginheader = () => {
  return <div>     
      {/* <!--==============================
    Breadcumb
    ============================== --> */}
    <div className="breadcumb-wrapper d-flex" data-bg-src="assets/img/bg/breadcrumb-bg-1-1.jpg" style={{height:"180px",alignItems:"center"}}>
    
        {/* <!-- bg animated image/ -->    */}
        <div className="container justify-content-between ">
            <div className="row d-flex justify-content-start">
                    
    <ul className="breadcumb-menu d-flex justift-content-start mb-4">
                            {/* <li><a href="index.html">Ecofine</a></li> */}
                            <li><a href="donation.html">Home</a></li>
                            <li className="active">Register</li>
                        </ul>

            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Register</h1>
                       
                    </div>
                </div>
            </div>
            
        </div>
    </div></div>;
};

export default Loginheader;
