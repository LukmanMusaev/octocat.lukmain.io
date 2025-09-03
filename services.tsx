import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Car, Star, Sparkles, Shield } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ServicesScreen() {
  const services = [
    {
      id: 1,
      icon: <Car color="#ffffff" size={32} />,
      title: "Базовая мойка",
      price: "800 ₽",
      duration: "30-45 мин",
      description: "Внешняя мойка кузова, дисков, стекол",
      features: [
        "Мойка кузова",
        "Мойка дисков",
        "Мойка стекол",
        "Сушка полотенцем"
      ],
      gradient: ['#3b82f6', '#2563eb'] as const
    },
    {
      id: 2,
      icon: <Star color="#ffffff" size={32} />,
      title: "Стандартная мойка",
      price: "1200 ₽",
      duration: "45-60 мин",
      description: "Внешняя мойка + базовая уборка салона",
      features: [
        "Все из базовой мойки",
        "Пылесос салона",
        "Протирка панели",
        "Мойка ковриков"
      ],
      gradient: ['#2563eb', '#1d4ed8'] as const
    },
    {
      id: 3,
      icon: <Sparkles color="#ffffff" size={32} />,
      title: "Премиум мойка",
      price: "1800 ₽",
      duration: "60-90 мин",
      description: "Полная мойка + детальная уборка салона",
      features: [
        "Все из стандартной мойки",
        "Химчистка сидений",
        "Полировка панели",
        "Ароматизация салона",
        "Чернение резины"
      ],
      gradient: ['#1d4ed8', '#1e40af'] as const
    },
    {
      id: 4,
      icon: <Shield color="#ffffff" size={32} />,
      title: "Детейлинг",
      price: "от 3000 ₽",
      duration: "2-4 часа",
      description: "Профессиональная полировка и защита",
      features: [
        "Все из премиум мойки",
        "Полировка кузова",
        "Нанесение воска",
        "Обработка кожи",
        "Защита стекол"
      ],
      gradient: ['#1e40af', '#1e3a8a'] as const
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#2563eb', '#3b82f6']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Наши услуги</Text>
        <Text style={styles.headerSubtitle}>
          Выберите подходящий пакет услуг для вашего автомобиля
        </Text>
      </LinearGradient>

      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <View key={service.id} style={styles.serviceCard}>
            <LinearGradient
              colors={service.gradient}
              style={styles.serviceHeader}
            >
              <View style={styles.serviceIconContainer}>
                {service.icon}
              </View>
              <View style={styles.serviceHeaderText}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.servicePrice}>{service.price}</Text>
                <Text style={styles.serviceDuration}>{service.duration}</Text>
              </View>
            </LinearGradient>

            <View style={styles.serviceContent}>
              <Text style={styles.serviceDescription}>
                {service.description}
              </Text>
              
              <Text style={styles.featuresTitle}>Что входит:</Text>
              {service.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <View style={styles.featureBullet} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}

              <TouchableOpacity
                style={styles.orderButton}
                onPress={() => router.push('/booking' as any)}
              >
                <Text style={styles.orderButtonText}>Заказать</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.additionalInfo}>
        <Text style={styles.infoTitle}>Дополнительная информация</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            • Работаем с 8:00 до 22:00{'\n'}
            • Выезжаем по всему городу{'\n'}
            • Используем профессиональную химию{'\n'}
            • Гарантия качества{'\n'}
            • Оплата наличными или картой
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e2e8f0',
    textAlign: 'center',
    lineHeight: 22,
  },
  servicesContainer: {
    padding: 20,
    gap: 20,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceHeader: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceHeaderText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  servicePrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 2,
  },
  serviceDuration: {
    fontSize: 14,
    color: '#e2e8f0',
  },
  serviceContent: {
    padding: 20,
  },
  serviceDescription: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 16,
    lineHeight: 22,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2563eb',
    marginRight: 12,
  },
  featureText: {
    fontSize: 14,
    color: '#64748b',
    flex: 1,
  },
  orderButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 16,
  },
  orderButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalInfo: {
    padding: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
  },
});