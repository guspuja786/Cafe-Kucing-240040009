import { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip Cafe', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

function OrderSummary({ totalCount }: { totalCount: number }) {
  return (
    <View style={styles.ringkasan}>
      <Text style={styles.total}>
        Total Item Dipesan: {totalCount}
      </Text>

      {totalCount >= 5 && (
        <Text style={styles.promo}>
          Selamat! Anda Adalah Orang Ganteng yang Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
}

function MenuItem({
  nama,
  harga,
  onTambahPesanan,
}: {
  nama: string;
  harga: number;
  onTambahPesanan: () => void;
}) {
  const [qty, setQty] = useState(0);

  function tambahPesanan() {
    setQty(qty + 1);
    onTambahPesanan();
  }

  return (
    <View style={styles.kartu}>
      <Text style={styles.nama}>{nama}</Text>

      <Text style={styles.harga}>
        Harga: Rp{harga.toLocaleString('id-ID')}
      </Text>

      <Text style={styles.jumlah}>
        Jumlah dipesan: {qty}
      </Text>

      <Button
        title="Tambah Pesanan"
        onPress={tambahPesanan}
        color="#795548"
      />
    </View>
  );
}

export default function HomeScreen() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  function tambahTotalPesanan() {
    setTotalPesanan(totalPesanan + 1);
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.isi}
    >
      <Text style={styles.header}>CAFE KUCING</Text>

      <Text style={styles.subjudul}>
        Tempat Nongkrong Harapan Bangsa
      </Text>

      <OrderSummary totalCount={totalPesanan} />

      <Text style={styles.judul}>Daftar Menu</Text>

      {DAFTAR_MENU.map((menu) => (
        <MenuItem
          key={menu.id}
          nama={menu.nama}
          harga={menu.harga}
          onTambahPesanan={tambahTotalPesanan}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  isi: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#795548',
    textAlign: 'center',
  },
  subjudul: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 8,
    marginBottom: 20,
  },
  ringkasan: {
    backgroundColor: '#F1E0D0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#49352A',
  },
  promo: {
    color: '#287A3D',
    fontWeight: 'bold',
    marginTop: 10,
  },
  judul: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#795548',
    marginBottom: 12,
  },
  kartu: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E0D2C5',
    gap: 8,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#49352A',
  },
  harga: {
    fontSize: 15,
    color: '#555555',
  },
  jumlah: {
    marginBottom: 5,
    color: '#555555',
  },
});
