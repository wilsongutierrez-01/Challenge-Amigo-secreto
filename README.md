# 🎁 Proyecto: Amigo Secreto

Este proyecto es una pequeña aplicación web desarrollada con HTML, CSS y JavaScript que permite organizar un sorteo de **amigo secreto** de forma sencilla.

## 🚀 ¿Cómo funciona?

### 1. Agregar nombres
Los usuarios pueden ingresar nombres en un campo de texto. Al hacer clic en el botón **"Añadir"**, el nombre se guarda en una lista de amigos. Solo se aceptan nombres válidos (no vacíos).

### 2. Visualizar la lista de participantes
Cada nombre agregado se muestra automáticamente en una lista visible debajo del campo de entrada. Esto ayuda a verificar que todos los amigos estén correctamente registrados antes del sorteo.

### 3. Sortear el amigo secreto
Una vez que haya al menos **3 amigos** en la lista, se puede realizar el sorteo haciendo clic en el botón **"Sortear amigo"**. La aplicación selecciona aleatoriamente uno de los nombres y lo muestra como el amigo secreto.

### 4. Reinicio automático
Después del sorteo, la lista de amigos se limpia automáticamente para que se pueda realizar un nuevo sorteo desde cero si se desea.

## 📦 Tecnologías utilizadas

- **HTML5** para la estructura del contenido.
- **CSS3** para el diseño visual.
- **JavaScript** para la lógica del sorteo y manipulación del DOM.

## ✅ Validaciones implementadas

- No se permite agregar nombres vacíos.
- No se permite sortear si hay menos de 3 amigos registrados.

## 📝 Notas

- La aplicación no guarda los nombres entre recargas, ya que no utiliza almacenamiento local ni base de datos.

---

¡Diviértete descubriendo quién es tu amigo secreto! 🎉
