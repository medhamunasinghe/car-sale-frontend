import React from "react"

const Table = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Model</th>
          <th scope="col">Mileage</th>
          <th scope="col">Colour</th>
          <th scope="col">Year of Register</th>
          <th scope="col">No. of Owners</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>NISSAN MARCH K12, 2002</td>
          <td>1,117,000km</td>
          <td>Silver</td>
          <td>2002</td>
          <td>4</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>TOYOTA AQUA G GRADE 2012</td>
          <td>81,000km</td>
          <td>Brown</td>
          <td>2012</td>
          <td>2</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>TOYOTA ALLION 260</td>
          <td>79,000km</td>
          <td>Black</td>
          <td>2007</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
