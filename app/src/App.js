import React from 'react'
import PersonelList from './components/PersonelList'
function App() {
  return (
    <>
      <div className="container">
        <div className="row my-3 justify-content-between">
          <div className="col-8">
            <h3>Gadjian.com</h3>
          </div>
          <div className="col-2">
            <p>Hallo, Gadjian User</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h5>Beranda</h5>
            <h5>Personel List</h5>
            <h5>Daily Attendance</h5>
          </div>
          <div className="col-9" style={{backgroundColor: ''}}>
            <PersonelList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
