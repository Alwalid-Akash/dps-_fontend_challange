import React from 'react';

// Define the component using React.FC (Functional Component)
const Read: React.FC = () => {
  return (
    <>
      <div className='scearchcontainer'>
        <div className="input-group name">
          <span className="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" className="form-control" />
          <input type="text" aria-label="Last name" className="form-control" />
        </div>



        <div className="input-group mb-3 option">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
          <select className="form-select" id="inputGroupSelect01">
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>


        <div className="form-check check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
            Indeterminate checkbox
          </label>
        </div>
      </div>

      <div className='showdata'>

        hii
      </div>
    </>

  );
};

export default Read;
