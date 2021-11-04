import Prismic from '@prismicio/client'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
export const apiEndpoint = 'https://gracemiller.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public 
// Generate a token in your dashboard and configure it here if your repository is private
const accessToken = ''

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if(doc.type === 'home') return `/`
  if (doc.type) return `/${doc.type}/${doc.uid}`
  return '/'
}

// Client method to query documents from the Prismic repo
export const client = Prismic.client(apiEndpoint, { accessToken })
