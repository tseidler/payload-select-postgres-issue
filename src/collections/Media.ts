import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'cakes',
      type: 'select',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
      defaultValue: ['1'],
      options: [
        {
          label: '1 cake',
          value: '1',
        },
        {
          label: '2 cakes',
          value: '2',
        },
      ],
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
  upload: true,
}
