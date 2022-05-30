## Que es Jwt
Es un conjunto de medios de autenticación para peticiones http que representar demandas para ser transferidos entre (cliente y servidor). 
Las partes de un JWT se codifican como un objeto JSON que está firmado digitalmente.
Un JWT firmado consta de tres partes, todas ellas codificadas en Base64 y separadas por un punto:


## Como esta compuesto Jwt
compuesto por 3 partes:
Header: El header consta generalmente de dos valores y proporciona información importante sobre el token. Contiene: 
•	El tipo de token
•	El algoritmo de la firma y/o cifrado utilizados. 

Payload: El campo payload de JSON Web Token contiene la información real que se transmitirá a la aplicación. Aquí se definen algunos estándares que determinan qué datos se transmiten y cómo. La información se proporciona como pares key/value (clave-valor); las claves se denominan claims en JWT. Hay tres tipos diferentes de claims

Firma: La firma de un JSON Web Token se crea utilizando la codificación Base64 del header y del payload, así como el método de firma o cifrado especificado. La estructura viene definida por JSON Web Signature (JWS), un estándar establecido en el RFC 7515. Para que la firma sea eficaz, es necesario utilizar una clave secreta que solo conozca la aplicación original. Por un lado, la firma verifica que el mensaje no se ha modificado por el camino. Por otro, si el token está firmado con una clave privada, también garantiza que el remitente del JWT sea el correcto.

Existen diferentes métodos de firma, dependiendo del nivel de confidencialidad de los datos

## Escribeme un servidor sencillo de express tu solo

const express = require('express')
const app = express()

app.get('/', =>(req, res){
  res.send('Hola Servidor')
})

app.listen(4000)

