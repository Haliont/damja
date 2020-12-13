import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';
import { MenuItem as MenuItemType } from '../../../../services/app-data';
import { openLink } from '../../../../utils';

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
        <TouchableOpacity
          style={styles.menuItemTextContainer}
          onPress={() => openLink(link)}
        >
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

function Menu({ menuItems }: { menuItems: Array<MenuItemType> }) {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      {menuItems.map((item: any) => (
        <MenuItem
          key={item.title}
          title={item.title}
          link={item.link}
          subItems={item.subItems}
        />
      ))}
    </ScrollView>
  );
}

export default Menu;
