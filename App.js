import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function App() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const days = ["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy"];
  const dayName = days[now.getDay()];
  const date = `${dayName}, ${now.getDate()}/${now.getMonth() + 1}`;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Thời gian */}
      <Text style={styles.time}>{hours}:{minutes}</Text>
      {/* Ngày tháng */}
      <Text style={styles.date}>{date}</Text>

      {/* Home bar iOS */}
      <View style={styles.spacer} />
      <View style={styles.homeBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // nền đen giống màn hình chờ
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "200",
    color: "#fff",
  },
  date: {
    fontSize: 18,
    color: "#ddd",
    marginTop: 10,
  },
  spacer: {
    flex: 1,
  },
  homeBar: {
    width: 120,
    height: 5,
    borderRadius: 3,
    backgroundColor: "#666",
    marginBottom: 20,
  },
});    height: 60,
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
