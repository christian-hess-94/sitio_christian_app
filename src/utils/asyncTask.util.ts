interface AsyncTask {
  task: () => void;
  onStart: () => void;
  onComplete: () => void;
  onFail: (error: any) => void;
  isAsync?: boolean;
}

const execTask = async ({
  onStart,
  onComplete,
  onFail,
  task,
  isAsync,
}: AsyncTask) => {
  onStart();
  try {
    if (isAsync) {
      await task();
    } else {
      task();
    }
    onComplete();
  } catch (error) {
    onFail(error);
  }
};

export default execTask;
