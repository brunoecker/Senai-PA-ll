import { defineField } from 'sanity';

const roomTypes = [
  { title: 'Basic', value: 'basic' },
  { title: 'Luxury', value: 'luxury' },
  { title: 'Suite', value: 'suite' },
];

const hotelRoom = {
  name: 'hotelRoom',
  title: 'Acomodação',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: Rule =>
        Rule.required().max(50).error('Máximo 50 caracteres'),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule =>
        Rule.required().min(100).error('Minímo 100 caracteres'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule =>
        Rule.required().min(100).error('Minímo 100 caracteres'),
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'url', type: 'url', title: 'URL' },
            { name: 'file', type: 'file', title: 'File' },
          ],
        },
      ],
      validation: Rule =>
        Rule.required().min(3).error('Minímo de imagens requeridas'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Capa da imagem',
      type: 'object',
      fields: [
        { name: 'url', type: 'url', title: 'URL' },
        { name: 'file', type: 'file', title: 'File' },
      ],
      validation: Rule => Rule.required().error('A Capa da imagem está sendo requerida'),
    }),
    defineField({
      name: 'type',
      title: 'Acomodação',
      type: 'string',
      options: {
        list: roomTypes,
      },
      validation: Rule => Rule.required(),
      initialValue: 'basic',
    }),
    defineField({
      name: 'specialNote',
      title: 'Anotação especial',
      type: 'text',
      validation: Rule => Rule.required(),
      initialValue:
        'O horário de check-in é às 12:00 PM e o horário de checkout é às 11:59 AM. Se você deixar algum item para trás, por favor, entre em contato com a recepção.',
    }),
    defineField({
      name: 'dimension',
      title: 'Dimensão',
      type: 'string',
    }),
    defineField({
      name: 'numberOfBeds',
      title: 'Número de camas',
      type: 'number',
      validation: Rule => Rule.min(1),
      initialValue: 1,
    }),
    defineField({
      name: 'offeredAmenities',
      title: 'Comodidades oferecidas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            { name: 'amenity', title: 'Amenity', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'isBooked',
      title: 'Está reservada?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Está em destaque?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'reviews',
      title: 'Avaliações',
      type: 'array',
      of: [{ type: 'review' }],
    }),
  ],
};

export default hotelRoom;
