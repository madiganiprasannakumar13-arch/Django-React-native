#!/bin/bash
npm install -g expo-cli
expo init taskbuddy-mobile
cd taskbuddy-mobile
npm install axios @react-navigation/native @react-navigation/stack
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
