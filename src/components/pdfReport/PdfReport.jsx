import React from 'react'
import { Svg, Path, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';


function PdfReport({data, appraisal, sqMeterPrice, mapImageUrl, zipCode, plusParams}) {

  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 12, backgroundColor: '#F5F5F5' },
    header: { backgroundColor: '#003366', padding: 10, marginBottom: 10 },
    headerText: { color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    section: { padding: 10, backgroundColor: 'white', marginBottom: 5, borderRadius: 5 },
    midSection: { padding: 10, marginBottom: 5, borderRadius: 5, width: '50%' },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#003366' },
    label: { fontWeight: 'bold', color: '#555' },
    value: { fontSize: 13, fontWeight: 'bold', marginBottom: 5, color: '#222', marginVertical: 'auto' },
    separator: { marginVertical: 10, borderBottomWidth: 1, borderBottomColor: '#003366' },
    highlight: { fontSize: 16, fontWeight: 'bold', color: '#003366', marginBottom: 5 },
    row: { flexDirection: 'row', alignItems: 'stretch' },
    rowBetween: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
    image: { width: 200, height: 200, marginTop: 10, borderRadius: 5 },
    star: { fontSize: 14, color: '#EFB810', marginRight: 4, marginVertical: 'auto' },
    termTitle: { fontSize: 12, fontWeight: 'bold', marginBottom: 6, color: '#000000' },
    termText: { fontSize: 11, marginBottom: 4, textAlign: 'justify' }
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

          {
            plusParams.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.title}>Parámetros Plus</Text>
                {plusParams.map((param, idx) => (
                    <View
                      key={idx}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 5
                      }}
                    >
                      <Svg width="15" height="15" viewBox="0 0 16 16" style={styles.star}>
                        <Path
                          d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          fill="#EFB810"
                        />
                      </Svg>
                      <Text style={styles.value}>{param.paramName}</Text>
                    </View>
                  ))
                }
              </View>
            )
          }
        </Page>

        <Page size="A4" style={styles.page}>
          <View>
            <Text style={{...styles.title, textAlign: 'center', color: '#000000'}}>Términos y Condiciones de Uso</Text>

            <Text style={styles.termTitle}>1. Finalidad del aplicativo</Text>
            <Text style={styles.termText}>
              Este aplicativo web ha sido desarrollado como parte del proyecto de investigación titulado:
              “Instrumento de medición basado en parámetros de calidad para el cálculo del precio de la
              vivienda no VIS como propuesta piloto aplicado en la ciudad de Barranquilla”, en el marco
              de la línea de Dinámicas Inmobiliarias del Instituto Geográfico Agustín Codazzi (IGAC).
              Su propósito es brindar una estimación referencial del costo aproximado de la vivienda no
              VIS a partir de parámetros ingresados por el usuario, utilizando una metodología académica
              que considera factores de calidad, localización y tipología del inmueble.
            </Text>

            <Text style={styles.termTitle}>2. Carácter no vinculante</Text>
            <Text style={styles.termText}>
              Los resultados generados por esta herramienta tienen carácter puramente informativo y estimativo.
              No constituyen un avalúo oficial ni reemplazan los avalúos realizados por profesionales acreditados.
              Esta herramienta no está regulada por la Ley 1673 de 2013 ni por el Decreto 556 de 2014, que regulan
              la actividad del avaluador en Colombia. Tampoco cumple con los estándares exigidos por las Normas
              Internacionales de Valoración (IVS). Por tanto, sus resultados no tienen validez legal, fiscal,
              comercial ni judicial.
            </Text>

            <Text style={styles.termTitle}>3. Limitación de responsabilidad</Text>
            <Text style={styles.termText}>
              Los desarrolladores de esta herramienta no asumen responsabilidad por decisiones tomadas a partir
              de los valores estimados, ni por las posibles diferencias entre los resultados obtenidos y los
              precios reales del mercado inmobiliario. El uso de la herramienta implica que el usuario acepta
              plenamente la naturaleza estimativa del resultado y comprende sus limitaciones técnicas y jurídicas.
            </Text>

            <Text style={styles.termTitle}>4. Propiedad intelectual</Text>
            <Text style={styles.termText}>
              La metodología, estructura, textos, elementos visuales y funcionamiento general de este aplicativo
              son propiedad intelectual del equipo investigador. Está prohibida su reproducción total o parcial
              sin previa autorización escrita.
            </Text>

            <Text style={styles.termTitle}>5. Protección de datos personales</Text>
            <Text style={styles.termText}>
              La información suministrada por los usuarios (como características del inmueble, ubicación aproximada
              u otras variables) es recolectada únicamente con fines analíticos y para la generación del resultado
              estimado. No se solicitarán datos personales sensibles como nombre, documento de identidad o información
              financiera. Los datos serán tratados bajo los principios de legalidad, seguridad, confidencialidad y
              finalidad, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013, sobre protección de datos personales
              en Colombia. En ningún caso la información será comercializada ni compartida con terceros sin autorización
              expresa del usuario.
            </Text>

            <Text style={styles.termTitle}>6. Aceptación de los términos</Text>
            <Text style={styles.termText}>
              El uso de esta herramienta implica la aceptación expresa de estos Términos y Condiciones, así como la
              comprensión de sus limitaciones y alcance. Si el usuario no está de acuerdo con alguna de estas disposiciones,
              se recomienda abstenerse de utilizar el aplicativo.
            </Text>
          </View>
        </Page>
      </Document>
  )
}

export default PdfReport;