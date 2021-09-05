export let mock = {
  modules: {
    roomService: {
      id: 'roomService',
      title: 'Servicio a la habitación',
      cover: 'roomservice.jpg',
      sections: [
        {
          title: 'Platos fuertes',
          items: [
            {
              id: 'riss01',
              title: 'Rissoto al Pesto',
              desc: 'Rissoto al Pesto acompañado de filet de solomillo de cerdo a la crema con tomates secos.',
              images: [
                'riss01_1.png',
                'riss01_2.png',
                'riss01_3.png',
                'riss01_4.png',
              ],
              price: 9.99
            },
            {
              id: 'riss02',
              title: 'Rissoto Campestre',
              desc: 'Rissoto al Pesto de pimentones rostizados, champiñones, aceitunas negras, tomates secos , vodka, aromatizado con Aceite de Trufa Blanca. Salmón: al grill.',
              images: [
                'riss02_1.png',
                'riss02_2.png',
                'riss02_3.png',
                'riss02_4.png',
              ],
              price: 9.99
            },
            {
              id: 'past01',
              title: 'Pasta "Simple"',
              desc: 'Pasta “Simple” elaborada con los más finos ingredientes para llevarte una experiencia única!!!!',
              images: [
                'past01_1.png',
                'past01_2.png',
                'past01_3.png',
                'past01_4.png',
              ],
              price: 8.99
            },
            {
              id: 'hamb01',
              title: '"La Asesina"',
              desc: 'Hamburguesa con 200gr de costilla de cerdo, plátano maduro en reducción de jugo de naranja, pimentón rostizado, queso brie, acompañado de nuestras papas simple!!!',
              images: [
                'hamb01_1.png',
                'hamb01_2.png',
                'hamb01_3.png',
                'hamb01_4.png',
              ],
              price: 5.99
            },
            {
              id: 'pizz01',
              title: 'Pizza Pork',
              desc: 'Hoy nuestro crew de cocina se puso creativo con nuevos platos y poderle llevar lo mejor de nuestra cocina de fusión una experiencia única con ingredientes artesanales.',
              images: [
                'pizz01_1.png',
                'pizz01_2.png',
                'pizz01_3.png',
                'pizz01_4.png',
              ],
              price: 8.99
            },
          ],
          desc: 'Selección de platos del hotel.',
        },
        {
          title: 'Postres',
          items: [
            {
              id: 'foca01',
              title: 'Focaccia Dulce',
              desc: 'Focaccia Dulce toping de Ovomaltina y Oreo Americano.',
              images: [
                'foca01_1.png',
                'foca01_2.png',
                'foca01_3.png',
                'foca01_4.png',
              ],
              price: 4.99
            },
          ],
          desc: 'Selección de platos del hotel.',
        },
      ],
      desc: '¿Qué podemos ofrecerte?',
    },
    rooms: {
      id: 'rooms',
      title: 'Habitaciones',
      cover: 'rooms.jpg',
      sections: [
        {
          title: 'Habitaciones de lujo',
          items: [
            {
              id: 'pres01',
              title: 'Presidencial Master',
              desc: 'Habitación tipo apartamento para hasta 4 personas que cuentan con 2 habitaciones, 3 baños completos, jacuzzi, 2 salas de estar, comedor y cocina.',
              images: [
                'pres01_1.jpg',
                'pres01_2.jpg',
                'pres01_3.jpg',
                'pres01_4.jpg',
              ],
              price: 180,
              extra: {
                elements: [
                  {
                    title: 'Sala de Recibo',
                    desc: 'Con sofá de 5 puestos y Tv de 52"',
                    icon: 'fas fa-couch'
                  },
                  {
                    title: 'Sala Secundaria',
                    desc: 'Con sofá de 4 puestos',
                    icon: 'fas fa-couch'
                  },
                  {
                    title: 'Baño Completo',
                    desc: '',
                    icon: 'fas fa-toilet'
                  },
                  {
                    title: 'Comedor',
                    desc: 'De 6 puestos con su vajilla completa',
                    icon: 'fas fa-utensils'
                  },
                  {
                    title: 'Cocina',
                    desc: '',
                    icon: 'fas fa-blender'
                  },
                  {
                    title: 'Microondas',
                    desc: '',
                    icon: 'fas fa-temperature-high'
                  },
                  {
                    title: 'Nevera Ejecutiva',
                    desc: '',
                    icon: 'fas fa-temperature-low'
                  },
                  {
                    title: 'Cuarto Principal',
                    desc: '',
                    icon: 'fas fa-door-open',
                    subs: [
                      {
                        title: 'Cama King Size',
                        icon: 'fas fa-bed'
                      },
                      {
                        title: 'TV 52"',
                        icon: 'fas fa-tv'
                      },
                      {
                        title: 'Jacuzzi con tv de 32"',
                        icon: 'fas fa-hot-tub'
                      },
                      {
                        title: 'Baño Completo',
                        icon: 'fas fa-toilet'
                      },
                      {
                        title: 'Closet',
                        icon: 'fas fa-door-closed'
                      },
                    ]
                  },
                  {
                    title: 'Cuarto Secundario',
                    desc: '',
                    icon: 'fas fa-door-open',
                    subs: [
                      {
                        title: 'Cama King Size',
                        icon: 'fas fa-bed'
                      },
                      {
                        title: 'Baño Completo',
                        icon: 'fas fa-toilet'
                      },
                      {
                        title: 'Closet',
                        icon: 'fas fa-door-closed'
                      },
                    ]
                  },
                ]
              },
            },
            {
              id: 'pres02',
              title: 'Presidencial Junior',
              desc: 'Habitación tipo apartamento para una o dos personas que cuentan con 1 habitación, 1 baño completo, sala de estar, comedor y cocina.',
              images: [
                'pres02_1.jpg',
                'pres02_2.jpg',
                'pres02_3.jpg',
                'pres02_4.jpg',
              ],
              price: 140,
              extra: {
                elements: [
                  {
                    title: 'Sala de Recibo',
                    desc: 'Con sofá de 5 puestos y Tv de 52"',
                    icon: 'fas fa-couch'
                  },
                  {
                    title: 'Sala Secundaria',
                    desc: 'Con sofá de 4 puestos',
                    icon: 'fas fa-couch'
                  },
                  {
                    title: 'Baño Completo',
                    desc: '',
                    icon: 'fas fa-toilet'
                  },
                  {
                    title: 'Comedor',
                    desc: 'De 6 puestos con su vajilla completa',
                    icon: 'fas fa-utensils'
                  },
                  {
                    title: 'Cocina',
                    desc: '',
                    icon: 'fas fa-blender'
                  },
                  {
                    title: 'Microondas',
                    desc: '',
                    icon: 'fas fa-temperature-high'
                  },
                  {
                    title: 'Nevera Ejecutiva',
                    desc: '',
                    icon: 'fas fa-temperature-low'
                  },
                  {
                    title: 'Cuarto Principal',
                    desc: '',
                    icon: 'fas fa-door-open'
                  },
                  {
                    title: 'Cuarto Secundario',
                    desc: '',
                    icon: 'fas fa-door-open'
                  },
                ]
              },
            },
            {
              id: 'suit01',
              title: 'Suite Oceania',
              desc: 'Habitación tipo apartamento para una o dos personas.',
              images: [
                'suit01_1.jpg',
                'suit01_2.jpg',
                'suit01_3.jpg',
                'suit01_4.jpg',
              ],
              price: 100
            },
          ],
          desc: 'Habitaciones del hotel',
        },
      ],
      desc: 'Conoce todas las comodidades que tenemos para ti',
    },
  },
}