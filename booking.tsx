import { LinearGradient } from "expo-linear-gradient";
import { Calendar, Clock, MapPin, Car, User, Phone } from "lucide-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

export default function BookingScreen() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');

  const services = [
    { id: 'basic', name: 'Базовая мойка', price: '800 ₽' },
    { id: 'standard', name: 'Стандартная мойка', price: '1200 ₽' },
    { id: 'premium', name: 'Премиум мойка', price: '1800 ₽' },
    { id: 'detailing', name: 'Детейлинг', price: 'от 3000 ₽' },
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00',
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const dates = [
    'Сегодня', 'Завтра', '15.01', '16.01', '17.01', '18.01', '19.01'
  ];

  const handleBooking = () => {
    if (!selectedService || !selectedDate || !selectedTime || !address || !name || !phone) {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все обязательные поля');
      return;
    }

    Alert.alert(
      'Заказ оформлен!',
      `Спасибо, ${name}! Ваш заказ принят. Мы свяжемся с вами в ближайшее время для подтверждения.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#2563eb', '#3b82f6']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Заказать услугу</Text>
        <Text style={styles.headerSubtitle}>
          Заполните форму и мы приедем в удобное время
        </Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        {/* Service Selection */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Car color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Выберите услугу</Text>
          </View>
          <View style={styles.serviceGrid}>
            {services.map((service) => (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceOption,
                  selectedService === service.id && styles.serviceOptionSelected
                ]}
                onPress={() => setSelectedService(service.id)}
              >
                <Text style={[
                  styles.serviceOptionText,
                  selectedService === service.id && styles.serviceOptionTextSelected
                ]}>
                  {service.name}
                </Text>
                <Text style={[
                  styles.serviceOptionPrice,
                  selectedService === service.id && styles.serviceOptionPriceSelected
                ]}>
                  {service.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Date Selection */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Calendar color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Выберите дату</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.dateGrid}>
              {dates.map((date) => (
                <TouchableOpacity
                  key={date}
                  style={[
                    styles.dateOption,
                    selectedDate === date && styles.dateOptionSelected
                  ]}
                  onPress={() => setSelectedDate(date)}
                >
                  <Text style={[
                    styles.dateOptionText,
                    selectedDate === date && styles.dateOptionTextSelected
                  ]}>
                    {date}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Time Selection */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Clock color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Выберите время</Text>
          </View>
          <View style={styles.timeGrid}>
            {timeSlots.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeOption,
                  selectedTime === time && styles.timeOptionSelected
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[
                  styles.timeOptionText,
                  selectedTime === time && styles.timeOptionTextSelected
                ]}>
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Contact Information */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <User color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Контактная информация</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Имя *</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Введите ваше имя"
              placeholderTextColor="#94a3b8"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Телефон *</Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="+7 (999) 123-45-67"
              placeholderTextColor="#94a3b8"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Модель автомобиля</Text>
            <TextInput
              style={styles.input}
              value={carModel}
              onChangeText={setCarModel}
              placeholder="Например: Toyota Camry"
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        {/* Address */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MapPin color="#2563eb" size={20} />
            <Text style={styles.sectionTitle}>Адрес</Text>
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Адрес выезда *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={address}
              onChangeText={setAddress}
              placeholder="Укажите точный адрес, где нужно помыть автомобиль"
              placeholderTextColor="#94a3b8"
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        {/* Order Button */}
        <TouchableOpacity
          style={styles.orderButton}
          onPress={handleBooking}
        >
          <LinearGradient
            colors={['#2563eb', '#3b82f6']}
            style={styles.orderButtonGradient}
          >
            <Text style={styles.orderButtonText}>Оформить заказ</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            * - обязательные поля{'\n'}
            После оформления заказа мы свяжемся с вами для подтверждения
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
  },
  formContainer: {
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    marginLeft: 8,
  },
  serviceGrid: {
    gap: 12,
  },
  serviceOption: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceOptionSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  serviceOptionText: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  serviceOptionTextSelected: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  serviceOptionPrice: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: 'bold',
  },
  serviceOptionPriceSelected: {
    color: '#2563eb',
  },
  dateGrid: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 4,
  },
  dateOption: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    minWidth: 80,
    alignItems: 'center',
  },
  dateOptionSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  dateOptionText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  dateOptionTextSelected: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  timeOption: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    minWidth: 70,
    alignItems: 'center',
  },
  timeOptionSelected: {
    borderColor: '#2563eb',
    backgroundColor: '#eff6ff',
  },
  timeOptionText: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '500',
  },
  timeOptionTextSelected: {
    color: '#2563eb',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#e2e8f0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1e293b',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  orderButton: {
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },
  orderButtonGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
  },
  footerText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 18,
  },
});