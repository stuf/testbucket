import React from 'karet';
import * as U from 'karet.util';
import * as P from 'prop-types';

//

const icons = {
  notification: 'alert',
  success: 'check',
  error: 'error'
};

const iconFor = type => U.view(type, icons);

//

const Alert = ({ children, type = 'notification' }) =>
  <div role="alert"
       className={U.cns(alertClass, U.string`opux-alert-${type}`)}>
    {U.ift(type,
           <div className="opux-alert-icon">
             <i className={U.cns('opux-icon', U.string`opux-icon-${iconFor(type)}`)} />
           </div>)}
    <div className="opux-alert-body">
      {children}
    </div>
  </div>;

//

export default Alert;
