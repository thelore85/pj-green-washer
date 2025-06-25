export const CLAIM_CARD_DB = [
  {
    article_id: 1,
    title: 'Repsol y la Descarbonización',
    url: 'https://www.repsol.com/es/sostenibilidad/ejes-sostenibilidad/cambio-climatico/descarbonizacion/index.cshtml',
    evaluation_summary:
      'El texto contiene varias afirmaciones relacionadas con compromisos de descarbonización y neutralidad de carbono, sin embargo, adolece de falta de detalles específicos y verificables. La mayoría de las alegaciones presentan riesgos por carecer de evidencias concretas, metodologías públicas o artículos auditables. El uso de conceptos como neutralidad de carbono y reducción de emisiones requiere ser soportado por planes específicos verificables para ajustarse a las regulaciones de la UE.',
    text_summary:
      'El artículo aborda la importancia de la descarbonización en la estrategia de Repsol, detallando sus compromisos de reducción de carbono y describiendo sus esfuerzos en tecnologías bajas en carbono y eficiencia energética. Habla de compromisos futuros en la reducción de la intensidad de carbono y actividades como la compensación voluntaria de emisiones a través de proyectos forestales. También menciona la apuesta de Repsol por combustibles de baja huella de carbono y el uso de energía renovable en su portafolio.',
    claims: [
      {
        claim_id: 1,
        claim: 'diminuimos la intensidad de carbono del 15% para 2025, del 28% para 2030 y del 55% para 2040.',
        categories: ['Meta futura sin plan verificable'],
        relevant_laws: 'Art. 6 (2) d UCPD',
        evidence_needed: 'Plan de acción y hoja de ruta detallada, con hitos y metodología públicamente disponible y auditable.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'Documentación proporciona datos sobre emisiones y reducciones planificadas de GEI (Indicador de Intensidad de Carbono) para 2025, 2030 y 2040.',
          },
          sufficiency: {
            result: 'Parcial',
            explanation: 'Se detallan acciones y objetivos contextuales, pero faltan hitos intermedios verificables.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'La documentación es reciente, fechada en 2024, dentro del periodo pertinente del claim.',
          },
          independence: {
            result: 'Interna',
            explanation: 'Repsol usa metodología propia, validada por verificador interno, no evidencia externa.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Art. 6 (2) d) UCPD',
          razonamiento:
            'El claim de Repsol sobre sus metas de emisión de GEI para 2025, 2030 y 2040 cumple con la existencia y actualidad de la información requerida, según el Art. 7 § 4 al proporcionar documentación pertinente y reciente. Sin embargo, la insuficiencia de hitos intermedios verificables (véase TJUE C-632/16 *Dyson*, §§ 57-59) impide una cobertura completa del horizonte temporal del claim. Además, la dependencia de verificación interna en lugar de un tercero acreditado (como se propone en la Green-Claims Directive) representa un fallo crítico de independencia, violando el Art. 6 (2) d) que exige la verificación externa de metas futuras sin un plan público verificable.',
          consecuencia: 'Práctica engañosa, hasta 4 % facturación UE o 2 M €.',
          overall: {
            color: 'Rojo',
            recommendation: 'Recomendamos la introducción de verificación externa acreditada para reducir el riesgo crítico.',
          },
        },
      },
      {
        claim_id: 2,
        claim: 'hemos adaptado nuestras estrategias y objetivos iniciales a unos mucho más exigentes.',
        categories: ['Meta futura sin plan verificable'],
        relevant_laws: 'Art. 6 (2) d UCPD',
        evidence_needed: 'Documentación que explique las estrategias adoptadas, sus objetivos específicos y los pasos necesarios para alcanzarlos.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'Hay informes mensuales de seguimiento, programas detallados, y objetivos específicos que evidencian la adaptación de estrategias por la empresa.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'La evidencia detallada cubre adecuadamente la adaptación de estrategias, incluyendo objetivos y pasos a seguir.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Las evidencias proporcionadas son de 2024, ajustándose a los requisitos temporales de la normativa.',
          },
          independence: {
            result: 'No Aplica',
            explanation: 'No se requiere certificación externa para estrategia empresarial, basta evidencia verificable y cuantitativa interna.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'No consta infracción de normas específicas según Anexo I.',
          razonamiento:
            'El análisis evidencia que la empresa cumple con los requisitos exigidos por la Directiva 2005/29/CE, modificada por la Directiva 2024/825, específicamente en los aspectos de existencia, suficiencia y actualidad. La documentación proporcionada está detallada, cubriendo adecuadamente sus estrategias y adaptaciones. Además, las evidencias son recientes, cumpliendo con los estándares temporales del Art. 7 § 2 b UCPD. Respecto a la independencia, la normativa aplicable admite evidencia interna verificable, prescindiendo de certificación externa, lo cual no resulta infringido en este caso.',
          consecuencia: 'No hay consecuencias en términos de infracción de prácticas comerciales desleales.',
          overall: {
            color: 'Verde',
            recommendation: 'Mantener la transparencia y actualización de la documentación para continuar cumpliendo con las directrices, asegurando la confianza del consumidor.',
          },
        },
      },
      {
        claim_id: 3,
        claim: 'iniciativa voluntaria de compensación de emisiones, denominada Compromiso Cero Emisiones Netas, que gestionamos a través de nuestras innovadoras aplicaciones Waylet y Vivit.',
        categories: ['Neutralidad basada en compensación CO₂'],
        relevant_laws: 'Anexo I 4 quater UCPD',
        evidence_needed: 'Detalles sobre los proyectos de compensación utilizados, su verificación y auditoría por terceros para asegurar su efectividad.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'El claim está respaldado por la cancelación de 14,621 tCO₂ en créditos de carbono verificados por estándares VCS de Verra y Gold Standard. Esto indica evidencia existente.',
          },
          sufficiency: {
            result: 'Parcial',
            explanation: 'La evidencia presentada cubre la gestión de créditos de carbono, pero no especifica totalmente el uso y funcionamiento de las aplicaciones Waylet y Vivit.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Las cancelaciones de créditos verificadas son de 2024, cumpliendo el requisito de actualidad de ≤ 3 años.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'Los créditos de carbono están verificados por VCS de Verra, Gold Standard y CCB, normativas externas y reconocidas.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Art. 6 (1) b y Anexo I 4 quater',
          razonamiento:
            'El análisis de evidencia indica que el claim está respaldado por la cancelación de créditos de carbono auditados por Verra y Gold Standard, asegurando la existencia y actualidad. Sin embargo, la suficiencia es parcial ya que no abarca completamente el contexto de las aplicaciones Waylet y Vivit, lo cual podría inducir a error sobre el impacto neutral declarado. Según Art. 6 (1) b y Anexo I 4 quater de la UCPD, un claim basado en neutralidad por compensación de CO₂ requiere especificidad que abarque todas las características principales del servicio o producto. La evidencia independiente mitiga pero no elimina el riesgo de engaño parcial.',
          consecuencia: 'Práctica engañosa; acción judicial hasta 4 % facturación UE o 2 M €.',
          overall: {
            color: 'Naranja',
            recommendation: 'Clarificar y completar información sobre las aplicaciones Waylet y Vivit para evitar riesgo medio de greenwashing.',
          },
        },
      },
      {
        claim_id: 4,
        claim: 'compensar el 100% de las emisiones de CO2 del consumo de ese carburante de forma voluntaria, a través de la colaboración en proyectos forestales.',
        categories: ['Neutralidad basada en compensación CO₂'],
        relevant_laws: 'Anexo I 4 quater UCPD',
        evidence_needed: 'Certificados de los proyectos forestales, metodologías de verificación de compensación y auditorías independientes que validen los resultados.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'Documentos mencionan cancelación de créditos de carbono alineados con estándares Verra VCS, verificables externamente.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'Detalles de cancelación de 14.621 tCO₂ mediante proyectos AFOLU y REDD+ verificados por VCS y CCB + Gold.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Los documentos y créditos cancelados son actuales, del año 2024, cumpliendo la condición de ≤3 años.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'Verificación mencionada por estándar VCS de Verra, reconocido y acreditado para certificación externa.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Art. 7 § 4, Anexo I 4 quater',
          razonamiento:
            'La afirmación de neutralidad basada en compensación de CO₂ cumple con la normativa ambiental al presentar evidencia clara de cancelación de 14.621 tCO₂ mediante proyectos validados por VCS y CCB, estándares externos acreditados. Conforme al Anexo I 4 quater, es esencial que estas compensaciones sean verificadas por un tercero independiente, como Verra VCS, para garantizar su credibilidad y evitar el riesgo de prácticas engañosas. Además, la actualización de los documentos asegura el cumplimiento con Art. 7 § 4, preservando la actualidad de la información presentada.',
          consecuencia: 'Práctica engañosa si la evidencia fuera interna con riesgo de hasta 4% de facturación UE o 2 M €.',
          overall: {
            color: 'Verde',
            recommendation: 'La afirmación es sólida y cumple con los estándares legales establecidos; no se requiere acción inmediata.',
          },
        },
      },
    ],
  },
  {
    article_id: 2,
    title: 'Repsol y la Sostenibilidad',
    url: 'https://www.repsol.com/es/sostenibilidad/index.cshtml',
    evaluation_summary:
      'El texto de Repsol contiene varias afirmaciones ambientales relevantes que podrían generar riesgos legales si no se proporciona evidencia verificable y claridad en cuanto a cómo se logrará lo prometido. Las frases utilizan términos vagos o prometen metas futuras sin detallar los planes concretos para alcanzarlas.',
    text_summary:
      'Repsol presenta su compromiso con la sostenibilidad, destacando objetivos como ser cero emisiones netas en 2050 y el uso de un indicador de intensidad de carbono para monitorizar la descarbonización. Se informa sobre estrategia de sostenibilidad y contribuciones a los ODS, junto con una sección sobre energía universal cero emisiones netas.',
    claims: [
      {
        claim_id: 5,
        claim: 'Somos una compañía energética comprometida con el desarrollo sostenible.',
        categories: ['Afirmación ambiental genérica – Anexo I 4 bis'],
        relevant_laws: 'Anexo I 4 bis UCPD',
        evidence_needed: 'Datos específicos y cuantificables sobre iniciativas de sostenibilidad y evidencia de su impacto.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'Los informes de sostenibilidad y gestión integrados presentan datos sobre acciones, emisiones y objetivos relacionados con desarrollo sostenible.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'Se incluye evidencia detallada del impacto ambiental y económico de medidas sostenibles.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Los informes y datos son del año 2024, muy recientes para apoyar el claim actual.',
          },
          independence: {
            result: 'No Aplica',
            explanation: 'El claim es genérico y apunta más a la política de sostenibilidad interna que a certificaciones externas.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Art. 7 § 2',
          razonamiento:
            'El claim corporativo se apoya en informes de sostenibilidad que proporcionan datos detallados y actualizados del año 2024 sobre acciones y objetivos de desarrollo sostenible. Cumple con el requisito de existencia y suficiencia, conforme al Art. 7 §§ 4-5 UCPD, que exigen pruebas claras y verificables. La actualidad se asegura con información reciente. Aunque la independencia no es aplicable al tratarse de un claim genérico centrado en la política interna, el cumplimiento normativo reduce el riesgo de greenwashing.',
          consecuencia: 'El claim es una práctica engañosa según Art. 7 § 2, no requiriendo certificación externa, las sanciones pueden alcanzar hasta el 4 % de la facturación en la UE o 2 M €.',
          overall: {
            color: 'Naranja',
            recommendation: 'Revisar la claridad del claim para asegurar que la independencia y verificabilidad puedan ser comprobadas fácilmente por el consumidor.',
          },
        },
      },
      {
        claim_id: 6,
        claim: 'Con el compromiso de llegar a ser una compañía de cero emisiones netas en 2050.',
        categories: ['Meta futura sin plan verificable – Art. 6 (2) d'],
        relevant_laws: 'Art. 6 (2) d UCPD',
        evidence_needed: 'Hoja de ruta detallada con hitos verificables, métricas y metodología para alcanzar la meta de cero emisiones netas.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'Documentos incluyen un plan de transición y métricas de reducción de emisiones concretas para 2030 y 2050, respaldando el claim.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'Se detalla la estrategia hacia cero emisiones en 2050 con metas intermedias y múltiples métricas, cubriendo el claim completamente.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'La evidencia es de 2024 y los planes y objetivos están actualizados, dentro del periodo aceptable de tres años.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'Auditoría externa de emisiones por Deloitte conforme a normas ISO y verificación por terceros como OGMP.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'No consta infracción de la Directiva 2005/29/CE ni de sus modificatorias, incluyendo 2024/825.',
          razonamiento:
            'La empresa presenta un claim sobre su objetivo de reducción de emisiones y transición energética con evidencia que cumple con los requisitos de la Directiva 2005/29/CE. Conforme al Art. 7 §§ 4-5, la documentación es clara y verificable, además de estar certificada por un auditor externo acreditado, cumpliendo lo exigido por el Anexo I 4 ter. El claim se sustenta en datos actualizados (2024) y detallados, cumpliendo con los requisitos de suficiencia y actualidad exigidos. Por tanto, no se aprecia práctica engañosa u omisión engañosa.',
          consecuencia: 'Práctica no engañosa. No aplica sanción.',
          overall: {
            color: 'Verde',
            recommendation: 'Mantener la transparencia y la verificación externa para asegurar cumplimiento continuo.',
          },
        },
      },
      {
        claim_id: 7,
        claim: 'Para lograrlo, hemos fijado una exigente hoja de ruta que incluye metas ambiciosas.',
        categories: [],
        relevant_laws: '',
        evidence_needed: 'Detalles específicos sobre las metas y la metodología de la hoja de ruta mencionada.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'La documentación incluye hojas de ruta con metas detalladas vinculadas a sostenibilidad y descarbonización, revisadas por Deloitte.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'La evidencia presentada cubre distintas metas de descarbonización alineadas con planes sostenibles y políticas detalladas.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'La hoja de ruta y planes presentados están actualizados al año 2024, con metas específicas para 2024-2030.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'La revisión externa de Deloitte es adecuada y asegura independencia en la validación del claim.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Ninguna infracción identificada',
          razonamiento:
            'El análisis de evidencia demuestra que el claim relacionado con sostenibilidad y descarbonización cumple con los requisitos establecidos en las directivas aplicables. Hay documentación clara y accesible que verifica la existencia del claim (Art. 7 § 4 UCPD). La prueba presentada es completa y abarca los aspectos mencionados en el claim, mostrando suficiencia (TJUE C-632/16). La actualidad de la información está corroborada con datos recientes (Art. 7 § 2 b). La independencia se asegura mediante una revisión externa de Deloitte, cumpliendo con el criterio de independencia (Anexo I 2 bis).',
          consecuencia: 'No práctica engañosa',
          overall: {
            color: 'Verde',
            recommendation: 'Mantener la transparencia y la actualización continua de la documentación para garantizar un bajo riesgo de greenwashing.',
          },
        },
      },
      {
        claim_id: 8,
        claim: 'Energía universal cero emisiones netas',
        categories: ['Neutralidad basada en compensación CO₂ – Anexo I 4 quater'],
        relevant_laws: 'Anexo I 4 quater UCPD',
        evidence_needed: 'Claridad sobre el uso de compensaciones de CO₂ y otras medidas para lograr la neutralidad, junto con evidencia de su efectividad.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'Se mencionan iniciativas concretas para la reducción de emisiones de GEI, incluyendo tecnología CCS y objetivos de cero emisiones netas.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'La evidencia detalla el uso de CCS, biocombustibles y cancelación de créditos Verra, cubriendo todos los aspectos del claim.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Los informes y métricas de emisiones son de 2024, cumpliendo criterios de actualidad establecidos en las directivas.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'Las emisiones y esfuerzos de mitigación son validados por auditores externos según la norma ISO 14064.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'No aplica',
          razonamiento:
            'El claim corporativo cumple técnicamente con los requisitos establecidos en la Directiva 2005/29/CE y la reforma 2024/825 para evitar el greenwashing. Las iniciativas mencionadas para la reducción de emisiones de GEI son verificables, con la participación de tecnología CCS y cancelación de créditos Verra, lo cual encuadra en una afirmación ambiental detallada y completa según el TJUE C-632/16 *Dyson*. La evidencia proporcionada es actual, con informes de 2024 que sostienen la actualización requerida por el Art. 7 § 2 b UCPD, y cuenta con verificación externa conforme a la norma ISO 14064, conforme al Anexo I 4 quater.',
          consecuencia: 'Práctica no engañosa',
          overall: {
            color: 'Verde',
            recommendation: 'El establece una práctica transparente y responsable con suficiente certificación externa. No se requiere acción adicional.',
          },
        },
      },
    ],
  },
  {
    article_id: 3,
    title: 'Repsol y el Cambio Climático',
    url: 'https://www.repsol.com/es/sostenibilidad/ejes-sostenibilidad/cambio-climatico/index.cshtml',
    evaluation_summary:
      'El texto presenta varias afirmaciones ambientales sobre metas futuras de reducción de emisiones de carbono y generación de electricidad renovable. Sin embargo, la falta de detalles específicos y verificables podría generar riesgos legales asociados con metas futuras no verificables y afirmaciones amplias sobre la generación de electricidad renovable. En el sector energético, la claridad y especificidad son esenciales para evitar confusiones sobre los compromisos ambientales.',
    text_summary:
      'El texto detalla los esfuerzos de Repsol por alcanzar la sostenibilidad, destacando un objetivo de cero emisiones netas para 2050, con metas intermedias de descarbonización. Incluye estrategias como la generación de electricidad renovable y el desarrollo de combustibles renovables, así como la captura y almacenamiento de carbono. También se menciona el establecimiento de un precio interno de carbono para nuevas inversiones y el compromiso con alianzas internacionales para fomentar la sostenibilidad.',
    claims: [
      {
        claim_id: 9,
        claim: 'Aspiramos a convertirnos en una compañía cero emisiones netas en 2050.',
        categories: ['Meta futura sin plan verificable'],
        relevant_laws: 'Art. 6 (2) d UCPD',
        evidence_needed: 'Hoja de ruta detallada, hitos verificables, metodología para alcanzar cero emisiones netas.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'El claim se respalda con datos concretos como metas de reducción de emisiones y planes de transición energética alineados con el Acuerdo de París.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'La evidencia cubre los aspectos del claim, incluyendo metas intermedias para 2030 y un plan estratégico hacia 2050.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Los documentos presentan datos actualizados hasta 2024, dentro de tres años del claim hacia 2050.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'El proceso de revisión y certificación incluye la participación de una firma externa, Deloitte, para validar la estrategia de transición.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Ninguna',
          razonamiento:
            'El claim corporativo ha proporcionado pruebas claras, objetivas y verificables (Art. 7 §§ 4-5 UCPD) que son accesibles para el consumidor, lo que valida la existencia del claim. Además, la evidencia abarca de manera completa el alcance lingüístico del claim conforme a lo estipulado en el caso TJUE C-632/16 *Dyson*. Los datos son actuales y actualizados (Art. 7 § 2 b UCPD), reflejando veracidad y precisión respecto a las metas hacia 2030 y 2050. Finalmente, la independencia de la certificación se asegura mediante la participación de Deloitte, una entidad externa acreditada, cumpliendo con el Anexo I 2 bis UCPD. No se ha identificado ninguna infracción normativa.',
          consecuencia: 'Ninguna práctica desleal identificada',
          overall: {
            color: 'Verde',
            recommendation: 'No se requiere acción: el claim es sólido y cumple con todas las exigencias normativas.',
          },
        },
      },
      {
        claim_id: 10,
        claim: 'Para continuar avanzando con éxito en este objetivo nos fijamos metas intermedias de descarbonización a 2025, 2030 y 2040.',
        categories: [],
        relevant_laws: '',
        evidence_needed: 'Detalles sobre qué constituyen las metas intermedias, KPI específicos y métodos de medición.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'El claim se respalda con un plan de transición aprobado en 2024, que incluye metas concretas y metodologías para descarbonización a corto y largo plazo.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'El plan de transición cubre metas específicas de reducción de emisiones y descarbonización a 2025, 2030, y 2040 con contexto y métricas claras.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'La información más reciente es de 2024, dentro de los tres años anteriores al claim.',
          },
          independence: {
            result: 'Independiente',
            explanation: 'La verificación ISO 14064 y asesoramiento de Deloitte aseguran independencia en evaluación.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Ninguna norma infringida',
          razonamiento:
            'El análisis de evidencia confirma la existencia de pruebas verificables y actualizadas, conforme al Art. 7 § 2 b UCPD, provenientes de un plan de transición ratificado y una verificación externa por parte de Deloitte con certificación ISO 14064. Según el TJUE en C-632/16, el claim refleja fielmente los compromisos anunciados y metas verificables, cumpliendo así con los requisitos de independencia exigidos en la normativa y propuesta Green-Claims. Por ello, el claim corporativo es legítimo acorde a los requisitos legales vigentes.',
          consecuencia: 'No existen indicios de prácticas desleales; el claim cumple con las exigencias legales de transparencia y veracidad.',
          overall: {
            color: 'Verde',
            recommendation: 'Continuar implementación del plan y actualizar según los avances tecnológicos y científicos para mantener siempre la veracidad del claim.',
          },
        },
      },
      {
        claim_id: 11,
        claim: 'Generación electricidad renovable',
        categories: ['Claim sobre producto/empresa entera'],
        relevant_laws: 'Anexo I 4 ter UCPD',
        evidence_needed: 'Detalle sobre el porcentaje de generación eléctrica que es realmente renovable.',
        analysis: {
          existence: {
            result: 'Sí',
            explanation: 'La documentación menciona actividades de generación de electricidad solar, eólica e hidráulica y proyectos asociados.',
          },
          sufficiency: {
            result: 'Completa',
            explanation: 'La evidencia detalla la proporción de electricidad generada por fuentes renovables respecto al total.',
          },
          actuality: {
            result: 'Actual',
            explanation: 'Información y datos presentados son de 2024, dentro del límite de 3 años para asegurar actualidad.',
          },
          independence: {
            result: 'No consta',
            explanation: 'La documentación no menciona verificación o auditoría externa específica para generación renovable.',
          },
        },
        legal_reasoning: {
          norma_infringida: 'Anexo I 4 ter UCPD',
          razonamiento:
            'La afirmación sobre generación de electricidad mediante fuentes renovables está respaldada por documentación existente, detallando la proporción respecto al total, conforme al Art. 7 UCPD. Sin embargo, la falta de verificación externa especificada representa una infracción crítica bajo Anexo I 4 ter, donde las afirmaciones sobre la totalidad de la empresa requieren preferencia de auditoría independiente. Las características de generación deben ser evaluadas externamente para evitar un fallo crítico de independencia.',
          consecuencia: 'Práctica engañosa por insuficiencia de auditoría externa, sanción de hasta 4 % de la facturación UE o 2 M €.',
          overall: {
            color: 'Rojo',
            recommendation: 'Corregir la falta de verificación externa para evitar sanciones.',
          },
        },
      },
    ],
  },
]
