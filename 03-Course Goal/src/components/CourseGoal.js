import React, { useState } from 'react';

import CourseGoalForm from './CourseGoalForm';
import CourseGoalList from './CourseGoalList';

const INITIAL_GOAL = [{ id: Math.random(), txt: 'finish' }];

const CourseGoal = function () {
  const [goal, setGoal] = useState(INITIAL_GOAL);

  const saveDataHandler = function (data) {
    const goalData = { id: Math.random(), txt: data };
    setGoal(prevGoal => [...prevGoal, goalData]);
  };

  const itemDeleteHandler = function (itemId) {
    const deleteTargetIndex = goal.findIndex(el => el.id === +itemId);

    setGoal(prevGoal => [
      ...prevGoal.filter(el => el !== goal[deleteTargetIndex]),
    ]);
  };

  return (
    <div className="CourseGoal">
      <CourseGoalForm onDataSave={saveDataHandler} />;
      <CourseGoalList onItemDeleteClick={itemDeleteHandler} goalData={goal} />
    </div>
  );
};

export default CourseGoal;
