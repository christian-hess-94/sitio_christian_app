import remoteConfig from '@react-native-firebase/remote-config';
import {remoteConfigEnum} from '../defaults/remoteConfig';
interface configValueType {
  varName: remoteConfigEnum;
  as: 'string' | 'number' | 'boolean';
}

export const getConfigValue = ({varName, as}: configValueType) => {
  switch (as) {
    case 'number':
      return remoteConfig().getValue(varName).asNumber();
    case 'boolean':
      return remoteConfig().getValue(varName).asBoolean();
    default:
    case 'string':
      return remoteConfig().getValue(varName).asString();
  }
};
