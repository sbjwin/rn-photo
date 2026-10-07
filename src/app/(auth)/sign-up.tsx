// 회원 가입 화면 구현

import { ThemedText } from "@/components/themed-text";
import { WHITE } from "@/constants/theme";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignUpScreen() {
    const router = useRouter();
    const { top, bottom } = useSafeAreaInsets();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const disable = !email || !password || !passwordConfirm;

    const handleSignUp = () => {
        setErrorMessage("");

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

        // 비밀번호 일치 검사
        if (password !== passwordConfirm) {
            setErrorMessage("비밀번호가 일치하지 않습니다.");
            return;
        }

        setIsLoading(true);

        // 회원가입 성공 시뮬레이션 후 메인으로 이동
        setTimeout(() => {
            setIsLoading(false);
            router.replace('/');
        }, 600);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* 배경 커버 이미지 */}
            <View style={StyleSheet.absoluteFill}>
                <Image
                    source={require('@/assets/images/cover.png')}
                    style={styles.coverImage}
                    resizeMode="cover"
                />
                <View style={styles.coverOverlay} />
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={styles.keyboardView}
            >
                <ScrollView
                    contentContainerStyle={[
                        styles.scrollContent,
                        { paddingTop: top + 40, paddingBottom: (bottom || 20) + 10 }
                    ]}
                    keyboardShouldPersistTaps="handled"
                    bounces={false}
                >
                    <View style={styles.headerArea}>
                        <ThemedText style={styles.headerTitle}>새 계정 만들기</ThemedText>
                        <ThemedText style={styles.headerSubtitle}>사진을 공유하고 소통해 보세요</ThemedText>
                    </View>

                    {/* 회원가입 폼 카드 */}
                    <View style={styles.formCard}>
                        {errorMessage ? (
                            <ThemedText style={styles.errorText}>{errorMessage}</ThemedText>
                        ) : null}

                        {/* 이메일 입력 */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="이메일 주소"
                                placeholderTextColor="#999"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </View>

                        {/* 비밀번호 입력 */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호 (8자 이상, 문자/숫자/특수문자)"
                                placeholderTextColor="#999"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        {/* 비밀번호 확인 입력 */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="shield-checkmark-outline" size={20} color="#999" style={styles.icon} />
                            <TextInput
                                style={styles.input}
                                placeholder="비밀번호 확인"
                                placeholderTextColor="#999"
                                secureTextEntry
                                value={passwordConfirm}
                                onChangeText={setPasswordConfirm}
                            />
                        </View>

                        {/* 회원가입 버튼 */}
                        <TouchableOpacity
                            style={[
                                styles.submitButton,
                                (disable || isLoading) && styles.submitButtonDisabled
                            ]}
                            onPress={handleSignUp}
                            disabled={disable || isLoading}
                        >
                            {isLoading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <ThemedText style={styles.submitButtonText}>가입하기</ThemedText>
                            )}
                        </TouchableOpacity>

                        {/* 로그인 화면으로 이동 */}
                        <TouchableOpacity
                            style={styles.signInLink}
                            onPress={() => router.back()}
                        >
                            <ThemedText style={styles.signInLinkText}>
                                이미 계정이 있으신가요? <ThemedText style={styles.signInLinkHighlight}>로그인</ThemedText>
                            </ThemedText>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    coverImage: {
        width: '100%',
        height: '100%',
    },
    coverOverlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    keyboardView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    headerArea: {
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    headerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: WHITE,
        textShadowColor: 'rgba(0, 0, 0, 0.4)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 4,
    },
    headerSubtitle: {
        fontSize: 15,
        color: 'rgba(255, 255, 255, 0.85)',
        marginTop: 6,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 3,
    },
    formCard: {
        backgroundColor: WHITE,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
    },
    errorText: {
        color: '#EF4444',
        marginBottom: 16,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 14,
        backgroundColor: '#F8FAFC',
    },
    icon: {
        marginRight: 12,
    },
    input: {
        flex: 1,
        fontSize: 15,
        color: '#1E293B',
    },
    submitButton: {
        backgroundColor: '#F97316',
        height: 52,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#F97316',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    },
    submitButtonDisabled: {
        backgroundColor: '#FDBA74',
        shadowOpacity: 0,
        elevation: 0,
    },
    submitButtonText: {
        color: WHITE,
        fontSize: 16,
        fontWeight: 'bold',
    },
    signInLink: {
        marginTop: 20,
        alignItems: 'center',
        paddingVertical: 8,
    },
    signInLinkText: {
        color: '#64748B',
        fontSize: 14,
    },
    signInLinkHighlight: {
        color: '#F97316',
        fontWeight: 'bold',
    },
});