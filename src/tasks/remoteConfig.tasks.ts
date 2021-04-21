import remoteConfigDefaultValues from '../defaults/remoteConfig';

import remoteConfig from '@react-native-firebase/remote-config';

export const setRemoteConfigDefaults = async () => {
  await remoteConfig().setDefaults(remoteConfigDefaultValues);
};
export const fetchAndActivateConfig = async () => {
  await remoteConfig().fetch(5);
  await remoteConfig().activate();
};
