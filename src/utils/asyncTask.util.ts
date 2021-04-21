export interface AsyncTask {
  name?: string;
  task: () => void;
  onStart?: () => void;
  onComplete?: (data: any | undefined) => void;
  onFail?: (error: any) => void;
  isAsync?: boolean;
}

interface ExecTasksParam {
  tasks: AsyncTask[];
  taskIndex: number;
  onBeforeAllTasks?: () => void;
  onCompleteAllTasks?: () => void;
}
export const execTasks = async ({
  tasks,
  taskIndex,
  onBeforeAllTasks,
  onCompleteAllTasks,
}: ExecTasksParam) => {
  onBeforeAllTasks && onBeforeAllTasks();
  try {
    // tasks.forEach(async task =>
    //   task.isAsync ? await execTask(task) : execTask(task),
    // );
    execTask(tasks[taskIndex]);
    if (taskIndex === tasks.length - 1) {
      onCompleteAllTasks && onCompleteAllTasks();
    }
  } catch (error) {
    return error;
  }
};

export const execTask = async (TASK: AsyncTask) => {
  const {onStart, onComplete, onFail, task, isAsync, name} = TASK;
  console.log(name ? `[${name}] Executing task` : 'Executing nameless task');
  onStart && onStart();
  try {
    let data;
    if (isAsync) {
      data = await task();
    } else {
      data = task();
    }
    console.log(name ? `[${name}] Completed task` : 'Completed nameless task');
    onComplete && onComplete(data);
  } catch (error) {
    onFail && onFail(error);
  }
};
