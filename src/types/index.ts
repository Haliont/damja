export enum FieldName {
  NAME = 'Adyyz',
  PHONE = 'Telefonbilgi',
  ADDRESS = 'your-name',
  BERRY = 'Miwe',
  WEIGHT = 'Agramy',
  DELIVERY_DATE = 'Sene',
  COMMENT = 'Habaryyzyteksti',
}

export type FormValues = {
  [FieldName.NAME]: string,
  [FieldName.PHONE]: string,
  [FieldName.ADDRESS]: string,
  [FieldName.BERRY]: string,
  [FieldName.WEIGHT]: string,
  [FieldName.DELIVERY_DATE]: string,
  [FieldName.COMMENT]: string,
}
