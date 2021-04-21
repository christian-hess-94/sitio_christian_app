import {AsyncTask, execTask} from '../asyncTask.util';
describe('Tests the AsyncTask Suite', () => {
  it('should run the task and onComplete only once', () => {
    const taskSuccess = jest.fn();
    const succesComplete = jest.fn();
    const successFail = jest.fn();
    const taskThatCompletes: AsyncTask = {
      task: taskSuccess,
      onComplete: succesComplete,
      onFail: successFail,
    };
    execTask(taskThatCompletes);
    expect(taskSuccess).toBeCalledTimes(1);
    expect(succesComplete).toBeCalledTimes(1);
    expect(successFail).toBeCalledTimes(0);
  });

  it('should run the task and onFail only once', () => {
    const taskError = jest.fn();
    taskError.mockImplementation(() => {
      throw new Error();
    });
    const errorComplete = jest.fn();
    const errorFail = jest.fn();
    const taskThatError: AsyncTask = {
      task: taskError,
      onComplete: errorComplete,
      onFail: errorFail,
    };
    execTask(taskThatError);
    expect(taskError).toBeCalledTimes(1);
    expect(errorComplete).toBeCalledTimes(0);
    expect(errorFail).toBeCalledTimes(1);
  });
});
