import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

// Static date for static export compatibility
const lastModifiedDate = '2024-12-17';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://retailbeastfx.com';

    return [
        {
            url: baseUrl,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/features`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/journal`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/community`,
            lastModified: lastModifiedDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/docs`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: lastModifiedDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastModifiedDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/strategies`,
            lastModified: lastModifiedDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
    ];
}

