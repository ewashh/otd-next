"use client"; // This marks the file as a client component

import React, { useState, useEffect, useRef } from 'react';
import '@/app/components/submit-tool/submit-tool.scss';
import { ToolCard } from '../tool-card/tool-card';
import { Button } from '../button/button';

export function SubmitTool() {
  const [fetching, setFetching] = useState(false);
  const [link, setLink] = useState('');
  const [displayedLink, setDisplayedLink] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const abortControllerRef = useRef<AbortController|null>(null);
  const [fetchedData, setFetchedData] = useState<{name: string|null, description: string|null}|null>(null);
  const [focussed, setFocussed] = useState<boolean>(false);

  const fetchWebsiteData = async (url: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort(); // Abort the previous request
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    try {
      setFetching(true);
      const response = await fetch(`/api/fetch-website-data?url=${encodeURIComponent(url)}`, {
        signal: controller.signal
      });
      if (response.ok) {
        const data = await response.json();
        setFetchedData({name: data.name, description: data.description})
      }
    } catch (error) {
      console.error('Error fetching website data:', error);
    } finally {
      setFetching(false);
      abortControllerRef.current = null;
    }
  };

  useEffect(() => {
    console.log("fetching: ", fetching)
  }, [fetching]);

  useEffect(() => {
    if (link && isValidURL(link) && (name === '' || description === '')) {
      const urlWithHttps = ensureHttps(link);
      fetchWebsiteData(urlWithHttps);
    }
  }, [link]);

  useEffect(() => {
    if (focussed || fetchedData === null) {
      return;
    }
    if (name === '') {
      setName(fetchedData?.name ?? '');
    }
    if (description === '') {
      setDescription(fetchedData?.description ?? '');
    }
  }, [fetchedData, focussed]);

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
          <label htmlFor="submit-tool__link">Link</label>
          <input
            type="url"
            id="submit-tool__link"
            placeholder="https://onlinetool.directory"
            value={displayedLink}
            onChange={handleLinkChange}
            onFocus={() => setFocussed(true)}
            onBlur={() => setFocussed(false)}
          />
          <label htmlFor="submit-tool__name">Name</label>
          <input
            type="text"
            id="submit-tool__name"
            placeholder="Online Tool Directory"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="submit-tool__description">Description</label>
          <textarea
            id="submit-tool__description"
            placeholder="Get your work done better and faster than ever with the best tools on the internet."
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
