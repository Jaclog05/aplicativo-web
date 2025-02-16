export const questions = [
  {
    id: 1,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Accesibilidad",
    explanaition: "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
    question: "¿En qué estado se encuentran las vías vehiculares de acceso?",
    options: {
      bueno: 0.02,
      regular: 0.01,
      malo: 0.00
    }
  },
  {
    id: 2,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Accesibilidad",
    explanaition: "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
    question: "¿En qué estado se encuentran las vías peatonales de acceso?",
    options: {
      bueno: 0.02,
      regular: 0.01,
      malo: 0.00
    }
  },
  {
    id: 3,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Accesibilidad",
    explanaition: "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
    question: "¿El entorno cuenta con rampas? ",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 4,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Accesibilidad",
    explanaition: "Elementos o espacios que nos permiten acceder a la vivienda, (Vías vehiculares, andenes, escaleras, ascensores, rampas, entre otros).",
    question: "¿El entorno cuenta con baldosas podotáctiles?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 5,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Zona de riesgo",
    explanaition: "Elementos que representen una amenaza en el sitio ya sea que afecten la movilidad, la salud del residente o su seguridad.",
    question: "A un máximo de 5 manzanas a la redonda de la vivienda ¿se presentan corrientes de agua (arroyos)?",
    options: {
      si: 0.00,
      no: 0.01
    }
  },
  {
    id: 6,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Zona de riesgo",
    explanaition: "Elementos que representen una amenaza en el sitio ya sea que afecten la movilidad, la salud del residente o su seguridad.",
    question: "A un máximo de 5 manzanas a la redonda de la vivienda ¿se encuentran industrias o fábricas que emiten gases nocivos para el medio ambiente?",
    options: {
      si: 0.00,
      no: 0.01
    }
  },
  {
    id: 7,
    indicator: "Entorno",
    subgroup: "Accesibilidad",
    parameter: "Zona de riesgo",
    explanaition: "Elementos que representen una amenaza en el sitio ya sea que afecten la movilidad, la salud del residente o su seguridad.",
    question: "¿Las vías en el entorno inmediato de la vivienda son de alto flujo vehicular?",
    options: {
      si: 0.00,
      no: 0.01
    }
  },
  {
    id: 8,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a escala barrial",
    explanaition: "Espacios o edificaciones de pequeña escala que se deben encontrar en las inmediaciones de la vivienda (Ejemplo: Droguerías, tiendas de barrio, entre otros)",
    question: "A un máximo de 3 manzanas a la redonda de la vivienda ¿se encuentra un lugar de abastecimiento?",
    options: {
      si: 0.03,
      no: 0.00
    }
  },
  {
    id: 9,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a escala barrial",
    explanaition: "Espacios o edificaciones de pequeña escala que se deben encontrar en las inmediaciones de la vivienda (Ejemplo: Droguerías, tiendas de barrio, entre otros)",
    question: "A un máximo de 3 manzanas a la redonda de la vivienda ¿se encuentra una farmacia/droguería?",
    options: {
      si: 0.03,
      no: 0.00
    }
  },
  {
    id: 10,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 10 manzanas a la redonda de la vivienda ¿se encuentran centros educativos?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 11,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 10 manzanas a la redonda de la vivienda ¿se encuentra un supermercado?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 12,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 3 manzanas a la redonda de la vivienda ¿transita por lo menos una ruta de bus?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 13,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 4 manzanas a la redonda de la vivienda ¿se encuentan parques o plazas?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 14,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 10 manzanas a la redonda de la vivienda ¿encuentras un establecimiento donde te brinden asistencia medica?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 15,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 10 manzanas a la redonda de la vivienda ¿encuentras una estación o CAI (Comando de Atención Inmediata) de la policia nacional?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 16,
    indicator: "Entorno",
    subgroup: "Equipamientos",
    parameter: "Equipamientos a nivel ciudad",
    explanaition: "Edificaciones o espacios que cuentan con una mayor cobertura, es decir, que pueden estar mucho más lejanos a la vivienda, pero aún el servicio que ofrecen sigue siendo efectivo (Ejemplo: Centros comerciales, hospitales, plazas, supermercados, parques, entre otros).",
    question: "A un máximo de 10 manzanas a la redonda de la vivienda ¿encuentras un lugar de culto?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 17,
    indicator: "Entorno",
    subgroup: "Preferencias",
    parameter: "Trabajo",
    explanaition: "El parámetro se basa en evaluar si la vivienda se encuentra cerca o lejos del lugar de trabajo del usuario. ",
    question: "¿Tu lugar de trabajo se encuentra a un máximo de 15 minutos de distancia de la vivienda? (Independientemente de tu medio de transporte)",
    options: {
      si: 0.06,
      no: 0.00
    }
  },
  {
    id: 18,
    indicator: "Entorno",
    subgroup: "Preferencias",
    parameter: "Entorno inmediato",
    explanaition: "Contexto de la vivienda analizado desde una escala barrial. Es todo lo que rodea la obra arquitectónica (unidad residencial) y la afecta directamente en una distancia aproximada de 500 metros a la redonda. ",
    question: "¿Qué percibes del barrio donde se encuentra la vivienda?",
    options: {
      "Es agradable": 0.08,
      "No es agradable ni desagradable": 0.04,
      "No me agrada": 0.00
    }
  },
  {
    id: 19,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Espacios Comunales",
    explanaition: "Espacios que permiten la interacción y convivencia entre una comunidad. En este caso, espacios que están disponibles y son compartidos por todos los propietarios e inquilinos del conjunto.",
    question: "¿Cuenta con espacios de esparcimiento como un parque y una cancha?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 20,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Espacios Comunales",
    explanaition: "Espacios que permiten la interacción y convivencia entre una comunidad. En este caso, espacios que están disponibles y son compartidos por todos los propietarios e inquilinos del conjunto.",
    question: "¿Cuenta con espacios de reunión como un salón social?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 21,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Espacios Comunales",
    explanaition: "Espacios que permiten la interacción y convivencia entre una comunidad. En este caso, espacios que están disponibles y son compartidos por todos los propietarios e inquilinos del conjunto.",
    question: "¿Cuenta con una piscina?",
    options: {
      si: 0.01,
      no: 0.00
    }
  },
  {
    id: 22,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Mascotas",
    explanaition: "Animal domesticado que convive y acompaña al ser humano.",
    question: "¿Cuentas con espacios especificos para sacar a pasear a tu mascota?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 23,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Punto Fijo",
    explanaition: "Áreas o espacios de circulación, ya sean verticales (Ejemplo: ascensores, escaleras y/o rampas) u horizontales (Ejemplo: pasillos) que permiten el tránsito entre los espacios comunales de un conjunto residencial y la unidad residencial (vivienda).",
    question: "¿Qué percepción te generan los elementos que te permiten acceder a la vivienda (pasillos, senderos, escaleras, rampas, ascensor, entre otros)?",
    options: {
      bueno: 0.02,
      regular: 0.01,
      malo: 0.00
    }
  },
  {
    id: 24,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Manejo de Residuos",
    explanaition: "Proceso de recolección, traslado y acopio de residuos producidos por una vivienda.",
    question: "¿El piso en el cual se encuentra la vivienda posee shut de basuras?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 25,
    indicator: "Entorno",
    subgroup: "Criterios Especificos",
    parameter: "Manejo de Residuos",
    explanaition: "Proceso de recolección, traslado y acopio de residuos producidos por una vivienda.",
    question: "¿El conjunto cuenta con algún sistemas de clasificación de residuos producido por las viviendas?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 26,
    indicator: "Unidad Residencial",
    subgroup: "Criterios Funcionales",
    parameter: "Iluminacion natural",
    explanaition: "Es aquel recurso natural que incide positivamente en los espacios. Se utiliza con el fin de optimizar la utilización de energías no renovables como la iluminación artificial.",
    question: "¿Cómo percibes la iluminación natural en las zonas comunes dentro de la vivienda? (Sala, comedor, estudio, cocina, entre otros)",
    options: {
      bueno: 0.04,
      regular: 0.02,
      malo: 0.00
    }
  },
  {
    id: 27,
    indicator: "Unidad Residencial",
    subgroup: "Criterios Funcionales",
    parameter: "Iluminacion natural",
    explanaition: "Es aquel recurso natural que incide positivamente en los espacios. Se utiliza con el fin de optimizar la utilización de energías no renovables como la iluminación artificial.",
    question: "¿Cómo percibes la iluminación natural al interior de las habitaciones?",
    options: {
      bueno: 0.04,
      regular: 0.02,
      malo: 0.00
    }
  },
  {
    id: 28,
    indicator: "Unidad Residencial",
    subgroup: "Criterios funcionales",
    parameter: "Ventilación",
    explanaition: "Circulación de partículas de aire al interior de la vivienda (entradas y salidas). Representa una de las principales determinantes del diseño arquitectónico dado que una vivienda mal ventilada puede afectar la salud de quienes la habitan",
    question: "¿Cómo percibes la ventilación al interior de la vivienda?",
    options: {
      bueno: 0.04,
      regular: 0.02,
      malo: 0.00
    }
  },
  {
    id: 29,
    indicator: "Unidad Residencial",
    subgroup: "Criterios funcionales",
    parameter: "Ventilación",
    explanaition: "Circulación de partículas de aire al interior de la vivienda (entradas y salidas). Representa una de las principales determinantes del diseño arquitectónico dado que una vivienda mal ventilada puede afectar la salud de quienes la habitan",
    question: "¿Cuentan con ventilación natural o artificial los baños de la vivienda?",
    options: {
      si: 0.04,
      no: 0.00
    }
  },
  {
    id: 30,
    indicator: "Unidad Residencial",
    subgroup: "Criterios funcionales",
    parameter: "Instalaciones",
    explanaition: "Sistemas de tipo eléctrico, sanitario, entre otros, que nos posibilitan el acceso a los servicios básicos (electricidad, agua, gas, entre otros).",
    question: "¿Cuenta con llaves de paso independientes en los puntos húmedos?",
    options: {
      si: 0.03,
      no: 0.00
    }
  },
  {
    id: 31,
    indicator: "Unidad Residencial",
    subgroup: "Criterios funcionales",
    parameter: "Instalaciones",
    explanaition: "",
    question: "¿Cuenta con mínimo 5 o 6 breakers/tacos el sistema eléctrico de la vivienda?",
    options: {
      si: 0.03,
      no: 0.00
    }
  },
  {
    id: 32,
    indicator: "Unidad Residencial",
    subgroup: "Criterios funcionales",
    parameter: "Almacenamiento",
    explanaition: "El almacenamiento en una vivienda se determina como todos aquellos espacios u objetos en los cuales podemos guardar pertenencias e insumos.",
    question: "¿Cuenta la vivienda con espacios de almacenamiento suficientes? (Closet, cuarto de deposito, muebles de cocina, alacenas)",
    options: {
      si: 0.08,
      no: 0.00
    }
  },
  {
    id: 33,
    indicator: "Unidad Residencial",
    subgroup: "Criterios funcionales",
    parameter: "Asoleamiento",
    explanaition: "En arquitectura el soleamiento se considera como la incidencia del sol en el objeto arquitectónico.",
    question: "¿Observas la incidencia directa de la luz solar en alguno de los siguientes espacios: sala, comedor y/o alcobas?",
    options: {
      todos: 0.00,
      algunos: 0.04,
      ninguno: 0.08
    }
  },
  {
    id: 34,
    indicator: "Unidad Residencial",
    subgroup: "Flexibilidad",
    parameter: "Dimensiones funcionales",
    explanaition: "Va ligado al término ergonomía, siendo la disciplina que se encarga de establecer espacios útiles de acuerdo a las características físicas y psicológicas en este caso del ser humano en la vivienda.  ",
    question: "¿Considera usted que la vivienda tiene ubicado adecuadamente los mobiliarios fijos? (Aparatos sanitarios, puertas y ventanas, entre otros)",
    options: {
      si: 0.06,
      no: 0.00
    }
  },
  {
    id: 35,
    indicator: "Unidad Residencial",
    subgroup: "Flexibilidad",
    parameter: "Flexibilidad",
    explanaition: "El término flexibilidad está ligado a qué tan maleables son los espacios de la vivienda, de manera que nos permitan jugar y/o variar la posición de los mobiliarios. ",
    question: "¿Los diferentes espacios de la vivienda le permiten cambiar la posición de los mobiliarios?",
    options: {
      si: 0.06,
      no: 0.00
    }
  },
  {
    id: 36,
    indicator: "Unidad Residencial",
    subgroup: "Habitabilidad",
    parameter: "Espacios",
    explanaition: "Diferentes medios físicos que permiten el desarrollo de actividades cotidianas para el ser humano como dormir, asearse, recrearse, entre otros.",
    question: "¿La vivienda cuenta con los espacios mínimos para ser habitable? (1 baño, cocina, zona de labores, sala/comedor, 1 habitación)",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 37,
    indicator: "Unidad Residencial",
    subgroup: "Habitabilidad",
    parameter: "Espacios",
    explanaition: "Diferentes medios físicos que permiten el desarrollo de actividades cotidianas para el ser humano como dormir, asearse, recrearse, entre otros.",
    question: "¿La vivienda cuenta con el número de habitaciones que usted desea?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 38,
    indicator: "Unidad Residencial",
    subgroup: "Habitabilidad",
    parameter: "Espacios",
    explanaition: "Diferentes medios físicos que permiten el desarrollo de actividades cotidianas para el ser humano como dormir, asearse, recrearse, entre otros.",
    question: "¿Cuenta la vivienda con espacios adicionales como sala de TV (Independiente a sala/comedor), patio de ropas, estudio, terraza?",
    options: {
      todos: 0.02,
      algunos: 0.01,
      ninguno: 0.00
    }
  },
  {
    id: 39,
    indicator: "Unidad Residencial",
    subgroup: "Habitabilidad",
    parameter: "Espacios",
    explanaition: "Diferentes medios físicos que permiten el desarrollo de actividades cotidianas para el ser humano como dormir, asearse, recrearse, entre otros.",
    question: "¿Cuenta con garaje?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 40,
    indicator: "Unidad Residencial",
    subgroup: "Criterios estéticos",
    parameter: "Acabados funcionales",
    explanaition: "Es aquel elemento/material constructivo que permite mantener el estado de la vivienda útil por lapsos de tiempo más prolongados.",
    question: "¿La vivienda cuenta con los acabados esenciales? (Ej: Enchape de baños, enchape sobre encimera de cocina, enchape de pisos) ",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 41,
    indicator: "Unidad Residencial",
    subgroup: "Sostenibilidad",
    parameter: "Sostenibilidad",
    explanaition: "Se enfoca en la optimización de recursos a través de sistemas que nos permitan la reutilización de estos en otras áreas o actividades",
    question: "¿Cuenta con algún sistema de recolección de aguas lluvias?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
  {
    id: 42,
    indicator: "Unidad Residencial",
    subgroup: "Sostenibilidad",
    parameter: "Sostenibilidad",
    explanaition: "Se enfoca en la optimización de recursos a través de sistemas que nos permitan la reutilización de estos en otras áreas o actividades",
    question: "¿La vivienda cuenta con sistemas de recolección de energía (ya sea solar, eólica, entre otras)?",
    options: {
      si: 0.02,
      no: 0.00
    }
  },
]