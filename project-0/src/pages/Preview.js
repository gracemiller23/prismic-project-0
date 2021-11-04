import { useEffect } from 'react'
import qs from 'qs'
import { client, linkResolver } from '../prismic-configuration'

/**
 * Prismic preview endpoint component
 */
 const Preview = ({ history, location }) => {
  useEffect(() => {
    const {token, documentId} = qs.parse(location.search.slice(1));
    if (!token) {
      return console.warn(`No token available, check your configuration`);
    }
    client.getPreviewResolver(token, documentId).resolve(linkResolver, '/').then(url => history.push(url));
    });
  return null;
};

export default Preview
