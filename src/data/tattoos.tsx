import blackwork from '../assets/Tattoos/blackwork.jpg'
import realismo from '../assets/Tattoos/Realismo.jpg'
import minimalista from '../assets/Tattoos/minimalista.jpg'

export const tattoos = [
  {
    id: 'blackwork',
    title: 'Blackwork',
    style: 'Tinta negra',
    description: 
    'El estilo Blackwork se caracteriza por el uso de tinta negra en grandes áreas y patrones geométricos.',
    detail: 'Alto contraste',
    placement: 'Brazo, pierna o espalda',
    duration: '3 - 5 horas',
    difficulty: 'Avanzado',
    image: blackwork,
  },
  {
    id: 'realismo',
    title: 'Realismo',
    style: 'Alto detalle',
    description: 
    'El estilo Realismo se caracteriza por su representación detallada  de las imagenes con gran precision. ',
    detail: 'Máximo detalle',
    placement: 'Brazo, pecho o espalda',
    duration: '4 - 8 horas',
    difficulty: 'Experto',
    image: realismo,
  },
  {
    id: 'minimalista',
    title: 'Minimalista',
    style: 'Línea fina',
    description: 
    'El estilo minimalista apuesta por líneas limpias, formas simples y una estética elegante y sutil.',
    detail: 'Línea fina',
    placement: 'Muñeca, brazo o tobillo',
    duration: '1 - 2 horas',
    difficulty: 'Intermedio',
    image: minimalista,
  },
]