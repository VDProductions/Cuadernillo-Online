import api from '@/lib/api';
import { colors, fontSize, spacing } from '@/lib/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            setError('');

            const response = await api.post('/login', {
                email,
                password,
            });

            const { token, user } = response.data;

            // 1️⃣ Guardar token y rol
            await AsyncStorage.setItem('token', token);
            await AsyncStorage.setItem('role', user.role);

            // 2️⃣ Redirigir según rol
            if (user.role === 'alumno') {
                router.replace('/alumno');
            } else {
                router.replace('/profesor');
            }

        } catch (e: any) {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cuadernillo Online</Text>

            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            {error !== '' && <Text style={styles.error}>{error}</Text>}

            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: fontSize.title,
    textAlign: 'center',
    marginBottom: spacing.lg,
    color: colors.text,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  error: {
    color: colors.error,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
});
