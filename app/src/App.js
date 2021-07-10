import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PersonelList from './components/PersonelList'
import Pagination from './components/Pagination'
import { fetchData } from './store/action'

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data)
  const loading = useSelector(state => state.loading)
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage] = useState(4)

  useEffect(() => {
    dispatch(fetchData())
  }, [])
  
  const idxOfLastData = currentPage * dataPerPage
  const idxOfFirstData = idxOfLastData - dataPerPage
  const currentData = data.slice(idxOfFirstData, idxOfLastData)
  
  console.log(currentData);
  
  function paginate(action) {
    setCurrentPage(currentPage + action)
  }

  return (
    <>
      <div className="container">
        <div className="row my-3 justify-content-between">
          <div className="col-8">
            <img
              style={{ width: "10vw" }}
              src={"https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e196fd5534bec8a1696b426156b889d3.png"}/>
          </div>
          <div className="col-2">
            <p>Hallo, Gadjian User</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <h5 className="my-4">
              <i class="fas fa-home"></i> Beranda</h5>
            <h5 className="my-4"
              style={{ color: '#3F72AF'}}>
                <i class="fas fa-users"></i> Personel List</h5>
            <h5 className="my-4">
              <i class="far fa-calendar-alt"></i> Daily Attendance</h5>
          </div>
          <div className="col-9">
            <PersonelList data={currentData} loading={loading}/>
            <Pagination
              paginate={paginate}
              totalData={data.length}
              dataPerPage={dataPerPage}
              currentPage={currentPage}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
