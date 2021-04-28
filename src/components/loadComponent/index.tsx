import {Loader} from '../Loader/styles';
import React from 'react';

export enum LoadingState {
  LOADING,
  LOADED,
  ERROR,
}
interface LoadComponentProps {
  loading: LoadingState;
  loadedComponent: any;
  errorComponent?: any;
  onErrorCallback?: () => void;
  onLoadedCallback?: () => void;
}

const LoadComponent: React.FunctionComponent<LoadComponentProps> = ({
  loading,
  loadedComponent,
  errorComponent,
  onErrorCallback,
  onLoadedCallback,
}) => {
  switch (loading) {
    case LoadingState.LOADING:
      return <Loader />;
    case LoadingState.ERROR:
      onErrorCallback && onErrorCallback();
      return errorComponent || loadedComponent;
    case LoadingState.LOADED:
      onLoadedCallback && onLoadedCallback();
      return loadedComponent;
  }
};

export default LoadComponent;
