import React from 'react';
import { Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { openLink } from '../../utils';
import { linksSectionData } from './linksSectionData';

const currentYear = new Date().getFullYear();

const Link = ({
  link,
  text,
  color = '#6CBE03',
  bold = false,
}: {
  link: string;
  text: string;
  color?: string;
  bold?: boolean;
}) => {
  return (
    <TouchableOpacity onPress={() => openLink(link)}>
      <Text style={{
        fontFamily: bold ? 'TrebuchetMS-Bold' : 'TrebuchetMS',
        fontSize: 15,
        color,
      }}>{text}</Text>
    </TouchableOpacity>
  );
}

function Footer() {
  const renderAboutSection = (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Biz barada</Text>
      <View style={styles.aboutTextContainer}>
        <Text style={styles.sectionText}>
          Biz öz bagçylyk hojalygymyzyň gözlegini we taýýarlygyny 2005 ýyldan başladyk. Biziň maksadymyz ýerli bazar üçin organiki miwe önümleriniň durnukly öndürilmegi bolup durýar. Biz – Baharly etrabynyň “Garry Nohur” daýhan birleşiginiň agzalary we biziň bagymyz Köpetdagyň merkezinde deňiz derejesinden 1200-1300 m beýiklikde ýerleşýär. Siz suratlary
        </Text>
        <Link link="https://www.3-damja.com/gallery/" text="şu ýerde" />
        <Text style={styles.sectionText}> görüp bilersiňiz.</Text>
      </View>
    </View>
  );

  const renderLinksSection = (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Peýdaly Çykgytlar</Text>
      <View>
        {linksSectionData.map((item) => {
          return (
            <View key={item.tr.link} style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 6 }}>
              <Link {...item.tr} bold />
              <Text style={{ color: '#fff' }}> / </Text>
              <Link {...item.ru} bold />
            </View>
          );
        })}
      </View>
    </View>
  );

  const renderContactsSection = (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Habarlaşmak</Text>
      <Text style={styles.sectionText}>Maslahat ýa maglumat gerek bolsa:</Text>
      <View style={styles.contacts}>

        <View style={styles.contactsItem}>
          <View style={styles.contactsItemIconContainer}>
            <Image
              style={[{ width: 35, height: 35 }]}
              source={require('./contacts-icons/phone.png')}
            />
          </View>
          <View style={styles.contactsItemTextContainer}>
            <Text style={styles.contactsItemText}>+993 65 811577</Text>
          </View>
        </View>

        <View style={styles.contactsItem}>
          <View style={styles.contactsItemIconContainer}>
            <Image
              style={[{ width: 25, height: 25 }]}
              source={require('./contacts-icons/clock.png')}
            />
          </View>
          <View style={styles.contactsItemTextContainer}>
            <Text style={styles.contactsItemText}>Her gün</Text>
            <Text style={styles.contactsItemText}>7:00 – 19:00</Text>
          </View>
        </View>

        <View style={styles.contactsItem}>
          <View style={styles.contactsItemIconContainer}>
            <Image
              style={[{ width: 25, height: 25 }]}
              source={require('./contacts-icons/map-pin.png')}
            />
          </View>
          <View style={styles.contactsItemTextContainer}>
            <Text style={styles.contactsItemText}>745028, Bäherden etraby,</Text>
            <Text style={styles.contactsItemText}>“Garry Nohur” d/b,</Text>
            <Text style={styles.contactsItemText}>Aýal-Ölän baýyry,</Text>
            <Text style={styles.contactsItemText}>3-DAMJA Bagy</Text>
          </View>
        </View>

        <View style={styles.contactsItem}>
          <View style={styles.contactsItemIconContainer}>
            <Image
              style={[{ width: 20, height: 20 }]}
              source={require('./contacts-icons/mail.png')}
            />
          </View>
          <View style={styles.contactsItemTextContainer}>
            <Text style={styles.contactsItemText}>rzakirov@3-damja.com</Text>
          </View>
        </View>

      </View>
    </View>
  );

  return (
    <View style={styles.root}>
      <ImageBackground resizeMode="cover" source={require('./background.jpg')} style={styles.inner}>
        <View style={styles.content}>
          {renderAboutSection}
          {renderLinksSection}
          {renderContactsSection}
        </View>
      </ImageBackground>
      <View style={styles.copyrightRoot}>
        <Text style={styles.copyrightText}>© 3-DAMJA 2019-{currentYear}</Text>
      </View>
    </View>
  );
}

export default Footer;
