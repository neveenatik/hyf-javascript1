'use strict';
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);
function declarableTime(tasks) {
  let time = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].duration >= 120) {
      time += tasks[i].duration;
    }
  }
  return time / 60;
}
console.log('Maartje has earned €' + (declarableTime(tasks) * 25).toFixed(2));
