'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    let titles = ["Como Hacer Tu Primer MakeUp", "Pasos para el Skin Care", "UNO DE LOS PRODUCTOS DEL AÑO: LAS CÁPSULAS DE MAQUILLAJE DE CLARINS", "4 PRODUCTOS «BEAUTY» QUE ME HAN ENCANTADO POR MENOS DE 5 Dolares", "Secador de pelo Dyson: Opiniones y Precio"]

    let descriptions = ["Últimamente hemos escuchado y leído bastantes veces sobre primer de maquillaje, pero ¿qué es realmente y cómo hay que aplicarlo? Estas son preguntas que hoy respondemos en nuestro post. La verdad es que es muy importante para la salud de tu rostro que aprendas a usar primer, así que ¡mira que simple es!",
    "Cuando no se trata, la piel sufre los efectos del tiempo, el clima, la exposición al sol y las impurezas que se acumulan. Estos factores pueden acelerar el envejecimiento prematuro de la piel, formar arrugas, provocar imperfecciones y dejarla sin brillo y sin vida. Por eso es importante mantener una rutina de cuidado de la piel y seguir el paso a paso correctamente para cosechar los resultados.",
    "Pues ante todos ustedes, el que parece ser uno de los productos del año: las cápsulas de maquillaje de Clarins Milky Boost Capsules. Una idea tan genial que parece mentira que no no existiera ya. Teníamos ampollas y cápsulas de tratamiento pero, al menos que yo supiera, no las había de maquillaje y me parecen un gran invento.",
    "Sabéis que en este blog tienen cabida productos beauty de todos los tipos y precios. Suelo hablar de los que utilizo y de los que me dan buen resultado, pero confieso que cuando además son baratos, me gusta un poquitín más contároslo. Hoy os quiero hablar de 4 productos maravillosos que he probado varias veces (menos uno de ellos que lo descubrí esta misma semana) y que se venden en Mercadona.",
    "¿Merece la pena gastarse casi 400 dolares en un secador de pelo? Pues depende. Depende de cuánto estés dispuesta a gastar para secar y cuidar tu pelo, y de la pasta que tengas en la cuenta corriente. Aunque si no tienes una tarjeta que deslumbre por su cantidad monetaria, siempre tienes la opción de ahorrar un par de meses y darte el capricho."]
    for (let i = 0; i < titles.length; i++) {
      await queryInterface.bulkInsert(
        "post",
        [
          {
            title: titles[i],
            description: descriptions[i],
            iduser: Math.floor(Math.random() * 3) + 1,
            idcategory: Math.floor(Math.random() * 3) + 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('post', null, {});
  }
};
