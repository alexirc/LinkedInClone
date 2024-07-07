import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBarSearch from '@/components/TopbarSearch'
import CategoryHorizontalChips from '@/components/notifications/CategoryHorizontalChips'
import CardSubGroup from '@/components/cards/CardSubGroups';
import EmploymentCard from '@/components/cards/employmentCard';
import LastSearchCard from '@/components/cards/LastSearchCard';

export default function Jobs() {
  const categories = ['Mis Empleos', 'Preferencias', 'Anunciar un empleo gratis'];
  const employments = [
    {
      "title": "DevOps Engineer",
      "businessImage": "https://pbs.twimg.com/profile_images/876818004411129856/YpdvPggy_400x400.jpg",
      "business": "Solunegocios An AVOS Tech Company",
      "location": "Región Metropolitana de Santiago, Chile (En remoto)",
      "category": "Envía un mensaje directo al anunciante",
      "categoryImage": "https://storage2.snappages.site/7vfzpkcbeb/assets/images/10347243_288x288_500.png",
      "type": "Promocionado",
      "application": "Solicitud sencilla",
      "applicationImage": "https://cdn-icons-png.flaticon.com/256/174/174857.png",
      "verified": false
    },
    {
      "title": "Junior C++ Developer",
      "businessImage": "https://pbs.twimg.com/profile_images/1753265803191795712/qg3YENmV_400x400.png",
      "business": "EPAM SYSTEM",
      "location": "Chile (En remoto)",
      "category": "En busca de personal",
      "categoryImage": "https://storage2.snappages.site/7vfzpkcbeb/assets/images/10347243_288x288_500.png",
      "type": "Promocionado",
      "application": "17 solicitudes",
      "applicationImage": null,
      "verified": true
    },
    {
      "title": "DevOps Engineer",
      "businessImage": "https://pbs.twimg.com/profile_images/876818004411129856/YpdvPggy_400x400.jpg",
      "business": "Solunegocios An AVOS Tech Company",
      "location": "Región Metropolitana de Santiago, Chile (En remoto)",
      "category": "Envía un mensaje directo al anunciante",
      "categoryImage": "https://storage2.snappages.site/7vfzpkcbeb/assets/images/10347243_288x288_500.png",
      "type": "Promocionado",
      "application": "Solicitud sencilla",
      "applicationImage": "https://cdn-icons-png.flaticon.com/256/174/174857.png",
      "verified": false
    },
  ];
  const lastSearch = [
    { "title": "Programador full stack", "news": "17 nuevos", "location": "Chile", "alertType": "Alerta activada", "jobType": "Remote" },
    { "title": "data analyst", "news": "2 nuevos", "location": "Chile", "alertType": null, "jobType": null },
    { "title": "data analyst junior", "news": "2 nuevos", "location": "Chile", "alertType": null, "jobType": null },
  ];
  const seeAll = () => {
    console.log('see all');
  }
  return (
    <SafeAreaView style={styles.container}>
      <TopBarSearch />
      <CategoryHorizontalChips categories={categories} selectedCategory='' />
      <ScrollView horizontal={false} style={{ flex: 1, backgroundColor: '#F0EBE3' }}>
        <CardSubGroup
          title='Descubre los mejores empleos para ti'
          bottomAction={seeAll}
          bottomActionLabel='Mostrar todo'
          marginTop={10}
        >
          {employments.map((data, index) => (
            <EmploymentCard
              key={index}
              title={data.title}
              business={data.business}
              businessImage={data.businessImage}
              location={data.location}
              category={data.category}
              categoryImage={data.categoryImage}
              type={data.type}
              application={data.application}
              applicationImage={data.applicationImage}
            />
          ))
          }
        </CardSubGroup>
        <CardSubGroup
          title='Búsquedas recientes'
          bottomAction={seeAll}
          bottomActionLabel='Mostrar más'
          deleteButton
          marginTop={10}
        >
          {lastSearch.map((data, index) => (
            <LastSearchCard 
              key={index} 
              title={data.title}
              news={data.news}
              location={data.location}
              alertType={data.alertType}
              jobType={data.jobType}
              />
          ))
          }
        </CardSubGroup>
        <CardSubGroup
          title='Empleos donde figurarías entre los principales solicitantes'
          subtitle='En función de tus aptitudes y probabilidades de recibir respuesta'
          bottomAction={seeAll}
          bottomActionLabel='Mostrar todo'
          marginTop={10}
          isPremium
        >
          {employments.map((data, index) => (
            <EmploymentCard
              key={index}
              title={data.title}
              business={data.business}
              businessImage={data.businessImage}
              location={data.location}
              category={data.category}
              categoryImage={data.categoryImage}
              type={data.type}
              application={data.application}
              applicationImage={data.applicationImage}
            />
          ))
          }
        </CardSubGroup>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})