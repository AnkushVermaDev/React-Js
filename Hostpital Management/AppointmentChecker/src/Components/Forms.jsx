import React, { useState } from 'react';
import DataFetching from './DataFetching';

const Forms = () => {
  const [userinfo, setUserinfo] = useState({});
  const [showData, setShowData] = useState(false);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserinfo(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowData(true);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className='PatientDisease'
            placeholder='Enter Disease'
            name='disease'
            value={userinfo.disease || ""}
            onChange={handleChange}
          />

          <input
            type="number"
            id="doctorExperience"
            placeholder='Doctor Experience'
            name='experience'
            value={userinfo.experience || ""}
            onChange={handleChange}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>

      {showData && <DataFetching prop={userinfo} />}
    </>
  );
};

export default Forms;
