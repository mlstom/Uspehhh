
import createSchema from 'part:@sanity/base/schema-creator'


import schemaTypes from 'all:part:@sanity/base/schema-type'
import lek from './lek'
import korisnici from './korisnici'
import uput from './uput'


export default createSchema({
  
  name: 'default',
  
  types: schemaTypes.concat([
    lek,korisnici,uput
  ]),
})
