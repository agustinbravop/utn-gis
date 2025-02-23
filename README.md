# TPI para Sistemas de Información Geográficos

TPI realizado por el grupo 4 para la cursada 2024 de Sistemas de Información Geográficos, asignatura de Ingeniería en Sistemas de Información de la UTN FRRe.

Estructura de carpetas:

- `app/`: código React + Vite para la aplicación web que consume el servidor WMS generado con QGIS.
- `backend/`: código Node.js para el servidor HTTP conectado a la base de datos PostgreSQL para insertar y consultar features.
- `layer_styles/`: archivos `*.qml` exportados de QGIS que guardan la simbología de las capas del IGN.

## Guía de instalación

Esta guía supone que ya se tiene instalada la máquina virtual otorgada por la cátedra.

### 1. Crear base de datos

Para crear una base de datos PostgreSQL con la extensión PostGIS:

1. Abrir pgAdmin.
2. Crear una nueva base de datos con nombre `tpi_db`.
3. Ejecutar el comando SQL `CREATE EXTENSION postgis`.

### 2. Cargar capas a la base de datos

1. Descargar el archivo comprimido proporcionado por la cátedra con las capas del SIG IGN.
2. Descomprimir el archivo .zip descargado.
3. Con la terminal posicionada en la carpeta donde se encuentran los archivos .shp, ejecutar el script entero de `cargar-capas.sh` para cargar las capas a la base de datos.

### 3. Cargar capas al proyecto QGIS

1. En el proyecto QGIS, ir a Data Source Manager > PostgreSQL.
2. Crear una nueva conexión de la BD creada.
3. Importar todos los esquemas de `public`.
4. Hacer click en Add.

### 4. Configurar servidor del proyecto QGIS

Para configurar el servidor de QGIS hay que:

1. Ir a Project > Properties.
2. En Services Capabilities:
   - Habilitar "Services Capabilities".
   - Cargar a preferencia el resto de campos.
3. En WMS:
   - Habilitar "Advertised extent".
   - Activar los checkboxs "Use attribute form settings for GetFeatureInfo respose" y "Add geometry to feature response".
4. Hacer click en "Apply" y luego en "Ok".

Guardar ahora el archivo como `TPI.qgs` y ejecutar el siguiente comando:

```
sudo mv /home/user/TPI.qgs /var/www/html/
```

El servidor debería responder en http://localhost/cgi-bin/qgis_mapserv.fcgi?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetCapabilities&map=/var/www/html/TPI.qgs

## Guía para exportar estilos de capa de QGIS

Parte del TPI consiste en definir la simbología de cada capa. Esta simbología se guarda en la carpeta `layer_styles/` de este repositorio para poder trabajar de manera colaborativa.

Para que no haya problemas al compartir estilos entre los distintos archivos del proyecto en las distintas computadoras, **es importante que los nombres de las capas en QGIS sean los definidos en `cargar-capas.sh`**.

### Exportar un estilo de capa individualmente

1. Hacer un click izquierdo en una capa.
2. Seleccionar "Properties..." de esa capa.
3. Ir al menú dropdown "Style" que se encuentra en la esquina inferior izquierda del menú con las propiedades.
4. Para exportar el estilo de capa, seleccionar "Save Style...". Luego seleccionar el botón "..." del input "File", dirigirse a la carpeta `layer_styles/` del repositorio, y guardar el archivo con nombre igual al de la capa cuyo estilo se está guardando.
5. Para importar un estilo de capa, seleccionar "Load Style...". Luego seleccionar el botón "..." del input "File", dirigirse a la carpeta `layer_styles/` del repositorio, y seleccionar el archivo con nombre igual al de la capa cuyo estilo se está guardando.

### Exportar todos los estilos de capa a la misma vez

1. Ir a "Plugins" > "Manage and Install Plugins...".
2. Instalar los plugins `Layer Style Loader` y `Style Exporter`.

Para exportar:

1. Seleccionar "Plugins" > "Style Exporter" > "Export layer styles". Esto abre un menú.
2. Seleccionar "Select All" para exportar los estilos de todas las capas.
3. En "Data to export" se debe elegir el formato QML.
4. En "Saving path", utilizando el botón "..." que abre un buscador de archivos, se debe ingresar la carpeta `layer_styles`.
5. Presionar "OK" exporta el estilo de cada capa como un archivo `*.qml` dentro de `layer_styles/` cuyo nombre es el nombre de la capa.

Para importar:

1. Seleccionar "Plugins" > "Layer Style Loader" > "Load Layer Styles". Esto despliega un menú.
2. Hacer click en "Select Parent Folder Path" para, mediante el buscador de archivos, ingresar la carpeta `layer_styles/`.
3. Presionar el botón "Load Layer Styles" para cargar todos los archivos `*.qml` que existan en `layer_styles/`. Cada archivo es asociado a la capa que tenga el mismo nombre.
