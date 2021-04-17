export enum remoteConfigEnum {
  teste_parametro = 'teste_parametro',
  pagina_ativa = 'pagina_ativa',
}
export type remoteConfigDefaultParams = {
  [key in remoteConfigEnum]: string | number | boolean;
};

const remoteConfigDefaultValues: remoteConfigDefaultParams = {
  [remoteConfigEnum.teste_parametro]: 'Valor padrão',
  [remoteConfigEnum.pagina_ativa]: false,
};
export default remoteConfigDefaultValues;
