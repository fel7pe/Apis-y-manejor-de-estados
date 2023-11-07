# Instructions  

```
Objetivo: El objetivo de este ejercicio es que los estudiantes practiquen la obtención de datos de una API, manejen esos datos en componentes de React y desarrollen una funcionalidad de ordenación.
```

Configuración del Entorno:

Asegúrate de tener Node.js y npm instalados en tu sistema.
Crea una nueva aplicación de React utilizando Create React App o tu método preferido.

## Componentes:

Crea dos componentes funcionales: ProductList y SortedProductList.
Obtención de Datos:

En el componente ProductList, utiliza useEffect para realizar una solicitud GET a la API "https://fakestoreapi.com/products" y almacena los datos en un estado utilizando useState.

## Mostrar Productos:

En el componente ProductList, muestra la lista de productos en una cuadrícula o lista, con detalles como nombre, precio, descripción, etc.

## Ordenación por Rating:

En el componente SortedProductList, toma los datos del estado del componente ProductList y ordénalos por rating (valoración). Puedes utilizar el método sort para hacerlo.

## Mostrar Productos Ordenados:

En el componente SortedProductList, muestra la lista de productos ordenados por rating en una cuadrícula o lista, con los mismos detalles que en el componente ProductList.

## Estilos:

Aplica estilos CSS a ambos componentes para hacerlos más atractivos visualmente. Es este punto, esta característica es muy apreciada.

# Resto adicional!!

### Botón de Ordenación:

Agrega un botón en el componente ProductList que permita al usuario cambiar entre la lista de productos no ordenados y la lista ordenada por rating.

```
Pruebas:

Verifica que los productos se obtengan correctamente de la API y que la funcionalidad de ordenación por rating funcione.
```

Notas Adicionales:

```
Puedes utilizar fetch o una biblioteca como Axios para realizar la solicitud a la API.
```
```
La ordenación por rating puede ser ascendente o descendente, dependiendo de la elección del estudiante.
```

Este ejercicio proporcionará a los estudiantes experiencia práctica en la obtención de datos de una API, manipulación de datos y creación de funcionalidades avanzadas en React utilizando useEffect y useState.