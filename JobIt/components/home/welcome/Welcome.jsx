import { useState} from 'react'
import { View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import {icons, SIZES} from '../../../constants'

import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, Tammy</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>  
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value=""
            onChange={() => {}} // To be implemented
            placeholder="What are you looking for?"
          />
        </View>
      </View>
    </View> 
  )
}

export default Welcome