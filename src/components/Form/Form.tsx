import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Form as FinalForm, Field, FormApi } from 'react-final-form';
import TextField from '../TextField';
import Modal from '../Modal';
import styles from './styles';
import Button from '../Button';
import { hasInternetConnection } from '../../utils';
import { isRequired } from '../../validators';
import { FieldName, FormValues } from '../../types'
import { sendEmail } from '../../services/api';

interface Props {
  showConnectionAlert: () => void;
}

function Form({ showConnectionAlert }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const [isShowSuccessAlert, setIsShowSuccessAlert] = useState(false);
  const showSuccessAlert = () => setIsShowSuccessAlert(true);
  const hideSuccessAlert = () => setIsShowSuccessAlert(false);

  const [isShowErrorAlert, setIsShowErrorAlert] = useState(false);
  const showErrorAlert = () => setIsShowErrorAlert(true);
  const hideErrorAlert = () => setIsShowErrorAlert(false);

  const onSubmit = async (values: FormValues, form: FormApi<FormValues, Partial<FormValues>>) => {
    setIsLoading(true);
    try {
      if ((await hasInternetConnection())) {
        await sendEmail(values);
        showSuccessAlert();
        setIsLoading(false);
        setTimeout(form.restart);
      } else {
        setTimeout(() => {
          showConnectionAlert();
          setIsLoading(false);
        }, 2000);
      }
    } catch (err) {
      showErrorAlert();
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.root}>
      <Modal
        text={'Hatyňyz ugradyldy. Iki günüň içinde siziň bilen habarlaşarys. Sag boluň!  /  Ваше сообщение отправлено.  В течении двух дней, мы свяжемся с вами.  Спасибо!'}
        visible={isShowSuccessAlert}
        onClose={hideSuccessAlert}
      />
      <Modal
        text={'Bagyşlaň, habaryňyz iberilmedi.  /  Извините, ваше сообщение не было отправлено.'}
        textStyle={{ color: 'red' }}
        visible={isShowErrorAlert}
        onClose={hideErrorAlert}
      />
      <Text style={styles.title}>Ter miwe sargyt / Заказ на свежую ягоду</Text>
      <FinalForm<FormValues>
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <View style={styles.content}>
            <Field name={FieldName.NAME} placeholder="Adyňyz / Ваше имя *" component={TextField} validate={isRequired} />
            <Field name={FieldName.PHONE} placeholder="Bilgiňiz / Телефон (+993 6X XXXXXX) *" component={TextField} validate={isRequired} />
            <Field name={FieldName.ADDRESS} placeholder="Salgy / Адрес" component={TextField} />
            <Field name={FieldName.BERRY} placeholder="Miwe / Ягода *" component={TextField} validate={isRequired} />
            <Field name={FieldName.WEIGHT} placeholder="Аgramy / Вес *" component={TextField} validate={isRequired} />
            <Field name={FieldName.DELIVERY_DATE} placeholder="Gerekli gowşuryş senesi / Требуемая дата доставки" component={TextField} />
            <Field
              name={FieldName.COMMENT}
              label="Haýyş ýä sorag bolsa aşakda ýäzaýsyňyz / Если у вас есть просьба или вопрос, напишите ниже"
              multiline={true}
              numberOfLines={4}
              inputStyle={{ textAlignVertical: 'top' }}
              component={TextField}
            />
            <View style={styles.footer}>
              <Button text="SARGYT EDIŇ / ЗАКАЗАТЬ" loading={isLoading} onPress={handleSubmit} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Form;
