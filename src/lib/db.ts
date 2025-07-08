export const CLAIM_CARD_DB = [
    {
      article_id: 1,
      url: "https://www.repsol.com/es/sostenibilidad/ejes-sostenibilidad/cambio-climatico/descarbonizacion/index.cshtml",
      title: "Repsol y la descarbonización",
      text_summary: "Análisis de afirmaciones ambientales de Repsol sobre descarbonización, compensación de emisiones y objetivos de cero emisiones netas.",
      claims: [
        {
          claim_id: 1,
          claim: "Recientemente hemos puesto en marcha una iniciativa voluntaria de compensación de emisiones, denominada Compromiso Cero Emisiones Netas.",
          categories: [
            "AFIRMACIÓN BASADA EN COMPENSACIÓN DE EMISIONES"
          ],
          relevant_laws: "Anexo I 4 quater",
          evidence_needed: "Demostrar el impacto real del ciclo de vida del producto y no basarse únicamente en compensación de emisiones externas.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Existe documentación extensa de Repsol referente a su estrategia y acciones de sostenibilidad y emisiones."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "La evidencia presentada no demuestra que la iniciativa esté basada en el ciclo de vida propio del producto, como lo requiere la categoría."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Los informes y documentaciones son del año 2024, completando el requisito de actualidad."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "No se requiere verificación independiente para esta categoría de afirmación."
            }
          },
          legal_reasoning: {
            norma_infringida: "Artículo 4 quater del Anexo I",
            razonamiento: "La afirmación de Repsol sobre compensación de emisiones de gases de efecto invernadero no se basa en el ciclo de vida propio del producto. Según el artículo 4 quater del Anexo I, este tipo de afirmaciones deben estar protegidas por el ciclo de vida del producto, evitando compensaciones externas. La insuficiencia en la evidencia demuestra un incumplimiento claro de la norma.",
            consecuencia: "lista negra; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Dada la infracción directa lista negra, es crucial corregir la afirmación para evitar sanciones reputacionales y económicas."
            }
          }
        },
        // {
        //   claim_id: 2,
        //   claim: "Creemos firmemente que las grandes empresas deben integrar una política de cero emisiones netas en sus estrategias de negocio.",
        //   categories: [
        //     "META FUTURA SIN PLAN VERIFICABLE"
        //   ],
        //   relevant_laws: "Artículo 6.2.d",
        //   evidence_needed: "Un plan de ejecución detallado y verificable que incluya metas mensurables y recursos asignados, verificado por un tercero independiente.",
        //   analysis: {
        //     existence: {
        //       "result": "Sí",
        //       "explanation": "Se presenta documentación extensa sobre las políticas de sostenibilidad y estrategias de transición energética de Repsol, incluyendo informes y planes relevantes."
        //     },
        //     sufficiency: {
        //       "result": "Insuficiente",
        //       "explanation": "Se detalla la política de descarbonización y objetivos para 2050, pero no se especifica un plan verificable para 2030 con metas claras."
        //     },
        //     actuality: {
        //       "result": "Actual",
        //       "explanation": "Los documentos y evidencias mencionadas están fechados en 2024, conformidad con el análisis de datos hasta ese año."
        //     },
        //     independence: {
        //       "result": "Independiente",
        //       "explanation": "La evaluación externa por Deloitte ayuda a verificar el seguimiento de las estrategias de sostenibilidad, aunque no se detalla un proceso completo de auditoría."
        //     }
        //   },
        //   legal_reasoning: {
        //     norma_infringida: "Artículo 6, apartado 2, letra d)",
        //     razonamiento: "El claim de Repsol, relacionado con su política de descarbonización, presenta documentación general sobre sus objetivos a largo plazo para 2050. Sin embargo, carece de un plan verificable a corto plazo para 2030 con compromisos específicos y objetivos medibles. Según el Art. 6, apartado 2, letra d) de la Directiva, es obligatorio proporcionar un plan de ejecución realista y detallado. La falta de esto convierte el claim en una práctica comercial engañosa por omisión, ya que puede llevar a los consumidores a expectativas infundadas sobre el comportamiento futuro de la empresa.",
        //     consecuencia: "práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
        //     overall: {
        //       color: "Rojo",
        //       recommendation: "Repsol debe desarrollar un plan detallado para 2030 con metas verificables para corregir la deficiencia y evitar sanciones severas."
        //     }
        //   }
        // },
        {
          claim_id: 3,
          claim: "Para favorecer el paso hacia una economía baja en carbono, hemos adaptado nuestras estrategias y objetivos iniciales a unos mucho más exigentes.",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Artículo 6.2.d",
          evidence_needed: "Detalle del plan de adaptación, con metas específicas y verificables, y verificación por un tercero independiente.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Existen múltiples documentos que detallan estrategias y objetivos en emisiones y reducción."
            },
            sufficiency: {
              "result": "Parcial",
              "explanation": "No cubre un plan detallado y verificable con metas mensurables y asignación de recursos como exige META FUTURA."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La documentación está fechada en 2024, dentro de periodo relevante (≤ 3 años)."
            },
            independence: {
              "result": "Independiente",
              "explanation": "Verificación limitada por auditor externo, PricewaterhouseCoopers, confirmada en la documentación."
            }
          },
          legal_reasoning: {
            norma_infringida: "Ninguna norma infringida",
            razonamiento: "El análisis revela que existe documentación actualizada sobre las estrategias de reducción de emisiones. Consta de objetivos claros, mensurables y acotados en el tiempo, así como de la asignación de recursos y la verificación externa periódica. Por tanto, cumple el Artículo 6, apartado 2, letra d), que exige primar la veracidad y credibilidad de afirmaciones medioambientales futuras.",
            consecuencia: "Debido a la suficiencia de la evidencia, no se identifica infracción en las afirmaciones de la empresa.",
            overall: {
              color: "Verde",
              recommendation: "Mantener la estrategia actual y asegurar la verificación externa periódica para cumplir con los requisitos legales."
            }
          }
        }
      ]
    },
    {
      article_id: 2,
      url: "https://www.repsol.com/es/sostenibilidad/index.cshtml",
      title: "Sostenibilidad en Repsol: Compromiso con el futuro",
      text_summary: "Descripción de las iniciativas de sostenibilidad de Repsol, incluyendo metas futuras de cero emisiones para 2050 y el uso de un Indicador de Intensidad de Carbono para la descarbonización.",
      claims: [
        {
          claim_id: 4,
          claim: "Nuestra meta es satisfacer la demanda creciente de energía y productos maximizando nuestra contribución al desarrollo sostenible, para cubrir las necesidades presentes sin comprometer las de las generaciones futuras, con el compromiso de llegar a ser una compañía de cero emisiones netas en 2050 en línea con los objetivos del acuerdo de París.",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Anexo I 6.2.d",
          evidence_needed: "Una hoja de ruta detallada, realista y disponible públicamente sobre cómo alcanzarán el objetivo de cero emisiones netas, incluyendo verificación de terceros.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "El documento proporciona acciones, compromisos y análisis de riesgos vinculados al claim."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "El plan no presenta metas temporales detalladas, recursos asignados o verificaciones externas periódicas, esencial para metas futuras."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Los documentos y compromisos se establecen y analizan en el contexto de 2024."
            },
            independence: {
              "result": "No consta",
              "explanation": "No se verifica existencia de auditoría externa independiente específica para el plan climático."
            }
          },
          legal_reasoning: {
            norma_infringida: "Ninguna norma infringida",
            razonamiento: "La empresa Repsol ha realizado afirmaciones sobre su compromiso con la descarbonización hacia 2050, sustentadas por documentación detallada que incluye metas, planes y recursos asignados, verificados por una entidad independiente. Dado que estos planes son actuales y están fundamentados en compromisos verificables y medibles, la evidencia es suficiente bajo el Artículo 6, apartado 2, letra d) de la Directiva reformada, garantizando que no existe una omisión engañosa en este contexto. Por consiguiente, no se identifica infracción en las afirmaciones de la empresa.",
            consecuencia: "No se identifica infracción",
            overall: {
              color: "Verde",
              recommendation: "Mantener la estrategia actual y asegurar la verificación externa periódica para cumplir con los requisitos legales."
            }
          }
        },
        // {
        //   claim_id: 5,
        //   claim: "Con el fin de monitorizar la evolución de la compañía hacia un futuro más descarbonizado, hemos desarrollado un Indicador de Intensidad de Carbono (IIC), que nos permite definir objetivos de reducción, apoya la toma de decisiones estratégicas y de inversión, y realizar un seguimiento de su evolución.",
        //   categories: [
        //     "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
        //   ],
        //   relevant_laws: "Anexo I 4 ter",
        //   evidence_needed: "Pruebas de las áreas específicas y procesos en los que se aplica el Indicador de Intensidad de Carbono.",
        //   analysis: {
        //     existence: {
        //       "result": "Sí",
        //       "explanation": "Se proporciona documentación extensa sobre el Indicador de Intensidad de Carbono (IIC) y su cálculo en el Informe de Gestión Integrado 2024."
        //     },
        //     sufficiency: {
        //       "result": "Parcial",
        //       "explanation": "La evidencia describe el objetivo del IIC, pero falta un plan detallado, verificable por un tercero, para apoyar el claim sobre futuro descarbonizado."
        //     },
        //     actuality: {
        //       "result": "Actual",
        //       "explanation": "El documento está fechado para 2024 y utiliza datos recientes, como el Informe de Gestión Integrado 2024."
        //     },
        //     independence: {
        //       "result": "Independiente",
        //       "explanation": "Auditorías realizadas por la unidad de Auditoría Interna, supervisadas por la Comisión de Auditoría y Control."
        //     }
        //   },
        //   legal_reasoning: {
        //     norma_infringida: "Artículo 6, apartado 2, letra d)",
        //     razonamiento: "El claim sobre el futuro descarbonizado de la empresa se respalda por una existencia documentada del Indicador de Intensidad de Carbono en el Informe de Gestión Integrado 2024. No obstante, la evidencia es insuficiente, ya que carece de un plan detallado y verificable por un tercero independiente, conforme exige la Directiva. Aunque utiliza datos actuales, la verificación por una unidad interna, aún supervisada, no cumple con la independencia requerida. Sin un plan claro y verificable, este claim infringe el artículo 6, apartado 2, letra d), lo que implica una conducta engañosa sobre el comportamiento ambiental futuro.",
        //     consecuencia: "práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
        //     overall: {
        //       color: "Rojo",
        //       recommendation: "Recomiendo implementar un plan detallado con verificación externa para mitigar el riesgo legal."
        //     }
        //   }
        // }
      ]
    },
    {
      article_id: 3,
      url: "https://www.repsol.com/es/sostenibilidad/ejes-sostenibilidad/cambio-climatico/index.cshtml",
      title: "Repsol: Estrategias Sostenibles y Metas de Descarbonización",
      text_summary: "El texto describe las iniciativas de Repsol para convertirse en una compañía con cero emisiones netas para 2050, con enfoque en descarbonización, energía renovable y finanzas sostenibles.",
      claims: [
        {
          claim_id: 6,
          claim: "Aspiramos a convertirnos en una compañía cero emisiones netas en 2050.",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Artículo 6.2.d",
          evidence_needed: "Un plan de ejecución detallado y verificable con compromisos claros y verificables, revisados por un experto independiente.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La estrategia de Repsol incluye metas para cero emisiones netas en 2050, reflejada en documentos como el Informe de Gestión Integrado."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "La documentación presenta metas y medidas, pero no un plan detallado, realista y verificable conforme a la norma."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Información incluida en el Informe de Gestión Integrado 2024, menor a 3 años de antigüedad."
            },
            independence: {
              "result": "Independiente",
              "explanation": "Deloitte asesoró en la evaluación externa del Consejo sobre la estrategia de transición energética."
            }
          },
          legal_reasoning: {
            norma_infringida: "Ninguna norma infringida",
            razonamiento: "La empresa Repsol ha realizado afirmaciones sobre su compromiso con la descarbonización hacia 2050, sustentadas por documentación detallada que incluye metas, planes y recursos asignados, verificados por una entidad independiente. Dado que estos planes son actuales y están fundamentados en compromisos verificables y medibles, la evidencia es suficiente bajo el Artículo 6, apartado 2, letra d) de la Directiva reformada, garantizando que no existe una omisión engañosa en este contexto. Por consiguiente, no se identifica infracción en las afirmaciones de la empresa.",
            consecuencia: "No presenta riesgos",
            overall: {
              color: "Verde",
              recommendation: "Mantener la estrategia actual y asegurar la verificación externa periódica para cumplir con los requisitos legales."
            }
          }
        },
        {
          claim_id: 7,
          claim: "Trabajamos para convertirnos en una compañía cero emisiones netas en 2050. Para continuar avanzando con éxito en este objetivo nos fijamos metas intermedias de descarbonización a 2025, 2030 y 2040.",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Artículo 6.2.d",
          evidence_needed: "Compromisos definidos públicamente, planes verificables y revisión por un tercero independiente.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Existe documentación sobre metas de reducción de emisiones para 2025, 2030 y 2040."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se presenta un plan de ejecución detallado y verificable por tercero independiente."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Los documentos presentados son de 2024, es decir, actuales."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La categoría no exige verificación de terceros, solo Plan metas futuras. El claim no es Plan."
            }
          },
          legal_reasoning: {
            norma_infringida: "Ninguna norma infringida",
            razonamiento: "La empresa Repsol ha realizado afirmaciones sobre su compromiso con la descarbonización hacia 2050, sustentadas por documentación detallada que incluye metas, planes y recursos asignados, verificados por una entidad independiente. Dado que estos planes son actuales y están fundamentados en compromisos verificables y medibles, la evidencia es suficiente bajo el Artículo 6, apartado 2, letra d) de la Directiva reformada, garantizando que no existe una omisión engañosa en este contexto. Por consiguiente, no se identifica infracción en las afirmaciones de la empresa.",
            consecuencia: "La afirmación esta fuera de riesgos",
            overall: {
              color: "Verde",
              recommendation: "Mantener el plan de metas intermedias y asegurar la verificación externa periódica para cumplir con los requisitos legales."
            }
          }
        },
        {
          claim_id: 8,
          claim: "Generación electricidad renovable... Construimos un portafolio de proyectos de energía eléctrica renovable con rotación de la cartera de activos, con incorporación de socios y financiación de proyectos.",
          categories: [
            "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
          ],
          relevant_laws: "Art. 4 ter del Anexo I",
          evidence_needed: "Detalles específicos sobre la proporción de electricidad que realmente se produce a partir de fuentes renovables.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La empresa proporciona un informe detallado sobre adquisición y venta de activos renovables."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se demuestra evidencia que cubra la totalidad de la generación renovable, actualización de proyectos y socios involucrados."
            },
            actuality: {
              "result": "Actual",
              "explanation": "El reporte corresponde al año 2024 y está dentro del periodo de tres años."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La categoría de claim no exige verificación externa."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 4 ter del Anexo I",
            razonamiento: "El claim evaluado supone una afirmación medioambiental sobre la totalidad del producto o empresa. Sin embargo, no se proporciona evidencia suficiente que demuestre la cobertura integral de la generación renovable, incumpliendo así con el requisito de cobertura del 100%. Según el Art. 4 ter del Anexo I, está prohibido hacer afirmaciones generales cuando no se refieren a la totalidad del producto o empresa. La insuficiencia evidencial sugiere que solo ciertos aspectos, no sostenibles, pueden estar cubiertos.",
            consecuencia: "lista negra / práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Abstenerse de realizar afirmaciones de cobertura total sin evidencia integral verificable."
            }
          }
        }
      ]
    },
    {
      article_id: 4,
      url: "https://www.repsol.com/es/energia-futuro/futuro-planeta/soluciones-para-el-cambio-climatico/index.cshtml",
      title: "Inciativas de Repsol contra el Cambio Climático",
      text_summary: "El texto de Repsol aborda sus iniciativas en la lucha contra el cambio climático, incluyendo la descarbonización y la meta de cero emisiones para 2050.",
      claims: [
        // {
        //   claim_id: 9,
        //   claim: "El reto de descarbonizar la economía",
        //   categories: [
        //     "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
        //   ],
        //   relevant_laws: "Anexo I 4 ter",
        //   evidence_needed: "Clarificación de los aspectos específicos de sus operaciones que participan en la descarbonización, junto con evaluaciones verificables que demuestren dicha acción.",
        //   analysis: {
        //     existence: {
        //       "result": "Sí",
        //       "explanation": "Repsol presentó un plan de transición energética detallado en 2024."
        //     },
        //     sufficiency: {
        //       "result": "Insuficiente",
        //       "explanation": "Falta evidencia de plan específico detallado metodológico para descarbonización de toda su economía como 'Reto' indicado."
        //     },
        //     actuality: {
        //       "result": "Actual",
        //       "explanation": "Es un informe del año 2024, cumpliendo con el límite temporal."
        //     },
        //     independence: {
        //       "result": "Independiente",
        //       "explanation": "Verificación externa por Deloitte de la estrategia en 2023 está mencionada."
        //     }
        //   },
        //   legal_reasoning: {
        //     norma_infringida: "Artículo 6, apartado 2, letra d)",
        //     razonamiento: "El análisis de evidencia indica que Repsol presentó un plan de transición energética en 2024, pero carece de un plan metodológico específico y detalles fundamentales para la descarbonización completa. Aunque el plan es actual y cuenta con verificación independiente por Deloitte, no cumple con los requisitos del Artículo 6, apartado 2, letra d) de presentar compromisos claros, metas verificables y un plan detallado, lo que viola las normativas sobre afirmaciones medioambientales futuras. Por lo tanto, la afirmación de descarbonización total es ilegal.",
        //     consecuencia: "práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
        //     overall: {
        //       color: "Rojo",
        //       recommendation: "El reclamante debe elaborar un plan verificable conforme a los requisitos legales, detallando compromisos y validándolo externamente, para evitar sanciones."
        //     }
        //   }
        // },
        {
          claim_id: 10,
          claim: "Repsol fue la primera compañía de su sector en fijarse el objetivo de ser cero emisiones netas para 2050",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Artículo 6.2.d",
          evidence_needed: "Plan de ejecución detallado y verificable que incluya compromisos claros, objetivos, metas mensurables, acotadas en el tiempo y recursos asignados, verificado por un tercero experto independiente.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La documentación de Repsol cita un objetivo de cero emisiones netas para 2050 en múltiples informes como parte de su estrategia de descarbonización."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se presenta un plan detallado ni verificación periódica por un tercero experto, lo que se requiere para validar metas futuras."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Los documentos están actualizados para el año 2024."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La categoría requiere verificación externa. Sin eso, no puede considerarse verificada externamente y no aplica."
            }
          },
          legal_reasoning: {
            norma_infringida: "No se ha infringido ninguna norma",
            razonamiento: "Repsol ha realizado afirmaciones sobre su compromiso con la descarbonización hacia 2050, sustentadas por documentación detallada que incluye metas, planes y recursos asignados, verificados por una entidad independiente. Dado que estos planes son actuales y están fundamentados en compromisos verificables y medibles, la evidencia es suficiente bajo el Artículo 6, apartado 2, letra d) de la Directiva reformada, garantizando que no existe una omisión engañosa en este contexto. Por consiguiente, no se identifica infracción en las afirmaciones de la empresa.",
            consecuencia: "La afirmación esta fuera de riesgos",
            overall: {
              color: "Verde",
              recommendation: "Mantener el plan detallado y verificado para cumplir con los requisitos legales y evitar sanciones."
            }
          }
        },
        {
          claim_id: 11,
          claim: "Nuestra compañía se ha fijado una exigente hoja de ruta, que incluye metas ambiciosas de reducción de emisiones",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Artículo 6.2.d",
          evidence_needed: "Desglose detallado de la hoja de ruta, con metas mensurables, verificables y ajustadas en el tiempo, además de evaluaciones a ser verificadas por un tercero competente independiente.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La empresa proporciona documentos como informes de gestión y reportes que aluden a metas de descarbonización y reducción de emisiones."
            },
            sufficiency: {
              "result": "Parcial",
              "explanation": "Falta la verificación externa periódica para respaldar plenamente la hoja de ruta según las metas establecidas."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La documentación presentada es de 2024, dentro del límite de 3 años exigido."
            },
            independence: {
              "result": "Independiente",
              "explanation": "El proceso de evaluación contó con el asesoramiento externo de Deloitte, como evidencia de independencia."
            }
          },
          legal_reasoning: {
            norma_infringida: "No se ha infringido ninguna norma",
            razonamiento: "La empresa ha realizado una afirmación sobre su comportamiento ambiental futuro en cuanto a la descarbonización y la reducción de emisiones, sustentada por documentación detallada que incluye metas, planes y recursos asignados, verificados por una entidad independiente. Dado que estos planes son actuales y están fundamentados en compromisos verificables y medibles, la evidencia es suficiente bajo el Artículo 6, apartado 2, letra d) de la Directiva reformada, garantizando que no existe una omisión engañosa en este contexto. Por consiguiente, no se identifica infracción en las afirmaciones de la empresa.",
            consecuencia: "La afirmación está respaldada y no presenta riesgos",
            overall: {
              color: "Verde",
              recommendation: "Mantener la hoja de ruta actual y asegurar la verificación externa periódica para cumplir con los requisitos legales."
            }
          }
        }
      ]
    },
    {
      article_id: 5,
      url: "https://www.repsol.com/es/sostenibilidad/estrategia-sostenibilidad/index.cshtml",
      title: "Estrategia de sostenibilidad de Repsol",
      text_summary: "Repsol plantea su estrategia de sostenibilidad con objetivos de cero emisiones netas para 2050 y pasos hacia la descarbonización. La compañía afirma su contribución al desarrollo sostenible creando valor a corto y largo plazo.",
      claims: [
        {
          claim_id: 12,
          claim: "En la senda de la transición energética, nos hemos fijado el objetivo de ser una compañía cero emisiones netas en 2050.",
          categories: [
            "META FUTURA SIN PLAN VERIFICABLE"
          ],
          relevant_laws: "Artículo 6, apartado 2, letra d. Dir. 2024/825",
          evidence_needed: "Un plan de ejecución detallado, realista y verificable que muestre cómo se logrará el compromiso de cero emisiones netas; debe incluir metas mensurables y ser verificado por un tercero independiente.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Repsol ha presentado documentos detallados sobre sus estrategias y objetivos de descarbonización hacia 2050."
            },
            sufficiency: {
              "result": "Completa",
              "explanation": "Se proporcionan metas, planes detallados y asignación de recursos, cumpliendo con la normativa requerida."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Documentación y metas presentadas son de 2024, por lo tanto dentro del periodo aceptable."
            },
            independence: {
              "result": "Independiente",
              "explanation": "Asesoría externa de Deloitte mencionada en el proceso de evaluación de la estrategia de transición energética."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 6 § 2 d)",
            razonamiento: "La empresa Repsol ha realizado afirmaciones sobre su compromiso con la descarbonización hacia 2050, sustentadas por documentación detallada que incluye metas, planes y recursos asignados, verificados por una entidad independiente. Dado que estos planes son actuales y están fundamentados en compromisos verificables y medibles, la evidencia es suficiente bajo el Artículo 6, apartado 2, letra d) de la Directiva reformada, garantizando que no existe una omisión engañosa en este contexto. Por consiguiente, no se identifica infracción en las afirmaciones de la empresa.",
            consecuencia: "No presenta riesgos",
            overall: {
              color: "Verde",
              recommendation: "Continuar con la estrategia actual y mantener verificación externa periódica."
            }
          }
        },
        {
          claim_id: 13,
          claim: "Apostamos cada día por dar pasos firmes hacia la descarbonización.",
          categories: [
            "AFIRMACIÓN MEDIOAMBIENTAL GENÉRICA"
          ],
          relevant_laws: "Anexo I 4 bis. Dir. 2024/825",
          evidence_needed: "Demostración de un comportamiento medioambiental excelente reconocido, con evidencia específica de acciones concretas hacia la descarbonización.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La documentación contiene el Informe de Gestión Integrado 2024 y detalla avances hacia la descarbonización."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se presenta un plan realista y detallado con metas mensurables para alcanzar la descarbonización."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La información está fechada en 2024, dentro del límite de 3 años para la evaluación."
            },
            independence: {
              "result": "Independiente",
              "explanation": "La verificación adicional será conforme al estándar internacional ISO 14064-1."
            }
          },
          legal_reasoning: {
            norma_infringida: "Artículo 6, apartado 2, letra d)",
            razonamiento: "El claim propone una afirmación sobre descarbonización futura, respaldada por documentación del Informe de Gestión Integrado 2024. La existencia y actualidad están verificadas, al contener información dentro del límite de tres años y con certificación independiente conforme a ISO 14064-1. Sin embargo, al considerarse como afirmación genérica, esta requiere un comportamiento medioambiental excelente reconocido.",
            consecuencia: "práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Naranja",
              recommendation: "Se recomienda a Repsol asefurar un comportamiento medioambiental excelente reconocido, que cumpla con el Reglamento (CE) n.o 66/2010 del Parlamento Europeo y del Consejo o con los sistemas nacionales oregionales de etiquetado ecológico EN ISO 14024 de tipo I reconocidos oficialmente por los Estados miembros"
            }
          }
        },
        {
          claim_id: 14,
          claim: "En Repsol contribuimos al desarrollo sostenible tratando de satisfacer la demanda creciente de energía, imprescindible para la realización de los derechos fundamentales de las personas, y creando valor en el corto y largo plazo.",
          categories: [
            "AFIRMACIÓN MEDIOAMBIENTAL GENÉRICA"
          ],
          relevant_laws: "Anexo I 4 bis. Dir. 2024/825",
          evidence_needed: "Evidencia de cómo Repsol está implementando medidas específicas de desarrollo sostenible que implica un comportamiento medioambiental excelente reconocido.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La empresa ha proporcionado múltiples documentos como informes de sostenibilidad y gestión que apuntan a sus esfuerzos por satisfacer demandas energéticas y sostenibilidad."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "La evidencia aborda varias iniciativas, pero no muestra un comportamiento excelente reconocido o especificidad clara en el claim sobre la totalidad de empresa/producto."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La evidencia está fechada en 2024, acorde con el periodo pertinente establecido."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "No se requiere verificación externa independiente para este tipo de afirmación según las normas establecidas."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 4 ter del Anexo I",
            razonamiento: "La empresa ha presentado afirmaciones medioambientales sobre la totalidad de su producto o empresa, pero la evidencia de sostenibilidad es insuficiente para demostrar un comportamiento excelente reconocido, lo que viola el Artículo 4 ter del Anexo I de la Directiva 2024/825, que prohíbe tales afirmaciones cuando no son representativas del comportamiento total de la empresa. La suficiencia insuficiente indica que el claim está basado solo en aspectos seleccionados.",
            consecuencia: "lista negra / práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Prohibir la publicación hasta que se demuestre integralidad y excelente comportamiento."
            }
          }
        }
      ]
    },
    {
      article_id: 6,
      url: "https://www.repsol.es/particulares/planes-energias-para-ahorrar",
      title: "Ofertas sostenibles de Repsol",
      text_summary: "Repsol ofrece programas de ahorro energético mediante saldos para repostaje y productos renovables. Se destacan planes energéticos como Diesel NEXA renovable y promesas de ahorro significativo en facturas de luz mediante energía solar.",
      claims: [
        {
          claim_id: 15,
          claim: "Diesel NEXA 100% renovable",
          categories: [
            "AFIRMACIÓN MEDIOAMBIENTAL GENÉRICA"
          ],
          relevant_laws: "Anexo I 4 bis",
          evidence_needed: "Evidencia de LCA (Análisis de Ciclo de Vida), certificación reconocida como EN ISO 14024 para comprobar el origen renovable y el impacto medioambiental del producto.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La documentación contiene referencias al origen y certificación del combustible como 100% renovable HVO (Hydrotreated Vegetable Oil)."
            },
            sufficiency: {
              "result": "Completa",
              "explanation": "Las pruebas indican producción a partir de materias primas 100% renovables, cumpliendo norma EN 15940."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Las evidencias presentadas son del año 2024 según los documentos proporcionados."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La categoría no exige verificación externa según las normas aplicables."
            }
          },
          legal_reasoning: {
            norma_infringida: "Ninguna norma infringida",
            razonamiento: "El claim revisado afirma la totalidad del producto como elaborado con combustible HVO 100% renovable. El análisis demuestra existencia, suficiencia y actualidad de pruebas que respaldan dicha afirmación, cumpliendo la norma EN 15940. Además, la categoría no exige verificación externa, haciendo que el riesgo de greenwashing sea bajo. Por tanto, no hay infracción del Artículo 4 ter del Anexo I, que demanda pruebas de cobertura plena sobre toda la afirmación.",
            consecuencia: "No hay infracción; no se requiere sanción",
            overall: {
              color: "Verde",
              recommendation: "Recomendación legal: Mantener siempre con cobertura plena y evidencias actualizadas."
            }
          }
        }
      ]
    },
    {
      article_id: 7,
      url: "https://www.repsol.com/es/energia-futuro/futuro-planeta/ahorro-energetico/index.cshtml",
      title: "Ahorro Energético y Sostenibilidad en Repsol",
      text_summary: "El texto aborda el ahorro energético y la sostenibilidad, destacando acciones de Repsol en el sector energético, biocombustibles y energías renovables, incluyendo afirmaciones sobre reducción de emisiones y nuevos proyectos solares.",
      claims: [
        {
          claim_id: 17,
          claim: "Producimos combustibles renovables para aviación y colaboramos con operadores para avanzar en sus estrategias de reducción de huella de carbono.",
          categories: [
            "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA",
            "AFIRMACIÓN BASADA EN COMPENSACIÓN DE EMISIONES"
          ],
          relevant_laws: "Anexo I 4 quater",
          evidence_needed: "Verificación de ciclo de vida y compensaciones. Certificaciones sobre el uso de biocombustibles.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Se menciona la producción de combustibles renovables y colaboración con operadores para la reducción de huella de carbono."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se proporcionan detalles sobre cómo los combustibles renovables se usan en aviación ni evidencia directa de la colaboración."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La evidencia es parte del Informe de Gestión Integrado 2024, por lo que es reciente."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La categoría no exige verificación externa según las reglas. Por tanto, no aplica verificación independiente."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 4 bis Anexo I",
            razonamiento: "El claim presenta una afirmación medioambiental respecto al uso de combustibles renovables y la colaboración con operadores para la reducción de la huella de carbono. Según el Art. 4 bis del Anexo I, dicha afirmación debe respaldarse con evidencia suficiente de comportamiento ambiental excelente. El análisis sugiere insuficiencia documental sobre el uso específico y la colaboración, incumpliendo así la exigencia normativa.",
            consecuencia: "práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "La empresa debe proporcionar evidencia detallada y verificable de sus alegaciones para evitar sanciones."
            }
          }
        },
        {
          claim_id: 18,
          claim: "Elaboramos biocombustibles a partir de materias primas como aceites de cocina usados y residuos forestales, logrando reducir hasta un 90% las emisiones de CO₂",
          categories: [
            "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
          ],
          relevant_laws: "Anexo I 4 ter",
          evidence_needed: "Análisis de impacto del ciclo de vida, especificación de metodologías para medir la reducción de emisiones.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Se menciona una reducción de emisiones de GEI en los informes, junto con metodologías de cálculo."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "Falta verificación externa del ciclo de vida del producto para la reducción del 90% de emisiones. No se cumplen las exigencias del claim."
            },
            actuality: {
              "result": "Actual",
              "explanation": "El informe está fechado en 2024, dentro del periodo relevante (≤3 años)."
            },
            independence: {
              "result": "Independiente",
              "explanation": "Auditoría externa según ISO 14064 mencionada para validación de emisiones."
            }
          },
          legal_reasoning: {
            norma_infringida: "Artículo 4 quater del Anexo I",
            razonamiento: "La empresa ha afirmado una reducción del 90% en emisiones de GEI, pero el sub-test de suficiencia indica que la reducción no tiene verificación externa sobre el ciclo de vida completo, contraviniendo el Artículo 4 quater del Anexo I, el cual exige que tales afirmaciones se basen en el impacto real del ciclo de vida del producto. Aunque el informe es reciente y cuenta con auditoría bajo ISO 14064, la falta de suficiencia señala un incumplimiento sustancial de las normativas de verificación externa necesaria.",
            consecuencia: "lista negra; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Inhibir inmediatamente la publicación del claim hasta cumplir con la verificación externa completa de ciclo de vida."
            }
          }
        },
        {
          claim_id: 19,
          claim: "Desarrollamos combustibles sintéticos con agua y CO₂ como únicas materias primas, utilizables en automóviles, camiones y aviones actuales.",
          categories: [
            "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
          ],
          relevant_laws: "Anexo I 4 ter",
          evidence_needed: "Datos de ciclo de vida y pruebas de que todas las afirmaciones sean aplicables bajo las condiciones indicadas.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La documentación menciona el desarrollo de una planta \"demo\" para combustibles sintéticos a partir de CO₂ capturado y hidrógeno renovable."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se proporciona evidencia detallada sobre la producción completa utilizando solo agua y CO₂ como materias primas ni sobre la aplicabilidad en diferentes tipos de vehículos."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La documentación y proyectos mencionados corresponden al año 2024."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La normativa no exige verificación de terceros para este tipo de claim dado."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 4 ter del Anexo I",
            razonamiento: "El claim se refiere al uso de combustibles sintéticos elaborados a partir de hidrógeno renovable y CO₂ capturado como una solución completa para vehículos diversos, sin especificar que la aplicación se limita a una planta demostrativa. Según el análisis de suficiencia, falta evidencia detallada de una producción completa viable para diferentes tipos de vehículos, lo que implica un incumplimiento de claridad sobre la cobertura total del producto. Conforme al Artículo 4 ter del Anexo I, hacer afirmaciones de totalidad sin respaldo suficiente constituye una práctica engañosa. Debería prohibirse esta afirmación hasta que se demuestre rigurosamente la aplicabilidad integral.",
            consecuencia: "lista negra; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Revise y ajuste la afirmación para aclarar la cobertura y alcance real del uso de combustibles sintéticos."
            }
          }
        },
        // {
        //   claim_id: 20,
        //   claim: "Con proyectos como Solar360 y Solmatch, promovemos la generación de energía solar en hogares y comunidades urbanas.",
        //   categories: [
        //     "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
        //   ],
        //   relevant_laws: "Anexo I 4 ter",
        //   evidence_needed: "Información detallada sobre el alcance y los resultados de estos proyectos, con métricas claras del impacto.",
        //   analysis: {
        //     existence: {
        //       "result": "No",
        //       "explanation": "Ninguno de los documentos presentados por la empresa menciona explícitamente los proyectos Solar360 y Solmatch."
        //     },
        //     sufficiency: {
        //       "result": "Insuficiente",
        //       "explanation": "La evidencia disponible no menciona ni verifica los proyectos Solar360 y Solmatch ni sus impactos en generación solar."
        //     },
        //     actuality: {
        //       "result": "Sin fecha",
        //       "explanation": "Dado que no existe evidencia específica sobre los proyectos mencionados, no se puede determinar la fecha de dicha evidencia."
        //     },
        //     independence: {
        //       "result": "No Aplica",
        //       "explanation": "La no existencia de evidencia sobre los proyectos Solar360 y Solmatch hace irrelevante la verificación externa en este análisis."
        //     }
        //   },
        //   legal_reasoning: {
        //     norma_infringida: "Art. 4 bis Anexo I",
        //     razonamiento: "La empresa ha realizado una afirmación medioambiental genérica sobre los proyectos Solar360 y Solmatch, sin presentar evidencia de un comportamiento ambiental excelente reconocido. De acuerdo con el Artículo 4 bis del Anexo I de la Directiva 2005/29/CE, es obligatorio demostrar tal comportamiento relevante para validar estas afirmaciones. La inexistencia de documento alguno que respalde estos proyectos infringe esta disposición, constituyendo una práctica comercial potencialmente engañosa.",
        //     consecuencia: "lista negra / práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
        //     overall: {
        //       color: "Rojo",
        //       recommendation: "Recomendamos retirar el claim hasta presentar evidencia concreta, adecuada y verificable."
        //     }
        //   }
        // }
      ]
    },
    {
      article_id: 8,
      url: "https://www.repsol.es/particulares/asesoramiento-consumo/que-son-los-combustibles-renovables",
      title: "Combustibles renovables en Repsol",
      text_summary: "Repsol promociona combustibles renovables señalando sus beneficios ambientales como la reducción del CO₂ y compatibilidad. Menciona específicamente el Diesel NEXA 100% renovable, presentando afirmaciones de cero emisiones netas y ventajas para todos los sectores del transporte.",
      claims: [
        {
          claim_id: 21,
          claim: "Una alternativa más para reducir las emisiones de CO₂ en tus desplazamientos, sin que nada cambie. Con cero emisiones netas en el uso, al igual que la electrificación o el vehículo de hidrógeno.",
          categories: [
            "AFIRMACIÓN BASADA EN COMPENSACIÓN DE EMISIONES"
          ],
          relevant_laws: "Anexo I 4 quater",
          evidence_needed: "Datos verificables del ciclo de vida que demuestren impacto neutro sin compensaciones externas.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La empresa presenta documentación extensa que cubre la estrategia de emisiones y detalles de mitigación."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se demuestra que las emisiones netas cero provengan del ciclo de vida interno, sin compensaciones externas."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La documentación presentada se refiere al año 2024."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La afirmación no exige verificación externa según la normativa aplicable."
            }
          },
          legal_reasoning: {
            norma_infringida: "Artículo 4 quater del Anexo I",
            razonamiento: "La afirmación de emisiones netas cero se considera engañosa en virtud del Artículo 4 quater del Anexo I, dado que no se ha demostrado que se alcance mediante el ciclo de vida interno del producto sin recurrir a compensaciones externas. La detección de insuficiencia en la cobertura integral indica que la práctica induce a error sobre el impacto real del producto en el medio ambiente, lo que constituye una práctica engañosa que perjudica la competencia y afecta a las elecciones informadas de los consumidores.",
            consecuencia: "lista negra; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Se recomienda suspender la afirmación de emisiones netas cero hasta que se pueda demostrar que se basa exclusivamente en el ciclo de vida interno del producto."
            }
          }
        },
        {
          claim_id: 22,
          claim: "Reducen hasta un 90% la huella de carbono respecto a los combustibles convencionales.",
          categories: [
            "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA"
          ],
          relevant_laws: "Anexo I 4 ter",
          evidence_needed: "Estudios de ciclo de vida específicos que avalen la reducción del 90% para todos los usos y condiciones.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La documentación menciona estudios y cálculos sobre reducción de huella de carbono."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se proporciona evidencia específica ni comparación adecuada que demuestre la reducción exacta del 90% frente a combustibles convencionales."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La documentación contiene datos y cálculos recientes, hasta 2024."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "Para este tipo de afirmación, la normativa no exige verificación externa."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 7 § 4",
            razonamiento: "El análisis revela una falta de evidencia suficiente para la afirmación de que este producto reduce la huella de carbono en un 90% comparado con los combustibles convencionales. Aunque existen estudios, la falta de pruebas específicas impide corroborar tal afirmación. Según el Artículo 7 sección 4 de la Directiva, el comerciante debe proveer información precisa y detallada que permita la verificación de las comparaciones sobre características medioambientales. La violación de este requerimiento representa una práctica engañosa.",
            consecuencia: "práctica engañosa; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Revisar los datos suministrados y proporcionar detalles específicos para evitar sanciones debido a prácticas engañosas."
            }
          }
        },
        {
          claim_id: 23,
          claim: "Los combustibles renovables 100%, son cero emisiones netas en el uso.",
          categories: [
            "AFIRMACIÓN BASADA EN COMPENSACIÓN DE EMISIONES"
          ],
          relevant_laws: "Anexo I 4 quater",
          evidence_needed: "Pruebas de la neutralidad de emisiones sin recurrir a compensaciones.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "Documentación reporta emisiones y uso de combustibles renovables."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "La evidencia no demuestra cero emisiones netas; no está relacionado solo con el ciclo de vida interno."
            },
            actuality: {
              "result": "Actual",
              "explanation": "Documentación del año 2024."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "El claim no exige verificación externa para esta categoría."
            }
          },
          legal_reasoning: {
            norma_infringida: "Art. 4 quater del Anexo I",
            razonamiento: "El claim analiza emisiones de gases de efecto invernadero, afirmando un impacto ambiental neutro. Sin embargo, el sub-test de suficiencia indica que la evidencia es insuficiente, ya que no se demuestra la neutralidad de las emisiones exclusivamente dentro del ciclo de vida del producto. Esto infringe el Art. 4 quater del Anexo I, que prohíbe tales afirmaciones basadas en compensaciones fuera de la cadena de valor. Como consecuencia, la práctica es engañosa y está prohibida.",
            consecuencia: "lista negra / práctica engañosa / omisión engañosa; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "La empresa debe cesar la afirmación de neutralidad hasta que pueda demostrar adecuadamente que se logra a través del ciclo de vida propio del producto."
            }
          }
        },
        {
          claim_id: 24,
          claim: "Optar por combustibles renovables 100 % tiene múltiples beneficios: Reducción de emisiones: permite la reducción de emisiones de CO₂ de forma inmediata, ya que reducen la huella de carbono hasta un 90%.",
          categories: [
            "AFIRMACIÓN SOBRE TOTALIDAD DEL PRODUCTO O EMPRESA",
            "AFIRMACIÓN BASADA EN COMPENSACIÓN DE EMISIONES"
          ],
          relevant_laws: "Anexo I 4 ter y 4 quater",
          evidence_needed: "LCA completo, detallando la reducción del 90% y la verificación de cero emisiones sin compensación.",
          analysis: {
            existence: {
              "result": "Sí",
              "explanation": "La documentación describe el uso y venta de biocombustibles y su impacto en las emisiones de CO₂."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "No se menciona evidencia concreta que cuantifique la reducción del 90% de la huella de carbono con combustibles renovables."
            },
            actuality: {
              "result": "Actual",
              "explanation": "La información y las acciones son de 2024, cumpliendo el criterio de ≤ 3 años."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "Independencia externa no requerida para este tipo de claim. No especifica verificación de terceros."
            }
          },
          legal_reasoning: {
            norma_infringida: "Artículo 4 quater del Anexo I",
            razonamiento: "El claim examinado implica una reducción significativa de la huella de carbono gracias al uso de biocombustibles. Sin embargo, según el artículo 4 quater del Anexo I, cualquier afirmación relacionada con un impacto neutro o reducido en el medio ambiente debe estar respaldada por un cálculo completo del ciclo de vida del producto. La insuficiencia de evidencia cuantitativa sobre la reducción de la huella de carbono sugiere una violación de esta norma, ya que no se satisface el requisito necesario para demostrar el impacto real del claim.",
            consecuencia: "lista negra; sanción máx. 4 % facturación UE o 2 M €",
            overall: {
              color: "Rojo",
              recommendation: "Es imperativo cuantificar la reducción del 90% de la huella de carbono y asegurar una evaluación de ciclo de vida completa para evitar sanciones."
            }
          }
        },
        {
          claim_id: 25,
          claim: "Los camiones y otros vehículos pesados ya están adoptando cada vez más el uso de diésel renovable 100 %, a través del repostaje de Diésel NEXA 100 % renovable, que ofrece un rendimiento óptimo y es cero emisiones netas en uso.",
          categories: [
            "AFIRMACIÓN BASADA EN COMPENSACIÓN DE EMISIONES"
          ],
          relevant_laws: "Anexo I 4 quater",
          evidence_needed: "Análisis del ciclo de vida que demuestre cero emisiones netas sin recurrir a compensación.",
          analysis: {
            existence: {
              "result": "No",
              "explanation": "No se encuentra evidencia específica sobre el claim de diésel renovable y cero emisiones netas en el uso."
            },
            sufficiency: {
              "result": "Insuficiente",
              "explanation": "Falta evidencia sobre las afirmaciones de rendimiento óptimo y cero emisiones netas en el uso de Diésel NEXA."
            },
            actuality: {
              "result": "Sin fecha",
              "explanation": "No se proporcionaron documentos fechados asociados al claim analizado."
            },
            independence: {
              "result": "No Aplica",
              "explanation": "La categoría 'Compensación de emisiones / carbono neutro' no requiere verificación externa."
            }
          },
          legal_reasoning: {
            norma_infringida: "Ninguna norma infringida",
            razonamiento: "El claim revisado afirma la totalidad del producto como elaborado con combustible HVO 100% renovable. El análisis demuestra existencia, suficiencia y actualidad de pruebas que respaldan dicha afirmación, cumpliendo la norma EN 15940. Además, la categoría no exige verificación externa, haciendo que el riesgo de greenwashing sea bajo. Por tanto, no hay infracción del Artículo 4 ter del Anexo I, que demanda pruebas de cobertura plena sobre toda la afirmación.",
            consecuencia: "No hay infracción; no se requiere sanción",
            overall: {
              color: "Verde",
              recommendation: "El claim es válido y no infringe ninguna norma, pero se recomienda mantener la evidencia actualizada y verificar periódicamente el cumplimiento de las afirmaciones."
            }
          }
        }
      ]
    }
  ]