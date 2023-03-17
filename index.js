// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
    taskCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Take out all the poo in the litter box");
const task2 = newTask("Do laundry", "The loads of laundry needs to be done");
const tasks = [task1, task2];

task1.logState();
task1.taskCompleted();
task1.logState();

console.log(tasks);
