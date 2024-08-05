import { JSDOM } from 'jsdom';

export async function GET(request) {
  const url = request.nextUrl.searchParams.get('url')

  if (!url) {
    return Response.json({ error: 'URL is required' }, { status: 400} );
  }

  try {
    const response = await fetch(url);
    if (response.ok) {
      const content = await response.text();
      const doc = new JSDOM(content);
      const data = {
        name: doc.window.document.querySelector('title')?.textContent ?? '',
        description: doc.window.document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      }

      return Response.json(data)
    }

    return Response.json({ error: 'Failed to fetch website data' }, { status: 500 } );
  } catch (error) {
    console.log(error)
    return Response.json({ error: 'Failed to fetch website data' }, { status: 500 } );
  }
}
