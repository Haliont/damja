import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Form as FinalForm, Field } from 'react-final-form';
import TextField from '../TextField';
import styles from './styles';

function Form() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Ter miwe sargyt / Заказ на свежую ягоду</Text>
      <FinalForm
        onSubmit={() => {}}
        render={({ handleSubmit }) => (
          <View style={styles.content}>
            <Field name="name" placeholder="Adyňyz / Ваше имя *" component={TextField} />
            <Field name="phone" placeholder="Bilgiňiz / Телефон (+993 6X XXXXXX) *" component={TextField} />
            <Field name="address" placeholder="Salgy / Адрес" component={TextField} />
            <Field name="berry" placeholder="Miwe / Ягода *" component={TextField} />
            <Field name="weight" placeholder="Аgramy / Вес *" component={TextField} />
            <Field name="deliveryDate" placeholder="Gerekli gowşuryş senesi / Требуемая дата доставки" component={TextField} />
            <Field
              name="comment"
              label="Haýyş ýä sorag bolsa aşakda ýäzaýsyňyz / Если у вас есть просьба или вопрос, напишите ниже"
              multiline={true}
              numberOfLines={4}
              component={TextField}
            />
            <View style={styles.footer}>
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>SARGYT EDIŇ / ЗАКАЗАТЬ</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Form;
