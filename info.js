import React from 'karet';
import * as R from 'ramda';
import * as P from 'prop-types';
import * as U from 'karet.util';

import css from './styles.css';

//

const toggle = atom => atom.modify(R.not);

//

const Info = ({ children, alignment = 'right', isHidden = U.atom(false) }) =>
  <div className={css.infoToolTipContainer}>
    <span className="opux-info-link opux-tooltip"
          onMouseOver={() => toggle(isHidden)}
          onMouseLeave={() => toggle(isHidden)} />
    <div className={U.cns('opux-tooltip-tip',
                          U.ift(isHidden, 'opux-is-visible'),
                          css.infoToolTip,
                          U.string`opux-tooltip-${alignment}`)}
          aria-hidden={U.seq(U.not(isHidden), U.toString)}
          role="tooltip"
          tabIndex="-1">
      <div className="opux-tooltip-tip-content">
        {children}
      </div>
    </div>
  </div>;

//

export default Info;
