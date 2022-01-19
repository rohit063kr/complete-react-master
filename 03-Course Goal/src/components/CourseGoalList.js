import React from 'react';

import './CourseGoalList.css';

const CourseGoalList = function (props) {
  const deleteItemHandler = function (e) {
    props.onItemDeleteClick(e.target.dataset.id);
  };

  return (
    <ul className="course-goal__list">
      {props.goalData.map(goal => (
        <li
          key={goal.id}
          data-id={goal.id}
          className="course-goal__list-item"
          onClick={deleteItemHandler}
        >
          {goal.txt}
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
