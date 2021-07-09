import React from 'react'
function PersonelList() {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h2>Personel List</h2>
          <p>List of all personnels</p>
        </div>
        <div className="my-3 col-5">
          <input placeholder="Find Personnels"></input>
          <button className="btn"
            style={{ backgroundColor: 'lightblue',
            color: 'white' }}
          >ADD PERSONNEL +</button>
        </div>
      </div>
    </>
  )
}

export default PersonelList