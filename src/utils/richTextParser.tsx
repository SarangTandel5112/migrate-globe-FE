import React from 'react';

/**
 * Parses markdown-style text and converts it to React elements
 * Supports: **bold**, *italic*, and basic text
 */
export const parseMarkdownText = (text: string): React.ReactNode[] => {
    if (!text) return [];
    
    // First handle bold text (**text**)
    const boldRegex = /\*\*(.*?)\*\*/g;
    const italicRegex = /\*(.*?)\*/g;
    
    // Replace bold text with placeholders
    const boldMatches: string[] = [];
    let processedText = text.replace(boldRegex, (match, content) => {
        boldMatches.push(content);
        return `__BOLD_${boldMatches.length - 1}__`;
    });
    
    // Replace italic text with placeholders
    const italicMatches: string[] = [];
    processedText = processedText.replace(italicRegex, (match, content) => {
        italicMatches.push(content);
        return `__ITALIC_${italicMatches.length - 1}__`;
    });
    
    // Split by placeholders and create React elements
    const parts = processedText.split(/(__BOLD_\d+__|__ITALIC_\d+__)/);
    
    return parts.map((part, index) => {
        if (part.startsWith('__BOLD_')) {
            const boldIndex = parseInt(part.match(/\d+/)?.[0] || '0');
            return <span key={index} className="font-bold">{boldMatches[boldIndex]}</span>;
        } else if (part.startsWith('__ITALIC_')) {
            const italicIndex = parseInt(part.match(/\d+/)?.[0] || '0');
            return <span key={index} className="italic">{italicMatches[italicIndex]}</span>;
        } else {
            return part;
        }
    });
};

/**
 * Simple markdown parser for titles - handles **bold** text
 */
export const parseMarkdownTitle = (text: string): React.ReactNode[] => {
    if (!text) return [];
    
    const parts = text.split('**');
    return parts.map((part, index) => {
        if (index % 2 === 0) {
            // Even indices are normal text
            return part;
        } else {
            // Odd indices are bold text
            return <span key={index} className="font-bold">{part}</span>;
        }
    });
};

/**
 * Converts markdown text to HTML
 */
export const markdownToHtml = (markdown: string): string => {
    if (!markdown) return '';
    
    let html = markdown;
    
    // Replace newlines with <br> tags - handle both \n and 
    html = html.replace(/\\n/g, '<br>'); // Handle escaped newlines \n
    html = html.replace(/\n/g, '<br>');   // Handle actual newlines 
    
    // Replace headers
    html = html.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
    html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');
    
    // Replace bold text
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Replace italic text
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return html;
};

/**
 * Parses rich text content that might contain HTML or markdown
 * and converts it to safe React elements
 */
export const parseRichText = (content: string): React.ReactNode => {
    if (!content) return null;
    
    // If content contains HTML tags, use dangerouslySetInnerHTML
    if (content.includes('<') && content.includes('>')) {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }
    
    // If content contains markdown formatting, convert to HTML
    if (content.includes('**') || content.includes('####') || content.includes('\\n') || content.includes('\n')) {
        const html = markdownToHtml(content);
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
    }
    
    // Otherwise, parse as simple markdown
    return <>{parseMarkdownText(content)}</>;
};
