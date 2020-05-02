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
        color="#BDBDBD"
      />
      <ButtonCall
        text="next"
        icon={<IconNext />}
        color="#0099E5"
        loading={false}
        handleClick={null}
      />
      <TextboxCall
        title="current ticket"
        text="002"
        subtext="00:06:24"
        color="#010527"
        textColor="#ffffff"
      />
      <ButtonCall
        text="done"
        subtext="4"
        icon={<IconDone />}
        color="#34BF49"
        loading={false}
        handleClick={null}
      />
      <ButtonCall
        text="skip"
        subtext="3"
        icon={<IconSkip />}
        color="#FF4C4C"
        loading={false}
        handleClick={null}
      />
      <TextboxCall
        title="waiting"
        text="6"
        color="#E9E9E9"
      />
    </div>
  );
}


export default Caller;
