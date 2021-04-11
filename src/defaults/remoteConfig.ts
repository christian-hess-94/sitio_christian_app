export type remoteConfigDefaultParams = {
  [key in remoteConfigEnum]: string;
};

export enum remoteConfigEnum {
  teste_parametro = 'teste_parametro',
}
const remoteConfigDefaultValues: remoteConfigDefaultParams = {
  [remoteConfigEnum.teste_parametro]: 'Valor padrão',
};

export default remoteConfigDefaultValues;
