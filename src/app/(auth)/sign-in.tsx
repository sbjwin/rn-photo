import { useState } from "react";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function SignInScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // 실제 로그인 로직이 들어갈 자리입니다.
        // 로그인이 성공하면 메인 화면('/')으로 이동시킵니다.
        router.replace('/');
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={{ marginBottom: 40 }}>로그인</ThemedText>
            
            <TextInput 
                style={styles.input} 
                placeholder="이메일 또는 아이디"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <TextInput 
                style={styles.input} 
                placeholder="비밀번호"
                placeholderTextColor="#999"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <ThemedText style={styles.loginButtonText}>로그인</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/sign-up')}>
                <ThemedText style={styles.signupButtonText}>계정이 없으신가요? 회원가입</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    loginButton: {
        backgroundColor: '#F97316',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupButton: {
        marginTop: 20,
        alignItems: 'center',
    },
    signupButtonText: {
        color: '#F97316',
        fontSize: 14,
    }
});