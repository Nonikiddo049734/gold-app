import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const data = [
  { id: '1', name: 'CNGN', sub: 'Compliant Naira', amount: '1,200.00' },
  { id: '2', name: 'USDT', sub: 'Tether USD', amount: '1,200.00' },
  { id: '3', name: 'USDC', sub: 'USD Coin', amount: '1,200.00' },
];

export default function Wallet() {
  return (
    <View style={styles.container}>
      
      {/* TITLE */}
      <Text style={styles.title}>Wallets</Text>

      {/* BALANCE CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>My Asset Portfolio</Text>
        <Text style={styles.balance}>$ 12,480.22</Text>
      </View>

      {/* ACTION BUTTONS */}
      <View style={styles.actions}>
        {['Add Fund', 'Withdraw', 'Swap', 'Statement'].map((item, i) => (
          <View key={i} style={styles.actionItem}>
            <TouchableOpacity style={styles.iconBox}>
              <Ionicons name="add" size={22} color="#3b5bfd" />
            </TouchableOpacity>
            <Text style={styles.actionText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* TABS */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Stablecoins</Text>
        <Text style={styles.tab}>Utility</Text>
        <Text style={styles.tab}>Memes 🔥</Text>
      </View>

      {/* LIST */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View>
              <Text style={styles.coin}>{item.name}</Text>
              <Text style={styles.sub}>{item.sub}</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.amount}>{item.amount}</Text>
              <Text style={styles.sub}>≈ $1,200</Text>
            </View>
          </View>
        )}
      />

    </View>
  );
}const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },

  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#2f46b9',
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  cardTitle: {
    color: '#ccc',
    marginBottom: 10,
  },

  balance: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  actionItem: {
    alignItems: 'center',
  },

  iconBox: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 15,
    marginBottom: 5,
  },

  actionText: {
    color: '#fff',
    fontSize: 12,
  },

  tabs: {
    flexDirection: 'row',
    backgroundColor: '#111',
    padding: 5,
    borderRadius: 20,
    marginBottom: 20,
  },

  activeTab: {
    backgroundColor: '#3b5bfd',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },

  tab: {
    color: '#aaa',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },

  coin: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  sub: {
    color: '#aaa',
    fontSize: 12,
  },

  amount: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});