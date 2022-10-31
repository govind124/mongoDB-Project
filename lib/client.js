import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = SanityClient(
    {
        projectId:'8q5uldks',
        dataset: 'production',
        apiVersion:'2022-10-25',
        useCdn: 'true',
        token : process.env.NEXT_PUBLIC_SANITY_TOKEN
    }
);
const builder = ImageUrlBuilder(client);
export const urlFor=(source) => builder.image(source);