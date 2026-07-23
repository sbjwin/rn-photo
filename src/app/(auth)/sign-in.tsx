import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, ImageBackground } from "react-native";

export default function SignInScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = () => {
        setErrorMessage(""); // 에러 메시지 초기화

        // 이메일 형식 검사
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage("올바른 이메일 형식을 입력해 주세요.");
            return;
        }

        // 비밀번호 형식 검사: 8자 이상, 문자, 숫자, 특수문자 포함
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setErrorMessage("비밀번호는 8자 이상이며 문자, 숫자, 특수문자를 모두 포함해야 합니다.");
            return;
        }

        // 실제 로그인 로직이 들어갈 자리입니다.
        // 로그인이 성공하면 메인 화면('/')으로 이동시킵니다.
        router.replace('/');
    };

    return (
        <ImageBackground 
            source={require('@/assets/images/login-bg.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <ThemedText type="title" style={styles.titleText}>로그인</ThemedText>

            {errorMessage ? (
                <ThemedText style={styles.errorText}>{errorMessage}</ThemedText>
            ) : null}

            <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="이메일 또는 아이디"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <ThemedText style={styles.loginButtonText}>로그인</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signupButton} onPress={() => router.push('/sign-up')}>
                <ThemedText style={styles.signupButtonText}>계정이 없으신가요? 회원가입</ThemedText>
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0,0,0,0.4)', // 반투명한 검은색을 덮어 글씨가 잘 보이게 합니다.
    },
    titleText: {
        marginBottom: 20,
        textAlign: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
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