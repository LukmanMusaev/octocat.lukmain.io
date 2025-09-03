import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { trpc, trpcClient } from "@/lib/trpc";

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ 
      headerBackTitle: "Назад",
      headerStyle: {
        backgroundColor: '#2563eb',
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="services" options={{ title: "Наши услуги" }} />
      <Stack.Screen name="booking" options={{ title: "Заказать услугу" }} />
      <Stack.Screen name="contact" options={{ title: "Контакты" }} />
      <Stack.Screen name="gallery" options={{ title: "Наши работы" }} />
    </Stack>
  );
}

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootLayoutNav />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </trpc.Provider>
  );
}