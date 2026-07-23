import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";
import { Button, StyleSheet } from "react-native";

export default function SignInScreen() {
    const router = useRouter();
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={{ marginBottom: 20 }}>Sign In</ThemedText>
            <Button title="Sign Up" onPress={() => router.push('/sign-up')} />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});