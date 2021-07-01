import React from 'react';
import Schedule from '../../assets/img/bounty/eventschedule.png';
const infobountypage = () => {
  const rules = [
    'All users must join the ARCHIDAX Telegram Community. You must remain in groups until the end of the bounty to qualify for rewards. Note that all questions, queries, and support requests should be asked in the community group.',
    'One account per person, anybody caught farming the campaign, spamming, botting, or cheating the campaign in any way will be rejected. We reserve the right to reject any applicant for any reason.',
    'The Archidax Campaign team reserve the right to edit rules, token allocation, structure, and bounty allocation if necessary.',
    'The Archidax Campaign team reserve the right to reject any applicant for any reason if they suspect they might produce negative advertising for the project.',
    'Do not quote your previous reports, you must create a new report every week, do not edit old reports as we will not check these ARCHIDAX.',
  ];
  return (
    <div className="container  mb-5">
      <div className="d-flex  my-5">
        <div className="icon-schedule rounded-circle align-items-center">
          <img src={Schedule} alt="" width="40" className="img-center" />
        </div>
        <div className="card card-style bg-transparent mr-4 px-5 py-3">
          <h6>SCHEDULE</h6>
          <div className="d-flex align-items-center text-center">
            <p className="mr-5">Week 1</p>
            <p className="text-bold">June 27 - July 24 ,2021</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mr-5">Week 2</p>
            <p className="text-bold">July 05 - July 11 ,2021</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mr-5">Week 3</p>
            <p className="text-bold">June 27 - July 24 ,2021</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mr-5">Week 4</p>
            <p className="text-bold">June 27 - July 24 ,2021</p>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="v1 mr-3"></div>
          <p>
            <b>NOTE :</b> especially for the first week, we give an exception
            that you can do the campaign process the same as the other weeks.
            <br />
            <br />
            with the provisions, we provide for each post on both Twitter and
            Facebook a maximum of 3 times in 1 day.
            <br />
            <br />
            <b>
              To get the Rewards All participant Must register and KYC on
              Archidax Exchange.
            </b>
          </p>
        </div>
      </div>

      <ol type="A">
        {rules.map((item, index) => {
          return (
            <li key={index} className="mb-3">
              {`  ${item}`}{' '}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default infobountypage;
