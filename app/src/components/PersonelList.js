import React from 'react'
import PersonelCard from './PersonelCard'
function PersonelList({ data, loading }) {
  return (
    <>
      {loading? <h3>Loading...</h3> :
        <div className="row">
          <div className="col-6">
            <h2>Personel List</h2>
            <p>List of all personnels</p>
          </div>
          <div className="my-3 col-6">
            <input placeholder="Find Personnels"></input>
            <button className="btn"
              style={{ backgroundColor: '#3F72AF',
              color: 'white' }}
            >ADD PERSONNEL <i class="fas fa-plus"></i></button>
          </div>
          <div style={{ display: 'flex'}}>
            {data?.map((item, i) => {
              return <PersonelCard key={item.id.value + i} item={item}/>
            })}
          </div>
        </div>}
    </>
  )
}

export default PersonelList