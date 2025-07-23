#!/usr/bin/env node

/**
 * Generate "We Are The Future" graphic with OpenAI DALL-E
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// Use the OpenAI API key from environment only (secure)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function generateFutureGraphic() {
  console.log('🎨 Generating "We Are The Future" graphic with OpenAI...');
  
  if (!OPENAI_API_KEY) {
    console.log('⚠️  OpenAI API key not configured, creating placeholder...');
    
    // Create a placeholder SVG graphic
    const placeholderSVG = `
<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="futureGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00FFFF;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B5CF6;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="400" fill="url(#futureGrad)" opacity="0.1"/>
  
  <!-- Geometric patterns -->
  <circle cx="150" cy="100" r="30" fill="none" stroke="#00FFFF" stroke-width="2" opacity="0.6">
    <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="650" cy="300" r="40" fill="none" stroke="#3B82F6" stroke-width="2" opacity="0.4">
    <animate attributeName="r" values="40;50;40" dur="4s" repeatCount="indefinite"/>
  </circle>
  
  <!-- Neural network nodes -->
  <g stroke="#8B5CF6" stroke-width="1" opacity="0.3">
    <line x1="100" y1="200" x2="200" y2="150"/>
    <line x1="200" y1="150" x2="300" y2="200"/>
    <line x1="300" y1="200" x2="400" y2="180"/>
    <line x1="500" y1="220" x2="600" y2="180"/>
    <line x1="600" y1="180" x2="700" y2="220"/>
  </g>
  
  <!-- Main text -->
  <text x="400" y="180" text-anchor="middle" fill="url(#futureGrad)" font-family="Arial, sans-serif" font-size="36" font-weight="bold" filter="url(#glow)">
    WE ARE THE FUTURE
  </text>
  
  <!-- Subtitle -->
  <text x="400" y="220" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="16" opacity="0.8">
    Revolutionary Platform Automation by Fort AI Agency
  </text>
  
  <!-- Animated elements -->
  <g opacity="0.6">
    <rect x="50" y="350" width="60" height="4" fill="#00FFFF">
      <animate attributeName="width" values="60;120;60" dur="2s" repeatCount="indefinite"/>
    </rect>
    <rect x="690" y="50" width="4" height="40" fill="#3B82F6">
      <animate attributeName="height" values="40;80;40" dur="2.5s" repeatCount="indefinite"/>
    </rect>
  </g>
</svg>`;
    
    fs.writeFileSync('public/we-are-future.svg', placeholderSVG);
    console.log('✅ Placeholder "We Are The Future" graphic created');
    return;
  }
  
  try {
    const prompt = "Futuristic digital artwork showing 'WE ARE THE FUTURE' with technological elements, circuit patterns, holographic effects, neon blue and cyan colors, abstract tech background, modern and cutting-edge design, no text needed in image, professional tech company aesthetic";
    
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'url'
      })
    });
    
    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    const imageUrl = data.data[0].url;
    
    // Download the image
    const imageResponse = await fetch(imageUrl);
    const buffer = await imageResponse.buffer();
    
    // Save to public directory
    fs.writeFileSync('public/we-are-future-ai.png', buffer);
    
    console.log('✅ AI-generated "We Are The Future" graphic created successfully!');
    
  } catch (error) {
    console.log('⚠️  OpenAI generation failed, creating stylized placeholder...');
    console.log(`Error: ${error.message}`);
    
    // Fallback to enhanced SVG
    const enhancedSVG = `
<svg width="1024" height="400" viewBox="0 0 1024 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#001122;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#003366;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#001122;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="text" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00FFFF;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FFFFFF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="1024" height="400" fill="url(#bg)"/>
  
  <!-- Tech grid pattern -->
  <g stroke="#00FFFF" stroke-width="0.5" opacity="0.2">
    ${Array.from({length: 20}, (_, i) => `<line x1="${i * 50}" y1="0" x2="${i * 50}" y2="400"/>`).join('')}
    ${Array.from({length: 8}, (_, i) => `<line x1="0" y1="${i * 50}" x2="1024" y2="${i * 50}/>`).join('')}
  </g>
  
  <!-- Animated circuits -->
  <g stroke="#3B82F6" stroke-width="2" fill="none" opacity="0.6">
    <path d="M100,200 Q300,100 500,200 T900,200">
      <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="stroke-dashoffset" values="0;-1000" dur="3s" repeatCount="indefinite"/>
    </path>
  </g>
  
  <!-- Main title -->
  <text x="512" y="160" text-anchor="middle" fill="url(#text)" font-family="Arial Black, sans-serif" font-size="48" font-weight="900" filter="url(#glow)">
    WE ARE THE FUTURE
  </text>
  
  <!-- Subtitle -->
  <text x="512" y="200" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-size="18" opacity="0.9">
    Revolutionary AI-Powered Platform Automation
  </text>
  
  <!-- Fort AI Agency branding -->
  <text x="512" y="240" text-anchor="middle" fill="#00FFFF" font-family="Arial, sans-serif" font-size="16" font-weight="bold">
    FORT AI AGENCY
  </text>
  
  <!-- Animated tech elements -->
  <g opacity="0.7">
    <circle cx="150" cy="100" r="3" fill="#00FFFF">
      <animate attributeName="r" values="3;8;3" dur="2s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="874" cy="300" r="4" fill="#3B82F6">
      <animate attributeName="r" values="4;10;4" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite"/>
    </circle>
  </g>
  
  <!-- Data streams -->
  <g stroke="#8B5CF6" stroke-width="1" opacity="0.4">
    ${Array.from({length: 5}, (_, i) => 
      `<line x1="0" y1="${80 + i * 60}" x2="1024" y2="${80 + i * 60}">
        <animate attributeName="stroke-dasharray" values="0,100;100,0" dur="${1.5 + i * 0.3}s" repeatCount="indefinite"/>
      </line>`
    ).join('')}
  </g>
</svg>`;
    
    fs.writeFileSync('public/we-are-future.svg', enhancedSVG);
    console.log('✅ Enhanced "We Are The Future" graphic created as fallback');
  }
}

generateFutureGraphic().catch(console.error);