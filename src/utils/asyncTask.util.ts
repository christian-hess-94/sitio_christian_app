export interface AsyncTask {
  name?: string;
  task: () => void;
  onStart?: () => void;
  onComplete?: (data: any | undefined) => void;
  onFail?: (error: any) => void;
  isAsync?: boolean;
}

export const execTasks = async (
  tasks: AsyncTask[],
  onBeforeAllTasks: () => void,
  onCompleteAllTasks: () => void,
) => {
  onBeforeAllTasks();
  try {
    tasks.forEach(async task => await execTask(task));
    onCompleteAllTasks();
  } catch (error) {
    return error;
  }
};

export const execTask = async (TASK: AsyncTask) => {
  const {onStart, onComplete, onFail, task, isAsync, name} = TASK;
  console.log(name ? `[${name}] Executing task` : 'Executing nameless task');
  onStart && onStart();
  try {
    let data = undefined;
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
