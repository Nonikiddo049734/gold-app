import { Image, StyleSheet, Text, View } from 'react-native';

export default function StudentsCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* School Name */}
        <Text style={styles.school}>My University</Text>

        {/* Profile Image */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.image}
        />

        {/* Student Details */}
        <Text style={styles.name}>Onyeke chinonso timothy</Text>
        <Text style={styles.info}>Matric No: 2024030218570</Text>
        <Text style={styles.info}>Department: Computer Science</Text>
        <Text style={styles.info}>Level: 200</Text>

      </View>
    </View>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F24',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    backgroundColor: '#1B1F3B',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  school: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
});