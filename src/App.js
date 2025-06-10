import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-dark text-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {/* Main Headshot */}
            <img
              src="https://i.imgur.com/8v1J2VF.jpeg"
              alt="James Macapagal Headshot"
              className="img-fluid rounded-circle headshot my-4"
            />
            <h1 className="mb-4">James Macapagal</h1>

            {/* Links Section */}
            <div className="d-flex justify-content-center flex-wrap my-4">
              <a
                href="https://www.imdb.com/name/nm10395228/?ref_=ext_shr_lnk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg mx-2 mb-2"
              >
                IMDb
              </a>
              <a
                href="https://resumes.actorsaccess.com/jamesmacapagal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg mx-2 mb-2"
              >
                Actors Access
              </a>
              <a
                href="https://app.castingnetworks.com/talent/public-profile/e30288f0-f73e-11eb-b459-d1260cd4e210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary btn-lg mx-2 mb-2"
              >
                Casting Networks
              </a>
            </div>

            {/* Contact Information */}
            <div className="contact-info mt-5">
              <h4 className="text-info">Representation</h4>
              <p>Union: Heather at Grossman and Jack Talent</p>
              <p>Email: <a href="mailto:heathero@grossmanjack.com" className="text-light">heathero@grossmanjack.com</a></p>
              <p>Non-Union: Jaclyn at 10 MGMT</p>
              <p>Email: <a href="mailto:jaclyn@10mgmt.com" className="text-light">jaclyn@10mgmt.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
