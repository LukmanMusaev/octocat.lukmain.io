import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Star, Clock, Car } from "lucide-react-native";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get('window');

export default function GalleryScreen() {
  const beforeAfterImages = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
      service: "Премиум мойка",
      car: "BMW X5",
      duration: "90 мин"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      service: "Детейлинг",
      car: "Mercedes C-Class",
      duration: "3 часа"
    },
    {
      id: 3,
      before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&h=300&fit=crop",
      service: "Стандартная мойка",
      car: "Toyota Camry",
      duration: "60 мин"
    },
    {
      id: 4,
      before: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      service: "Премиум мойка",
      car: "Audi A4",
      duration: "85 мин"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Алексей М.",
      rating: 5,
      text: "Отличная работа! Машина стала как новая. Ребята приехали точно в срок и сделали все качественно.",
      service: "Премиум мойка"
    },
    {
      id: 2,
      name: "Мария К.",
      rating: 5,
      text: "Очень удобно, что приезжают домой. Качество на высоте, цены адекватные. Буду заказывать еще!",
      service: "Стандартная мойка"
    },
    {
      id: 3,
      name: "Дмитрий П.",
      rating: 5,
      text: "Детейлинг просто супер! Машина блестит как в салоне. Профессиональный подход, рекомендую всем.",
      service: "Детейлинг"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        color={index < rating ? "#fbbf24" : "#e5e7eb"}
        fill={index < rating ? "#fbbf24" : "transparent"}
      />
    ));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#2563eb', '#3b82f6']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Наши работы</Text>
        <Text style={styles.headerSubtitle}>
          Посмотрите результаты нашей работы
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Before/After Gallery */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>До и после</Text>
          {beforeAfterImages.map((item) => (
            <View key={item.id} style={styles.beforeAfterCard}>
              <View style={styles.imageContainer}>
                <View style={styles.imageWrapper}>
                  <Text style={styles.imageLabel}>До</Text>
                  <Image
                    source={{ uri: item.before }}
                    style={styles.image}
                    contentFit="cover"
                  />
                </View>
                <View style={styles.imageWrapper}>
                  <Text style={styles.imageLabel}>После</Text>
                  <Image
                    source={{ uri: item.after }}
                    style={styles.image}
                    contentFit="cover"
                  />
                </View>
              </View>
              
              <View style={styles.imageInfo}>
                <View style={styles.imageInfoRow}>
                  <Car color="#2563eb" size={16} />
                  <Text style={styles.imageInfoText}>{item.car}</Text>
                </View>
                <View style={styles.imageInfoRow}>
                  <Star color="#2563eb" size={16} />
                  <Text style={styles.imageInfoText}>{item.service}</Text>
                </View>
                <View style={styles.imageInfoRow}>
                  <Clock color="#2563eb" size={16} />
                  <Text style={styles.imageInfoText}>{item.duration}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Testimonials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Отзывы клиентов</Text>
          {testimonials.map((testimonial) => (
            <View key={testimonial.id} style={styles.testimonialCard}>
              <View style={styles.testimonialHeader}>
                <Text style={styles.testimonialName}>{testimonial.name}</Text>
                <View style={styles.ratingContainer}>
                  {renderStars(testimonial.rating)}
                </View>
              </View>
              <Text style={styles.testimonialText}>{testimonial.text}</Text>
              <View style={styles.testimonialService}>
                <Text style={styles.testimonialServiceText}>
                  Услуга: {testimonial.service}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Наша статистика</Text>
          <View style={styles.statsContainer}>
            <LinearGradient
              colors={['#2563eb', '#3b82f6']}
              style={styles.statCard}
            >
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Довольных клиентов</Text>
            </LinearGradient>
            
            <LinearGradient
              colors={['#059669', '#10b981']}
              style={styles.statCard}
            >
              <Text style={styles.statNumber}>98%</Text>
              <Text style={styles.statLabel}>Положительных отзывов</Text>
            </LinearGradient>
            
            <LinearGradient
              colors={['#dc2626', '#ef4444']}
              style={styles.statCard}
            >
              <Text style={styles.statNumber}>2 года</Text>
              <Text style={styles.statLabel}>Опыт работы</Text>
            </LinearGradient>
          </View>
        </View>

        {/* Quality Guarantee */}
        <View style={styles.guaranteeSection}>
          <LinearGradient
            colors={['#f8fafc', '#ffffff']}
            style={styles.guaranteeCard}
          >
            <Text style={styles.guaranteeTitle}>Гарантия качества</Text>
            <Text style={styles.guaranteeText}>
              Мы гарантируем высокое качество всех наших услуг. 
              Если результат вас не устроит, мы переделаем работу бесплатно 
              или вернем деньги.
            </Text>
            <View style={styles.guaranteeFeatures}>
              <View style={styles.guaranteeFeature}>
                <View style={styles.guaranteeBullet} />
                <Text style={styles.guaranteeFeatureText}>
                  Профессиональные мастера
                </Text>
              </View>
              <View style={styles.guaranteeFeature}>
                <View style={styles.guaranteeBullet} />
                <Text style={styles.guaranteeFeatureText}>
                  Качественные материалы
                </Text>
              </View>
              <View style={styles.guaranteeFeature}>
                <View style={styles.guaranteeBullet} />
                <Text style={styles.guaranteeFeatureText}>
                  Современное оборудование
                </Text>
              </View>
            </View>
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
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  beforeAfterCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  imageWrapper: {
    flex: 1,
  },
  imageLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748b',
    marginBottom: 8,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  imageInfo: {
    gap: 8,
  },
  imageInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageInfoText: {
    fontSize: 14,
    color: '#64748b',
    marginLeft: 8,
  },
  testimonialCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  testimonialHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  testimonialText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 12,
  },
  testimonialService: {
    backgroundColor: '#eff6ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  testimonialServiceText: {
    fontSize: 12,
    color: '#2563eb',
    fontWeight: '600',
  },
  statsContainer: {
    gap: 16,
  },
  statCard: {
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    opacity: 0.9,
  },
  guaranteeSection: {
    marginTop: 20,
  },
  guaranteeCard: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  guaranteeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 12,
    textAlign: 'center',
  },
  guaranteeText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  guaranteeFeatures: {
    gap: 12,
  },
  guaranteeFeature: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guaranteeBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563eb',
    marginRight: 12,
  },
  guaranteeFeatureText: {
    fontSize: 14,
    color: '#64748b',
    flex: 1,
  },
});