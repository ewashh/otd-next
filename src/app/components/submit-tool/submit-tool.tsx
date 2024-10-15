"use client"; // This marks the file as a client component

import React, { useState, useEffect, useRef } from 'react';
import '@/app/components/submit-tool/submit-tool.scss';
import { ToolCard } from '../tool-card/tool-card';
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';

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

  const ensureHttps = (url: string) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  const isValidURL = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };
  

  const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setDisplayedLink(value);
    if (!value.startsWith('https://')) {
      value = 'https://' + value.replace(/^https?:\/\//, '');
    }
    setLink(value);
  };
  
  // Select
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const categories = [ 'business', 'productivity', 'marketing', 'design', 'video', 'code', 'media resources', 'ecommerce', 'research', 'writing', 'communication', 'automation', 'files', 'website tools', 'education', 'hiring'];

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
    <section className="submit-tool">
      <form>
        <div className="submit-tool__form-content">
          <header className="submit-tool__header">Submit a tool</header>
          <Input
            label="Link"
            type="url"
            id="submit-tool__link"
            placeholder="https://onlinetool.directory"
            value={displayedLink}
            onChange={handleLinkChange}
            onFocus={() => setFocussed(true)}
            onBlur={() => setFocussed(false)}
          />
          <Input
            label="Name"
            type="text"
            id="submit-tool__name"
            placeholder="Online Tool Directory"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            label="Description"
            id="submit-tool__description"
            placeholder="Get your work done better and faster than ever with the best tools on the internet."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            placeholder="Choose categories..."
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {categories.map((category) => (
              <MenuItem
                key={category}
                value={category}
              >
                {category}
              </MenuItem>
            ))}
          </Select>
          <Button text="Upload image" />
          <Button text="Submit to directory" />
        </div>
      </form>
      <ToolCard href={link || '/'} name={name || 'Default name'} description={description || 'Default description'} />
    </section>
    </>
  );
}
