import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { ProfileItem, ProfileHeader } from './components/profile-item';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  }
})

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileHeader />
        <ProfileItem title="Email" desc="Kevin.zhang@wizsolu.com" />
        <ProfileItem title="City" desc="721 Moorestown NJ" />

        <ProfileItem title="Age" desc="42" />

        <ProfileItem title="Gender" desc="Male" />

        <ProfileItem title="Height" desc="5‘7’‘" />

        <ProfileItem title="Weight" desc="170 lbs" />

        <ProfileItem title="Max Heart Rate" desc="177" />
        <ProfileItem title="Ability" desc="Barre,Cardio, Dance,+3" />
        <ProfileItem title="Goal" desc="Build Muscle" />
        <ProfileItem title="Liimitations" desc="" />

      </ScrollView>
    </SafeAreaView>
  )

}