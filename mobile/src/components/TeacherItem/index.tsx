import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-community/async-storage';

import api from "../../services/api";

import styles from "./styles";
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  isFavorite: boolean;
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher, isFavorite }) => {
  const [favorite, setIsFavorite] = useState(isFavorite);

  function handleLinkToWhatsapp() {
    api.post('connections', { user_id: teacher.id });

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
      
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (favorite) {
      const favoriteIndex = favoritesArray.findIndex((item:Teacher) => {
        return item.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorite(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: teacher.avatar }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/hour {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[
              styles.favoriteButton, 
              favorite ? styles.favorited : {},
            ]}
          >
            { !favorite && <Image source={heartOutlineIcon} /> }
            { favorite && <Image source={unfavoriteIcon} /> }
          </RectButton>
          <RectButton
            onPress={handleLinkToWhatsapp}
            style={styles.contactButton}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
