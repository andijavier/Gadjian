import React from 'react';

function PersonelCard({ item }) {
  return (
    <div className="card mx-1" style={{ width: '15vw' }}>
      <div className="row card-header justify-content-between">
        <div className="col-9 mt-2">
          <p style={{ float: 'left', fontSize: '12px'  }}>Personel ID: </p>
          <p style={{ float: 'right',
            fontSize: '12px',
            color: '#2940D3',
            fontWeight: 'bolder' }}>{item.id.value}</p>
        </div>
        <div className="col-3">
          <p  style={{ fontSize: '20px', fontWeight: 'bolder'}}>...</p>
        </div>
        <div className="col-12">
          <img
            src={item.picture.medium}
            style={{ border: '1px solid',
            borderRadius: 60,
            minHeight: '15vh',
            marginInline: '1.5vw', 
            minWidth: '8vw' }}
            alt="Photo"/>
        </div>
        <div className="col-12 mt-3">
          <p style={{ fontWeight: 'bolder', fontSize: '12px' }}>Name</p>
          <p style={{ fontSize: '12px' }}>{item.name.first} {item.name.last}</p>
          <p style={{ fontWeight: 'bolder', fontSize: '12px' }}>Telephone</p>
          <p style={{ fontSize: '12px' }}>{item.phone}</p>
          <p style={{ fontWeight: 'bolder', fontSize: '12px' }}>Birthday</p>
          <p style={{ fontSize: '12px' }}>{item.dob.date.split('T')[0].split('-')[2]}-{item.dob.date.split('T')[0].split('-')[1]}</p>
          <p style={{ fontWeight: 'bolder', fontSize: '12px' }}>Email</p>
          <p style={{ fontSize: '12px' }}>{item.email}</p>
        </div>
      </div>
    </div>
  )
}

export default PersonelCard