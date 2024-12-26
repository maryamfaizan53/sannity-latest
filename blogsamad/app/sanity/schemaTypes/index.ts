import { type SchemaTypeDefinition } from 'sanity'
import author from '../schemas/author'
import category from '../schemas/category' 
import post from '../schemas/post'
import blockContent from '../schemas/blockContent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent],
}
