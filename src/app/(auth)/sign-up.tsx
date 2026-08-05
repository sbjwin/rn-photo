// 회원 가입 화면 구현

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignUpScreen() {
    const router = useRouter();
    const { top } = useSafeAreaInsets();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [disable, setDisable] = useState(false);

    useEffect(() => {
        setDisable(!email || !password);
    }, [email, password]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="light" />
            <ThemedView style={[styles.container, { paddingTop: top }]}>
                <View style={StyleSheet.absoluteFill}>
                    <Image
                        source={require('@/assets/images/cover.png')}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode="cover"
                    />
                </View>
                <ThemedText style={styles.title}>Sign Up</ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
}

// 스타일 정의
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    }
});