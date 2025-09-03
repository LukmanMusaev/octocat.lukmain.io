import { LinearGradient } from "expo-linear-gradient";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,

} from "react-native";

export default function ContactScreen() {
  const handleCall = () => {
    Linking.openURL('tel:+79991234567');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@aquaclean.ru');
  };

  const handleWhatsApp = () => {
    Linking.openURL('https://wa.me/79991234567');
  };

  const handleTelegram = () => {
    Linking.openURL('https://t.me/aquaclean_bot');
  };

  const contactMethods = [
    {
      icon: <Phone color="#ffffff" size={24} />,
      title: "Телефон",
      value: "+7 (999) 123-45-67",
      description: "Звоните с 8:00 до 22:00",
      action: handleCall,
      gradient: ['#2563eb', '#3b82f6'] as const
    },
    {
      icon: <MessageCircle color="#ffffff" size={24} />,
      title: "WhatsApp",
      value: "Написать в WhatsApp",
      description: "Быстрые ответы 24/7",
      action: handleWhatsApp,
      gradient: ['#059669', '#10b981'] as const
    },
    {
      icon: <MessageCircle color="#ffffff" size={24} />,
      title: "Telegram",
      value: "@aquaclean_bot",
      description: "Бот для быстрого заказа",
      action: handleTelegram,
      gradient: ['#0ea5e9', '#3b82f6'] as const
    },
    {
      icon: <Mail color="#ffffff" size={24} />,
      title: "Email",
      value: "info@aquaclean.ru",
      description: "Ответим в течение часа",
      action: handleEmail,
      gradient: ['#dc2626', '#ef4444'] as const
    }
  ];

  const workingHours = [
    { day: "Понедельник - Пятница", hours: "8:00 - 22:00" },
    { day: "Суббота - Воскресенье", hours: "9:00 - 21:00" },
  ];

  const serviceAreas = [
    "Центральный район",
    "Северный район", 
    "Южный район",
    "Восточный район",
    "Западный район",
    "Пригород (доплата 200₽)"
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#2563eb', '#3b82f6']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Контакты</Text>
        <Text style={styles.headerSubtitle}>
          Свяжитесь с нами удобным способом
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Contact Methods */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Способы связи</Text>
          <View style={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={styles.contactCard}
                onPress={method.action}
              >
                <LinearGradient
                  colors={method.gradient}
                  style={styles.contactIcon}
                >
                  {method.icon}
                </LinearGradient>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactTitle}>{method.title}</Text>
                  <Text style={styles.contactValue}>{method.value}</Text>
                  <Text style={styles.contactDescription}>{method.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Working Hours */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Clock color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Режим работы</Text>
          </View>
          <View style={styles.hoursCard}>
            {workingHours.map((schedule, index) => (
              <View key={index} style={styles.hoursRow}>
                <Text style={styles.hoursDay}>{schedule.day}</Text>
                <Text style={styles.hoursTime}>{schedule.hours}</Text>
              </View>
            ))}
            <View style={styles.hoursNote}>
              <Text style={styles.hoursNoteText}>
                Принимаем заказы круглосуточно через WhatsApp и Telegram
              </Text>
            </View>
          </View>
        </View>

        {/* Service Areas */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MapPin color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Зоны обслуживания</Text>
          </View>
          <View style={styles.areasCard}>
            {serviceAreas.map((area, index) => (
              <View key={index} style={styles.areaItem}>
                <View style={styles.areaBullet} />
                <Text style={styles.areaText}>{area}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Company Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>О компании</Text>
          <View style={styles.infoCard}>
            <Text style={styles.companyName}>AquaClean</Text>
            <Text style={styles.companyDescription}>
              Профессиональная выездная автомойка с опытом работы более 2 лет. 
              Используем только качественные средства и современное оборудование. 
              Гарантируем высокое качество услуг и индивидуальный подход к каждому клиенту.
            </Text>
            
            <View style={styles.guarantees}>
              <Text style={styles.guaranteesTitle}>Наши гарантии:</Text>
              <Text style={styles.guaranteesText}>
                • Качество выполненных работ{'\n'}
                • Сохранность вашего автомобиля{'\n'}
                • Пунктуальность и профессионализм{'\n'}
                • Фиксированные цены без доплат
              </Text>
            </View>
          </View>
        </View>

        {/* Quick Order */}
        <View style={styles.quickOrderSection}>
          <LinearGradient
            colors={['#2563eb', '#3b82f6']}
            style={styles.quickOrderCard}
          >
            <Text style={styles.quickOrderTitle}>Быстрый заказ</Text>
            <Text style={styles.quickOrderText}>
              Позвоните нам прямо сейчас и получите скидку 10% на первый заказ!
            </Text>
            <TouchableOpacity
              style={styles.quickOrderButton}
              onPress={handleCall}
            >
              <Phone color="#2563eb" size={20} />
              <Text style={styles.quickOrderButtonText}>Позвонить сейчас</Text>
            </TouchableOpacity>
          </LinearGradient>
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
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginLeft: 8,
  },
  contactGrid: {
    gap: 16,
  },
  contactCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
    marginBottom: 2,
  },
  contactDescription: {
    fontSize: 12,
    color: '#64748b',
  },
  hoursCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  hoursDay: {
    fontSize: 14,
    color: '#64748b',
    flex: 1,
  },
  hoursTime: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  hoursNote: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#eff6ff',
    borderRadius: 8,
  },
  hoursNoteText: {
    fontSize: 12,
    color: '#2563eb',
    textAlign: 'center',
  },
  areasCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  areaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  areaBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2563eb',
    marginRight: 12,
  },
  areaText: {
    fontSize: 14,
    color: '#64748b',
    flex: 1,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 12,
  },
  companyDescription: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  guarantees: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
  },
  guaranteesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
  },
  guaranteesText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
  },
  quickOrderSection: {
    marginTop: 20,
  },
  quickOrderCard: {
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  quickOrderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  quickOrderText: {
    fontSize: 14,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  quickOrderButton: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  quickOrderButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});