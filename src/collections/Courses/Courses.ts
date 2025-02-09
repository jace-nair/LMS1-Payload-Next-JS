import { QuizBlock } from '@/blocks/CoursesBlocks/QuizBlock'
import { VideoBlock } from '@/blocks/CoursesBlocks/VideoBlock'
import type { CollectionConfig } from 'payload'

//import { authenticated } from '../../access/authenticated'

export const Courses: CollectionConfig = {
  slug: 'courses',
  /*access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },*/
  admin: {
    //defaultColumns: ['name', 'email'],
    useAsTitle: 'title',
  },
  //auth: true,
  fields: [
    {
      name: 'title',
      label: "Title",
      type: 'text',
      required: true,
    },
    {
        name: "description",
        label: "Description",
        type: "textarea",
        required: true,
    },
    {
        name: "image",
        label: "Image",
        type: "relationship",
        relationTo: "media",
        required: true,
    },
    {
        name: "curriculum",
        label: "Curriculum",
        type: "blocks",
        blocks: [VideoBlock, QuizBlock],
    },
  ],
  timestamps: true,
}
