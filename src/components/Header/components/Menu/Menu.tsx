import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const items = [
  { title: 'Baş Sahypa', link: 'https://www.3-damja.com/index.html' },
  {
    title: 'Daýhana kömek hökmünde',
    link: 'https://www.3-damja.com/publications_to_educate_farmer.html',
    subItems: [
      { title: 'Ferma döretmek', link: 'https://www.3-damja.com/farm_start_steps.html' },
      { title: 'Telekeçilere oba hojalyk işden peýdalanmak hakynda', link: 'https://www.3-damja.com/agrobusiness_prospects_tkm.html' },
    ]
  },
];

interface MenuItemProps {
  title: string;
  link: string;
  subItems?: Array<{
    title: string;
    link: string;
  }>;
}

const MenuItem = ({ title, link, subItems }: MenuItemProps) => {
  const hasSubComments = subItems && subItems.length > 0;

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  const canRenderSubMenu = hasSubComments && isOpenSubMenu && subItems;
  const renderSubMenu = canRenderSubMenu && (
    <View style={styles.subMenu}>
      {(subItems || []).map((subItem) => (
        <MenuItem key={subItem.title} title={subItem.title} link={subItem.link} />
      ))}
    </View>
  );

  return (
    <View style={styles.menuItem}>
      <View style={styles.menuItemInner}>
        <TouchableOpacity style={styles.menuItemTextContainer} onPress={() => { console.log('press'); }}>
          <Text style={styles.menuItemText}>{title}</Text>
        </TouchableOpacity>
        {hasSubComments && (
          <TouchableOpacity
            style={styles.openSubMenuBtn}
            onPress={() => {
              setIsOpenSubMenu((prev) => !prev);
            }}
          >
            <View style={styles.openSubMenuBtnLine} />
            <Image
              style={[
                styles.openSubMenuBtnIcon,
                isOpenSubMenu && styles.openSubMenuBtnIconIsOpen
              ]}
              source={require('./arrow-down.png')}
            />
          </TouchableOpacity>
        )}
      </View>
      {renderSubMenu}
    </View>
  );
};

function Menu() {
  return (
    <View style={styles.root}>
      {items.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          link={item.link}
          subItems={item.subItems}
        />
      ))}
    </View>
  );
}

export default Menu;
