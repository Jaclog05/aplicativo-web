import React from 'react'
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

function PdfReport({data, appraisal, sqMeterPrice, mapImageUrl, zipCode}) {

  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12, backgroundColor: '#F5F5F5' },
    header: { backgroundColor: '#003366', padding: 10, marginBottom: 10 },
    headerText: { color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    section: { padding: 10, backgroundColor: 'white', marginBottom: 5, borderRadius: 5 },
    midSection: { padding: 10, marginBottom: 5, borderRadius: 5, width: '50%' },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#003366' },
    label: { fontWeight: 'bold', color: '#555' },
    value: { fontSize: 13, fontWeight: 'bold', marginBottom: 5, color: '#222' },
    separator: { marginVertical: 10, borderBottomWidth: 1, borderBottomColor: '#003366' },
    highlight: { fontSize: 16, fontWeight: 'bold', color: '#003366', marginBottom: 5 },
    row: { flexDirection: 'row', alignItems: 'stretch' },
    rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
    image: { width: 200, height: 200, marginTop: 10, borderRadius: 5 },
  });

  const formatPrice = (price) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);

  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Reporte de Avalúo</Text>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.title}>Información del Usuario</Text>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{data.username}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{data.email}</Text>
          </View>

          <View style={styles.rowBetween}>
            <View style={styles.midSection}>
              <Text style={styles.title}>Datos del Inmueble</Text>
              <View style={styles.section}>
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.value}>{data.address}</Text>
              </View>
              <View style={{...styles.row, gap: '10px'}}>
                <View style={{...styles.midSection, backgroundColor: 'white'}}>
                  <Text style={styles.label}>Ref. Catastral:</Text>
                  <Text style={styles.value}>{data.houseReference}</Text>
                </View>
                <View style={{...styles.midSection, backgroundColor: 'white'}}>
                  <Text style={styles.label}>Codigo Postal:</Text>
                  <Text style={styles.value}>{zipCode ? zipCode : "--"}</Text>
                </View>
              </View>
              <View style={{...styles.row, gap: '10px'}}>
                <View style={{...styles.midSection, backgroundColor: 'white'}}>
                  <Text style={styles.label}>Estrato:</Text>
                  <Text style={styles.value}>{data.stratum}</Text>
                </View>
                <View style={{...styles.midSection, backgroundColor: 'white'}}>
                  <Text style={styles.label}>Tipo:</Text>
                  <Text style={styles.value}>{data.type}</Text>
                </View>
              </View>
              <View style={{...styles.row, gap: '10px'}}>
                <View style={{...styles.midSection, backgroundColor: 'white'}}>
                  <Text style={styles.label}>Estado:</Text>
                  <Text style={styles.value}>{data.status}</Text>
                </View>
                <View style={{...styles.midSection, backgroundColor: 'white'}}>
                  <Text style={styles.label}>Área (m²):</Text>
                  <Text style={styles.value}>{data.area}</Text>
                </View>
              </View>
              <View style={styles.section}>
                <Text style={styles.label}>Precio por metro cuadrado:</Text>
                <Text style={styles.value}>${formatPrice(sqMeterPrice)}</Text>
              </View>
            </View>

            <View style={styles.midSection}>
              <Text style={styles.title}>Ubicación del Inmueble</Text>
              <Image style={styles.image} src={mapImageUrl || mapImage} />
            </View>
          </View>
          
          <View style={styles.section}>
            <Text style={styles.title}>Resultados de Avalúo</Text>
            <View style={{...styles.row, justifyContent: 'space-around'}}>
              <View>
                <Text style={styles.highlight}>Valor Estimado:</Text>
                <Text style={styles.value}>${formatPrice(appraisal)}</Text>
              </View>
              <View>
                <Text style={styles.highlight}>Valor en Oferta:</Text>
                <Text style={styles.value}>${formatPrice(data.price)}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
  )
}

export default PdfReport;