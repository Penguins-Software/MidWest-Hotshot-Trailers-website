export const ContactComponent = () => {

    return (
        <div id='contact' >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Contact Us</h1>
                        <p className="lead text-center">
                            If you have any questions, please feel free to contact us, our customer service center is working for you 24/7.
                        </p>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.81601194858!2d72.81805611582844!3d19.1159058791479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b2c7b5f5b5f5%3A0x5f5e8d8f8c8d0e0!2sFayetteville+Arkansas!5e0!3m2!1sen!2sin!4v1574396909876!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen=""></iframe>
                    </div>
                    <div className="col-md-4">
                        <h2>Contact Details</h2>
                        <p>
                            <strong>Company Name</strong>
                        </p>
                        <p>
                            <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Address</p>
                        <p>
                            <i className="fa fa-phone"></i>&nbsp;&nbsp;Phone</p>
                        <p>
                            <i className="fa fa-envelope"></i>&nbsp;&nbsp;Email</p>
                    </div>
                </div>

            </div>
        </div>
    )

}