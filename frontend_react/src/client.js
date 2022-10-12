import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'gwu1wusq',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn: true,
    token: 'skDW1g3MRNtqwbnNLXWPTV4xR6dmUlejNQuyCsCvBUB4NHZdsAPYSp92XY22IRAjC4E7Teo3YkqV5jejYg8exIHU3vow1e5broMNNwmQCYogtytLS1z2MrNyoRcrjlM2eenVbISKIsNDdfEkGzqHQErYBTrMyTWryMwNbPZuhXMS2UTUbxrz',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);