import Products from "../models/Products.js";

function addProducts() {
   Products.insertMany([
      {
         "titulo": "Jabón de Lavanda",
         "descripcion": "Jabón de lavanda natural para una limpieza suave y relajante.",
         "categoria": "Skincare",
         "precio": 20,
         "cantidad": 10
      },
      {
         "titulo": "Mascarilla de Arcilla",
         "descripcion": "Mascarilla de arcilla purificante para una piel radiante.",
         "categoria": "Skincare",
         "precio": 30,
         "cantidad": 8
      },
      {
         "titulo": "Shampoo Nutritivo",
         "descripcion": "Shampoo nutritivo con ingredientes naturales para un cabello saludable.",
         "categoria": "Cuidado del cabello",
         "precio": 25,
         "cantidad": 12
      },
      {
         "titulo": "Crema Hidratante de Rosas",
         "descripcion": "Crema hidratante con extracto de rosas para una piel suave y fresca.",
         "categoria": "Skincare",
         "precio": 35,
         "cantidad": 6
      },
      {
         "titulo": "Aceite de Masaje Relajante",
         "descripcion": "Aceite de masaje relajante con aromas naturales para aliviar el estrés.",
         "categoria": "Cuidado del cuerpo",
         "precio": 40,
         "cantidad": 15
      },
      {
         "titulo": "Set de Velas Aromáticas",
         "descripcion": "Set de velas aromáticas para crear un ambiente tranquilo y acogedor.",
         "categoria": "Ambiente relajante",
         "precio": 50,
         "cantidad": 4
      },
      {
         "titulo": "Exfoliante de Azúcar",
         "descripcion": "Exfoliante de azúcar natural para una piel suave y renovada.",
         "categoria": "Skincare",
         "precio": 15,
         "cantidad": 9
      },
      {
         "titulo": "Aceite Esencial de Lavanda",
         "descripcion": "Aceite esencial de lavanda para aromaterapia y relajación.",
         "categoria": "Aromaterapia",
         "precio": 18,
         "cantidad": 14
      },
      {
         "titulo": "Crema Antienvejecimiento",
         "descripcion": "Crema antienvejecimiento con colágeno y vitaminas.",
         "categoria": "Skincare",
         "precio": 45,
         "cantidad": 7
      },
      {
         "titulo": "Bálsamo Labial Natural",
         "descripcion": "Bálsamo labial natural para labios suaves y saludables.",
         "categoria": "Cuidado labial",
         "precio": 8,
         "cantidad": 20
      },
      {
         "titulo": "Máscara Facial de Oro",
         "descripcion": "Máscara facial de oro para rejuvenecer la piel.",
         "categoria": "Skincare",
         "precio": 55,
         "cantidad": 5
      },
      {
         "titulo": "Aceite de Baño de Eucalipto",
         "descripcion": "Aceite de baño de eucalipto para una experiencia relajante en la bañera.",
         "categoria": "Cuidado del cuerpo",
         "precio": 22,
         "cantidad": 10
      },
      {
         "titulo": "Cepillo de Masaje Corporal",
         "descripcion": "Cepillo de masaje corporal para exfoliación y circulación sanguínea.",
         "categoria": "Accesorios de spa",
         "precio": 12,
         "cantidad": 15
      },
      {
         "titulo": "Crema Solar SPF 30",
         "descripcion": "Crema solar con factor de protección SPF 30 para la piel.",
         "categoria": "Protección solar",
         "precio": 28,
         "cantidad": 8
      },
      {
         "titulo": "Vitamina C Sérum Facial",
         "descripcion": "Sérum facial con vitamina C para una piel radiante y joven.",
         "categoria": "Skincare",
         "precio": 32,
         "cantidad": 6
      },
      {
         "titulo": "Sales de Baño de Lavanda",
         "descripcion": "Sales de baño de lavanda para un baño relajante y perfumado.",
         "categoria": "Cuidado del cuerpo",
         "precio": 18,
         "cantidad": 12
      },
      {
         "titulo": "Cera de Masaje de Chocolate",
         "descripcion": "Cera de masaje de chocolate para una experiencia indulgente.",
         "categoria": "Cuidado del cuerpo",
         "precio": 25,
         "cantidad": 9
      },
      {
         "titulo": "Vela de Masaje de Almendras",
         "descripcion": "Vela de masaje con aroma a almendras para un masaje sensual.",
         "categoria": "Ambiente relajante",
         "precio": 30,
         "cantidad": 7
      },
      {
         "titulo": "Tónico Facial de Rosas",
         "descripcion": "Tónico facial de rosas para refrescar y tonificar la piel.",
         "categoria": "Skincare",
         "precio": 16,
         "cantidad": 11
      },
      {
         "titulo": "Loción Corporal de Aloe Vera",
         "descripcion": "Loción corporal de aloe vera para una piel suave e hidratada.",
         "categoria": "Cuidado del cuerpo",
         "precio": 22,
         "cantidad": 10
      },
      {
         "titulo": "Candado de Meditación",
         "descripcion": "Candado de meditación para la práctica de mindfulness.",
         "categoria": "Accesorios de meditación",
         "precio": 10,
         "cantidad": 20
      },
      {
         "titulo": "Aceite de Masaje de Rosa Mosqueta",
         "descripcion": "Aceite de masaje de rosa mosqueta para una piel rejuvenecida.",
         "categoria": "Cuidado del cuerpo",
         "precio": 28,
         "cantidad": 8
      },
      {
         "titulo": "Bálsamo de Almendras para Labios",
         "descripcion": "Bálsamo labial de almendras para labios suaves y aromáticos.",
         "categoria": "Cuidado labial",
         "precio": 10,
         "cantidad": 15
      },
      {
         "titulo": "Máscara de Ojos Relajante",
         "descripcion": "Máscara de ojos relajante con efecto térmico para aliviar la tensión ocular.",
         "categoria": "Accesorios de relajación",
         "precio": 15,
         "cantidad": 12
      },
      {
         "titulo": "Spray Facial Refrescante",
         "descripcion": "Spray facial refrescante con extractos botánicos para revitalizar la piel.",
         "categoria": "Skincare",
         "precio": 14,
         "cantidad": 14
      },
      {
         "titulo": "Kit de Manicura y Pedicura",
         "descripcion": "Kit de manicura y pedicura completo para el cuidado de las uñas.",
         "categoria": "Cuidado de uñas",
         "precio": 35,
         "cantidad": 6
      },
      {
         "titulo": "Vaporizador Facial",
         "descripcion": "Vaporizador facial para abrir los poros y mejorar la limpieza facial.",
         "categoria": "Accesorios de spa",
         "precio": 28,
         "cantidad": 9
      },
      {
         "titulo": "Aceite Esencial de Sándalo",
         "descripcion": "Aceite esencial de sándalo para aromaterapia y relajación profunda.",
         "categoria": "Aromaterapia",
         "precio": 20,
         "cantidad": 13
      },
      {
         "titulo": "Sesión de Sauna Infrarrojo",
         "descripcion": "Sesión de sauna infrarrojo para desintoxicación y relajación profunda.",
         "categoria": "Tratamientos de spa",
         "precio": 70,
         "cantidad": 2
      }
   ])
}

export default addProducts