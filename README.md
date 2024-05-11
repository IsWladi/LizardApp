# Lizard

## Levantar Aplicación con Docker

**Prerrequisitos:**

- **Docker:** Asegúrate de tener la última versión de Docker instalada en tu sistema, ya que incluye el comando `docker compose`, esencial para ejecutar los contenedores.

**Instrucciones:**

1. **Navega a la Carpeta Raíz del Repositorio:**

   Abre una terminal y cambia tu directorio a la carpeta raíz del repositorio.

2. **Inicia los Contenedores:**

   Ejecuta el siguiente comando:

   ```
   docker compose up -d
   ```

   Este comando construye e inicia los contenedores en modo detached.

3. **Accede a la Documentación de la API:**

   Una vez que los contenedores estén en funcionamiento, abre tu navegador web y ve a:

   ```
   http://localhost:8000/docs
   ```

   Aquí, puedes ver la documentación interactiva de la API.

4. **Accede a la aplicación móvil desde el navegador:**

   Una vez que los contenedores estén en funcionamiento, abre tu navegador web y ve a:

   ```
   http://localhost:8100
   ```

   Aquí, puedes ver la aplicación móvil en funcionamiento.
