export type remoteConfigDefaultParams = {
  [key in remoteConfigEnum]: string | boolean;
};

export enum remoteConfigEnum {
  teste_parametro = 'teste_parametro',
  pagina_ativa = 'pagina_ativa',
}
const remoteConfigDefaultValues: remoteConfigDefaultParams = {
  [remoteConfigEnum.teste_parametro]: 'Valor padrão',
  [remoteConfigEnum.pagina_ativa]: false,
};
export default remoteConfigDefaultValues;
