import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";

export default function App() {
  // Lấy thời gian hiện tại
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  // Lấy ngày + thứ
  const days = [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
  ];
  const dayName = days[now.getDay()];
  const date = `${dayName}, ${now.getDate()}/${now.getMonth() + 1}`;

  return (
    <ImageBackground
      source={{ uri: "https://i.imgur.com/2nCt3Sb.jpg" }} // Wallpaper iPhone
      style={styles.background}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      {/* Giờ to giữa màn hình */}
      <Text style={styles.time}>{hours}:{minutes}</Text>

      {/* Ngày tháng */}
      <Text style={styles.date}>{date}</Text>

      {/* Spacer để đẩy home bar xuống */}
      <View style={{ flex: 1 }} />

      {/* Home bar */}
      <View style={styles.homeBar} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "200",
    color: "#fff",
    marginTop: 120,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },
  date: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  homeBar: {
    width: 120,
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginBottom: 30,
  },
});      <View style={{ flex: 1 }} />

      {/* Home bar */}
      <View style={styles.homeBar} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 80,
    fontWeight: "200",
    color: "#fff",
    marginTop: 120,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 8,
  },
  date: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  homeBar: {
    width: 120,
    height: 5,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginBottom: 30,
  },
});    fontSize: 80,
    fontWeight: 200,
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
});    fontSize: 80,
    fontWeight: 200,
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
