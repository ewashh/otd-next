"use client"; // This marks the file as a client component

import React, { useState, useEffect } from 'react';
import '@/app/components/submit-tool/submit-tool.scss';
import { ToolCard } from '../tool-card/tool-card';
import { Button } from '../button/button';

export function SubmitTool() {
  const [fetching, setFetching] = useState(false);
  const [link, setLink] = useState('');
  const [displayedLink, setDisplayedLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const fetchWebsiteData = async (url) => {
    try {
      setFetching(true);
      const response = await fetch(`/api/fetch-website-data?url=${encodeURIComponent(url)}`);
      if (response.ok) {
        const data = await response.json();
        console.log('got', data);
        if (name === '') {
          setName(data.name);
        }
        if (description === '') {
          setDescription(data.description);
        }
      }
    } catch (error) {
      console.error('Error fetching website data:', error);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    if (link && isValidURL(link) && (name === '' || description === '')) {
      const urlWithHttps = ensureHttps(link);
      fetchWebsiteData(urlWithHttps);
    }
  }, [link]);

  const ensureHttps = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  const isValidURL = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleLinkChange = (e) => {
    let value = e.target.value;
    setDisplayedLink(value);
    if (!value.startsWith('https://')) {
      value = 'https://' + value.replace(/^https?:\/\//, '');
    }
    setLink(value);
  };

  return (
    <section className="submit-tool">
      <form>
        <div className="submit-tool__form-content">
          <header className="submit-tool__header">Submit a tool</header>
          <input
            type="url"
            id="submit-link"
            placeholder="Link"
            value={displayedLink}
            onChange={handleLinkChange}
          />
          <input
            type="text"
            id="submit-tool__name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            id="submit-tool__description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
          <Button text="Submit to directory" />
        </div>
      </form>
      <ToolCard href={link || '/'} name={name || 'Default name'} description={description || 'Default description'} />
    </section>
  );
}
