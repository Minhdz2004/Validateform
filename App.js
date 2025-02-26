import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorColor, setErrorColor] = useState('black'); // Màu mặc định

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(0[3|5|7|8|9])[0-9]{8}$/;

    if (phoneRegex.test(phone)) {
      setErrorMessage('Số điện thoại hợp lệ!');
      setErrorColor('green'); 
    } else {
      setErrorMessage('Số điện thoại không hợp lệ!');
      setErrorColor('red'); 
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.t1}>Đăng Nhập</Text>
      <View style={styles.box}>
        <Text style={styles.t2}>Nhập số điện thoại</Text>
        <Text style={styles.t3}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          onChangeText={(text) => {
            setPhone(text);
            validatePhoneNumber(text);
          }}
          value={phone}
        />
        {errorMessage ? (
          <Text style={{ color: errorColor, }}>
            {errorMessage}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          errorMessage.includes('hợp lệ') ? styles.buttonActive : styles.buttonDisabled,
        ]}
        disabled={!errorMessage.includes('hợp lệ')}
        onPress={() => alert(`Số điện thoại: ${phone}`)}
      >
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 30,
  },
  t1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
    borderColor: '#ccc',
    padding: 20,
    borderBottomWidth: 1,
  },
  box: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 1,
    fontSize: 16,
    marginBottom: 60,
    marginTop: 10,
  },
  t2: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  t3: {
    fontSize: 14,
    color: 'gray',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#007BFF',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
