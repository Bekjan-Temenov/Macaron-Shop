import React from 'react';
import './NotfauntComponent.scss';

const NotfauntComponent = () => {
  return (
    <div className="figure">
      <div className="mj">
        <div className="head">
          <div className="nose"></div>
          <div className="hair">
            <div className="ponytail">
              <div className="frontpony"></div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="jacket"></div>
          <div className="hand"></div>
          <div className="leg">
            <div className="foot"></div>
            <div className="leg lft">
              <div className="foot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="error-no">
        <span>4</span>
        <div className="moon">
        </div>
          <span className='ger'>4</span>
      </div>
    </div>
  );
};

export default NotfauntComponent;
