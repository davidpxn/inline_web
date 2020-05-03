import React from 'react';

import ButtonCall from '../../components/buttonCall/ButtonCall';
import TextboxCall from '../../components/textboxCall/TextboxCall';

import { ReactComponent as IconNext } from '../../svg/next.svg';
import { ReactComponent as IconDone } from '../../svg/check.svg';
import { ReactComponent as IconSkip } from '../../svg/skip.svg';

import './Caller.scss';


function Caller() {
  return (
    <div className="caller">
      <TextboxCall
        title="next ticket"
        text="002"
        color="#adadad"
      />
      <ButtonCall
        text="next"
        icon={<IconNext />}
        color="#4569e0"
        loading={false}
        handleClick={null}
      />
      <TextboxCall
        title="current ticket"
        text="002"
        subtext="00:06:24"
        color="#000000"
        textColor="#ffffff"
      />
      <ButtonCall
        text="done"
        subtext="4"
        icon={<IconDone />}
        color="#44b842"
        loading={false}
        handleClick={null}
      />
      <ButtonCall
        text="skip"
        subtext="3"
        icon={<IconSkip />}
        color="#e84b45"
        loading={false}
        handleClick={null}
      />
      <TextboxCall
        title="waiting"
        text="6"
        color="#dbdbdb"
      />
    </div>
  );
}


export default Caller;
