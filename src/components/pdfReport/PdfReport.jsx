import React from 'react';
import { Svg, Path, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

function PdfReport({data, appraisal, sqMeterPrice, mapImageUrl, zipCode, plusParams}) {

  const styles = StyleSheet.create({
    page: { padding: 30, fontSize: 10, backgroundColor: '#FFFFFF' },
    header: {
      marginBottom: 15,
      borderBottomWidth: 2,
      borderBottomColor: '#003366',
      paddingBottom: 5
    },
    headerMain: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 5
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#003366',
      textTransform: 'uppercase'
    },
    headerSubtitle: {
      fontSize: 9,
      color: '#555555'
    },
    section: {
      marginBottom: 15,
      borderLeftWidth: 3,
      borderLeftColor: '#003366',
      paddingLeft: 10
    },
    sectionTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#003366',
      textTransform: 'uppercase'
    },
    gridContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15
    },
    gridColumn: {
      width: '48%'
    },
    table: {
      width: '100%',
      marginVertical: 5
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
      paddingVertical: 5
    },
    tableHeader: {
      width: '40%',
      fontWeight: 'bold',
      color: '#555555',
      fontSize: 10
    },
    tableValue: {
      width: '60%',
      fontSize: 10
    },
    valueHighlight: {
      fontWeight: 'bold',
      color: '#003366',
      fontSize: 12
    },
    appraisalContainer: {
      backgroundColor: '#F8F9FA',
      padding: 15,
      borderRadius: 5,
      marginTop: 10,
      borderWidth: 1,
      borderColor: '#EEEEEE'
    },
    appraisalValue: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#003366',
      textAlign: 'center',
      marginBottom: 3
    },
    appraisalSubtitle: {
      fontSize: 10,
      color: '#555555',
      textAlign: 'center'
    },
    mapContainer: {
      borderWidth: 1,
      borderColor: '#EEEEEE',
      padding: 5,
      borderRadius: 3,
      marginTop: 5
    },
    mapImage: {
      width: '100%',
      height: 120,
      borderRadius: 3
    },
    plusContainer: {
      marginTop: 10
    },
    plusItem: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 8
    },
    plusTextContainer: {
      flex: 1
    },
    plusTitle: {
      fontWeight: 'bold',
      fontSize: 10
    },
    plusDescription: {
      fontSize: 9,
      color: '#555555'
    },
    included: { color: '#008000' },
    excluded: { color: '#FF0000' },
    signatureContainer: {
      marginTop: 25,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: '#CCCCCC'
    },
    signatureLine: {
      width: '100%',
      marginTop: 20,
      borderTopWidth: 1,
      borderTopColor: '#000000',
      paddingTop: 5
    },
    signatureText: {
      fontSize: 9,
      textAlign: 'center'
    },
    termsPage: {
      padding: 30,
      fontSize: 10
    },
    termTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#000000',
      marginTop: 10
    },
    termText: {
      fontSize: 10,
      marginBottom: 8,
      textAlign: 'justify',
      lineHeight: 1.4
    },
    plusStatus: {
      fontSize: 9,
      fontStyle: 'italic',
      color: '#555555',
      marginTop: 2
    }
  });

  const formatPrice = (price) => new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(price);

  // Calcular diferencia porcentual
  const offerPrice = data.price;
  const difference = ((offerPrice - appraisal) / appraisal * 100).toFixed(1);
  const differenceText = `${difference}% ${offerPrice >= appraisal ? 'sobre' : 'bajo'} valor estimado`;

  // Fecha actual
  const today = new Date();
  const formattedDate = today.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Generar código de reporte único
  const reportCode = `AV-${today.getFullYear()}-${Math.floor(Math.random()*10000)}`;

  return (
    <Document>
      <Page size="A4" style={styles.termsPage}>
        <Text style={{
          ...styles.sectionTitle,
          textAlign: 'center',
          borderLeftWidth: 0,
          paddingLeft: 0
        }}>
          Términos y Condiciones de Uso
        </Text>

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
      </Page>

      <Page size="A4" style={styles.termsPage}>
        <Text style={{
          ...styles.sectionTitle,
          textAlign: 'center',
          borderLeftWidth: 0,
          paddingLeft: 0,
          marginBottom: 15
        }}>
          Funcionalidad del Valor Plus
        </Text>

        <Text style={styles.termText}>
          Además de la estimación técnica del valor de la vivienda no VIS, esta herramienta incorpora un
          componente cualitativo denominado valor plus, representado mediante estrellas. Este sistema tiene
          como objetivo resaltar ciertas condiciones complementarias del inmueble que, aunque no modifican
          directamente su precio estimado, aportan valor agregado en términos de funcionalidad, bienestar y
          percepción subjetiva del usuario.
        </Text>

        <Text style={styles.termText}>
          El valor plus se expresa a través de un máximo de cuatro estrellas, donde cada estrella corresponde
          a uno de los siguientes factores independientes:
        </Text>

        <View style={{ marginLeft: 10, marginBottom: 10, marginTop: 10 }}>
          <Text style={{ ...styles.termText, fontWeight: 'bold' }}>
            Domótica:
          </Text>
          <Text style={{ ...styles.termText, marginLeft: 10 }}>
            La vivienda cuenta con sistemas inteligentes de automatización como control de luces,
            climatización, seguridad o asistencia remota.
          </Text>

          <Text style={{ ...styles.termText, fontWeight: 'bold', marginTop: 8 }}>
            Seguridad del sector:
          </Text>
          <Text style={{ ...styles.termText, marginLeft: 10 }}>
            El entorno inmediato del inmueble se percibe como seguro, con baja incidencia
            delictiva, iluminación adecuada y/o presencia de vigilancia o redes comunitarias.
          </Text>

          <Text style={{ ...styles.termText, fontWeight: 'bold', marginTop: 8 }}>
            Cercanía al lugar de trabajo:
          </Text>
          <Text style={{ ...styles.termText, marginLeft: 10 }}>
            La ubicación de la vivienda permite un desplazamiento eficiente al lugar
            habitual de trabajo, lo que implica ahorro de tiempo y mejora en la calidad de vida.
          </Text>

          <Text style={{ ...styles.termText, fontWeight: 'bold', marginTop: 8 }}>
            Percepción subjetiva del entorno:
          </Text>
          <Text style={{ ...styles.termText, marginLeft: 10 }}>
            El usuario considera que el entorno del inmueble es agradable,
            tranquilo o estéticamente valorado. Esta percepción puede incluir aspectos como el ambiente barrial,
            zonas verdes, limpieza urbana, ruido, entre otros factores personales que influyen en la valoración
            emocional del lugar.
          </Text>
        </View>

        <Text style={{ ...styles.termText, fontWeight: 'bold', marginTop: 10 }}>
          Importante:
        </Text>
        <Text style={styles.termText}>
          Cada estrella representa un atributo único. No se acumulan dentro de un mismo criterio ni
          equivalen a una mejora directa en el precio estimado. El sistema de valor plus tiene un propósito
          informativo y cualitativo, y busca reflejar qué condiciones adicionales hacen que una vivienda sea más
          atractiva desde la perspectiva del usuario.
        </Text>
      </Page>

      <Page size="A4" style={styles.page}>
        {/* Cabecera profesional con fecha y código */}
        <View style={styles.header}>
          <View style={styles.headerMain}>
            <Text style={styles.headerTitle}>Reporte de Avalúo Inmobiliario</Text>
            <Text style={styles.headerSubtitle}>Código: {reportCode}</Text>
          </View>
          <Text style={styles.headerSubtitle}>Fecha de emisión: {formattedDate}</Text>
        </View>

        {/* Información del usuario */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Información del Usuario</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Nombre:</Text>
              <Text style={styles.tableValue}>{data.username}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Email:</Text>
              <Text style={styles.tableValue}>{data.email}</Text>
            </View>
          </View>
        </View>

        {/* Datos del inmueble en formato de tabla */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Datos del Inmueble</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Dirección:</Text>
              <Text style={styles.tableValue}>{data.address}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Referencia catastral:</Text>
              <Text style={styles.tableValue}>{data.houseReference}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Código postal:</Text>
              <Text style={styles.tableValue}>{zipCode || "--"}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Estrato:</Text>
              <Text style={styles.tableValue}>{data.stratum}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Tipo de propiedad:</Text>
              <Text style={styles.tableValue}>{data.type}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Estado:</Text>
              <Text style={styles.tableValue}>{data.status}</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Área construida (m²):</Text>
              <Text style={styles.tableValue}>{data.area} m²</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Precio por metro cuadrado:</Text>
              <Text style={[styles.tableValue, styles.valueHighlight]}>{formatPrice(sqMeterPrice)}</Text>
            </View>
          </View>
        </View>

        {/* Contenedor de 2 columnas para ubicación y valoración */}
        <View style={styles.gridContainer}>
          {/* Columna 1: Ubicación */}
          <View style={styles.gridColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Ubicación Geográfica</Text>
              <View style={styles.mapContainer}>
                {mapImageUrl && <Image style={styles.mapImage} src={mapImageUrl} />}
              </View>
            </View>
          </View>
          
          {/* Columna 2: Resultados de avalúo */}
          <View style={styles.gridColumn}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Resultados de Avalúo</Text>
              <View style={styles.appraisalContainer}>
                <Text style={styles.appraisalSubtitle}>Valor estimado de mercado</Text>
                <Text style={styles.appraisalValue}>{formatPrice(appraisal)}</Text>

                <View style={{ marginTop: 15 }}>
                  <Text style={styles.appraisalSubtitle}>Valor en oferta</Text>
                  <Text style={styles.appraisalValue}>{formatPrice(offerPrice)}</Text>
                  <Text style={[styles.appraisalSubtitle, { color: offerPrice >= appraisal ? '#008000' : '#FF0000' }]}>
                    ({differenceText})
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Parámetros Plus - Versión mejorada */}
        {plusParams.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Este inmueble posee los siguientes parametros plus</Text>
            <View style={styles.plusContainer}>
              {plusParams.map((param, idx) => (
                <View key={idx} style={styles.plusItem}>
                  <Svg width="10" height="10" viewBox="0 0 16 16" style={styles.star}>
                    <Path
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      fill="#EFB810"
                    />
                </Svg>
                  <View style={styles.plusTextContainer}>
                    <Text style={styles.plusTitle}> {param.paramName}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Firma digital */}
        <View style={styles.signatureContainer}>
          <View style={styles.signatureLine}></View>
          <Text style={styles.signatureText}> Laine Rojas | Valeria Borelly | Andrés García | Robert Vides</Text>
          <Text style={[styles.signatureText, { fontSize: 8 }]}>
            Arquitectos
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default PdfReport;