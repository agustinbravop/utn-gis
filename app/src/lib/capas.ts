export const LAYER_IDS = [
  "actividades_agropecuarias",
  "actividades_economicas",
  "complejo_de_energia_ene",
  "curso_de_agua_hid",
  "curvas_de_nivel",
  "edif_construcciones_turisticas",
  "edif_depor_y_esparcimiento",
  "edif_educacion",
  "edif_religiosos",
  "edificio_de_seguridad_ips",
  "edificio_publico_ips",
  "edificios_ferroviarios",
  "edificio_de_salud_ips",
  "ejido",
  "espejo_de_agua_hid",
  "estructuras_portuarias",
  "infraestructura_aeroportuaria_punto",
  "infraestructura_hidro",
  "isla",
  "limite_politico_administrativo_lim",
  "lineas_de_conduccion_ene",
  "localidades",
  "lugares_gastronomicos",
  "marcas_y_seniales",
  "muro_embalse",
  "obra_de_comunicacion",
  "obra_portuaria",
  "otras_edificaciones",
  "provincias",
  "pais_lim",
  "puente_red_vial_puntos",
  "puntos_de_alturas_topograficas",
  "puntos_del_terreno",
  "red_ferroviaria",
  "red_vial",
  "salvado_de_obstaculo",
  "senializaciones",
  "sue_congelado",
  "sue_consolidado",
  "sue_costero",
  "sue_hidromorfologico",
  "sue_no_consolidado",
  "veg_arborea",
  "veg_arbustiva",
  "veg_cultivos",
  "veg_hidrofila",
  "veg_suelo_desnudo",
  "vias_secundarias",
];

export const CRS = "EPSG:4326";

/** Retorna el nombre legible de la capa, dado su identificador. */
export function layerNameFromLayerId(layerId: string) {
  return layerId
    .toLocaleLowerCase()
    .split("_")
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" ");
}
