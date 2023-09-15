// Función para generar un nombre de archivo único
export function generateUniqueFilename() {
    const timestamp = Date.now(); // Obtiene una marca de tiempo actual en milisegundos
    const randomString = Math.random().toString(36).substring(2, 15); // Genera una cadena aleatoria
    const uniqueFilename = `${timestamp}-${randomString}.jpg`; // Concatena la marca de tiempo y la cadena aleatoria con una extensión (ejemplo: timestamp-randomString.jpg)
    return uniqueFilename;
}