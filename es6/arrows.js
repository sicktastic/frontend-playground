class TaskCollection {
  constructor(task = []) {
    this.task = task;
  }

  prepare() {
    this.tasks.forEach(task => task.toGulp());
  }
}

class Task {
  toGulp() {
    console.log('converting to gulp');
  }
}

new TaskCollection([
  new Task, new Task, new Task
]).log();
