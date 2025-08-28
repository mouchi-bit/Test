import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Thanh trạng thái iOS */}
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>iPhone Mockup</Text>
      </View>

      {/* Nội dung */}
      <View style={styles.body}>
        <Text style={styles.title}>Xin chào 👋</Text>
        <Text style={styles.subtitle}>tui tên Minh =]]]</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Nhấn vào đây</Text>
        </TouchableOpacity>
      </View>

      {/* Thanh home iOS */}
      <View style={styles.homeBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#111',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // xanh đặc trưng iOS
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  homeBar: {
    height: 5,
    width: 120,
    backgroundColor: '#ccc',
    borderRadius: 3,
    alignSelf: 'center',
    marginBottom: 10,
  },
});
