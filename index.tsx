import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Car, Clock, MapPin, Phone, Star, Droplets } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,

  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function HomeScreen() {
  const features = [
    {
      icon: <Car color="#ffffff" size={24} />,
      title: "Профессиональная мойка",
      description: "Используем только качественные средства"
    },
    {
      icon: <Clock color="#ffffff" size={24} />,
      title: "Быстро и удобно",
      description: "Приедем в удобное для вас время"
    },
    {
      icon: <MapPin color="#ffffff" size={24} />,
      title: "Выездная услуга",
      description: "Работаем по всему городу"
    }
  ];

  const stats = [
    { number: "500+", label: "Довольных клиентов" },
    { number: "2 года", label: "На рынке" },
    { number: "24/7", label: "Поддержка" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={['#2563eb', '#3b82f6']}
          style={styles.heroSection}
        >
          <View style={styles.heroContent}>
            <View style={styles.logoContainer}>
              <Droplets color="#ffffff" size={40} />
              <Text style={styles.logoText}>CleanDrive</Text>
            </View>
            <Text style={styles.heroTitle}>
              Выездная автомойка{'\n'}премиум класса
            </Text>
            <Text style={styles.heroSubtitle}>
              Профессиональная мойка вашего автомобиля в любом удобном месте
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push('/booking' as any)}
            >
              <Text style={styles.ctaButtonText}>Заказать мойку</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Почему выбирают нас</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureCard}>
                <LinearGradient
                  colors={['#3b82f6', '#2563eb']}
                  style={styles.featureIcon}
                >
                  {feature.icon}
                </LinearGradient>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Stats Section */}
        <LinearGradient
          colors={['#f8fafc', '#ffffff']}
          style={styles.statsSection}
        >
          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Services Preview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Наши услуги</Text>
          <View style={styles.servicesPreview}>
            <TouchableOpacity
              style={styles.serviceCard}
              onPress={() => router.push('/services' as any)}
            >
              <LinearGradient
                colors={['#2563eb', '#3b82f6']}
                style={styles.serviceGradient}
              >
                <Car color="#ffffff" size={32} />
                <Text style={styles.serviceCardTitle}>Базовая мойка</Text>
                <Text style={styles.serviceCardPrice}>от 800 ₽</Text>
              </LinearGradient>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.serviceCard}
              onPress={() => router.push('/services' as any)}
            >
              <LinearGradient
                colors={['#1d4ed8', '#2563eb']}
                style={styles.serviceGradient}
              >
                <Star color="#ffffff" size={32} />
                <Text style={styles.serviceCardTitle}>Премиум мойка</Text>
                <Text style={styles.serviceCardPrice}>от 1500 ₽</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => router.push('/services' as any)}
          >
            <Text style={styles.viewAllButtonText}>Посмотреть все услуги</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Menu */}
        <View style={styles.navigationSection}>
          <View style={styles.navigationGrid}>
            <TouchableOpacity
              style={styles.navCard}
              onPress={() => router.push('/services' as any)}
            >
              <Car color="#2563eb" size={28} />
              <Text style={styles.navCardText}>Услуги</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.navCard}
              onPress={() => router.push('/gallery' as any)}
            >
              <Star color="#2563eb" size={28} />
              <Text style={styles.navCardText}>Галерея</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.navCard}
              onPress={() => router.push('/contact' as any)}
            >
              <Phone color="#2563eb" size={28} />
              <Text style={styles.navCardText}>Контакты</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroSection: {
    paddingTop: Platform.OS === 'web' ? 60 : 40,
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  heroContent: {
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 12,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  ctaButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 25,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  ctaButtonText: {
    color: '#2563eb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statCard: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
  servicesPreview: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
  serviceCard: {
    flex: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  serviceGradient: {
    padding: 20,
    alignItems: 'center',
  },
  serviceCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  serviceCardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  viewAllButton: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'center',
  },
  viewAllButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
  navigationSection: {
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  navigationGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    minWidth: 80,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  navCardText: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '600',
    marginTop: 8,
  },
});