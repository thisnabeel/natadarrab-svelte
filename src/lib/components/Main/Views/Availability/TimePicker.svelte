import React, { useState, useEffect } from 'react';
import API from "$lib/api/api";
import moment from "moment";

const TimePicker = ({ slot, removeSlot, day }) => {
  const [startTimes, setStartTimes] = useState([]);
  const [endTimes, setEndTimes] = useState([]);

  useEffect(() => {
    const getIncrements = () => {
      const startMoment = moment("00:00", "hh:mm");
      const increments = [];

      for (let i = 0; i < 48; i++) {
        const currentIncrement = moment(startMoment);
        increments.push(currentIncrement);
        startMoment.add(30, 'minutes');
      }

      return increments.map(momentObject => ({
        clean: momentObject.format('h:mm a'),
        raw: momentObject.toDate(),
      }));
    };

    setStartTimes(getIncrements());
    setEndTimes(getIncrements());
  }, []);

  const toggleStartTimes = () => {
    if (startTimes.length > 0) {
      setStartTimes([]);
      return;
    }

    setStartTimes(getIncrements());
  };

  const toggleEndTimes = () => {
    if (endTimes.length > 0) {
      setEndTimes([]);
      return;
    }

    setEndTimes(getIncrements());
  };

  const setStartTime = async (time) => {
    slot.start_time = time.raw;
    await API.put(`/time_slots/${slot.id}.json`, { start_time: time.clean });
    toggleStartTimes();
  };

  const setEndTime = async (time) => {
    slot.end_time = time.raw;
    await API.put(`/time_slots/${slot.id}.json`, { end_time: time.clean });
    toggleEndTimes();
  };

  return (
    <div className="time-picker">
      <div className="content">
        <div className="time-input-container">
          <div className="toucher" onClick={toggleStartTimes}>
            {moment(slot.start_time).format('h:mm a')}
          </div>

          {startTimes.length > 0 && (
            <ul className="clean-list pop-up-selector">
              {startTimes.map(time => (
                <li key={time.raw} onClick={() => setStartTime(time)}>
                  {time.clean}
                </li>
              ))}
            </ul>
          )}
        </div>

        <hr />

        <div className="time-input-container">
          <div className="toucher" onClick={toggleEndTimes}>
            {moment(slot.end_time).format('h:mm a')}
          </div>

          {endTimes.length > 0 && (
            <ul className="clean-list pop-up-selector">
              {endTimes.map(time => (
                <li key={time.raw} onClick={() => setEndTime(time)}>
                  {time.clean}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="fa fa-trash remove-slot" onClick={() => removeSlot(day, slot.id)}></div>
      </div>
    </div>
  );
};

export default TimePicker;
