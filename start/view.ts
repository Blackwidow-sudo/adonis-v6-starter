import edge from 'edge.js'
import env from '#start/env'
import { edgeIconify, addCollection } from 'edge-iconify'
import { icons } from '@iconify-json/mdi'

/**
 * Add heroIcons collection
 */
addCollection(icons)

/**
 * Register a plugin
 */
edge.use(edgeIconify)

/**
 * Define a global property
 */
edge.global('appUrl', env.get('APP_URL'))
