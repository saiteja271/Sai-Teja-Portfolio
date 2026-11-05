import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderKanban, Navigation, Copy, ExternalLink, Check, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, NAVIGATION_LINKS } from '../data/portfolioData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onSelectProject }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // Controlled by parent
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  // Build unified items
  const navigationItems = NAVIGATION_LINKS.map(link => ({
    type: 'nav',
    id: link.href,
    title: `Jump to ${link.label}`,
    category: 'Navigation',
    action: () => {
      onClose();
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  const projectItems = PROJECTS.map(p => ({
    type: 'project',
    id: p.id,
    title: p.title,
    subtitle: p.displayTag,
    category: 'Projects',
    action: () => {
      onClose();
      onSelectProject(p.id);
    }
  }));

  const actionItems = [
    {
      type: 'action',
      id: 'copy-email',
      title: copied ? 'Email Copied to Clipboard!' : `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Actions',
      icon: copied ? Check : Copy,
      action: copyEmail
    },
    {
      type: 'external',
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'External Links',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer');
        onClose();
      }
    },
    {
      type: 'external',
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External Links',
      icon: ExternalLink,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer');
        onClose();
      }
    }
  ];

  const allItems = [...navigationItems, ...projectItems, ...actionItems];

  const filteredItems = allItems.filter(item => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      (item as { subtitle?: string }).subtitle?.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  // Handle arrow keys
  useEffect(() => {
    const handleListKeys = (e: KeyboardEvent) => {
      if (!isOpen || filteredItems.length === 0) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        filteredItems[selectedIndex]?.action();
      }
    };

    window.addEventListener('keydown', handleListKeys);
    return () => window.removeEventListener('keydown', handleListKeys);
  }, [isOpen, filteredItems, selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-surface border border-border shadow-modal rounded-modal overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-border bg-surface">
              <Search className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search projects, sections, actions..."
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                className="w-full bg-transparent text-sm font-body text-primary placeholder-secondary/60 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 text-secondary hover:text-primary transition-colors mr-2"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono text-secondary bg-surface-secondary rounded border border-border">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-border/40">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-sm text-secondary">
                  No matching results for <span className="font-medium text-primary">"{query}"</span>
                </div>
              ) : (
                <div className="py-1 space-y-0.5">
                  {filteredItems.map((item, index) => {
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={`${item.category}-${item.id}-${index}`}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-all ${
                          isSelected
                            ? 'bg-accent text-white shadow-subtle'
                            : 'text-primary hover:bg-surface-secondary'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {item.type === 'nav' && (
                            <Navigation className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-secondary'}`} />
                          )}
                          {item.type === 'project' && (
                            <FolderKanban className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-accent'}`} />
                          )}
                          {item.type === 'action' && (
                            <Copy className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                          )}
                          {item.type === 'external' && (
                            <ExternalLink className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-white' : 'text-secondary'}`} />
                          )}

                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{item.title}</p>
                            {(item as { subtitle?: string }).subtitle && (
                              <p className={`text-xs truncate ${isSelected ? 'text-white/80' : 'text-secondary'}`}>
                                {(item as { subtitle?: string }).subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                          <span className={`text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-surface-secondary text-secondary border border-border/60'
                          }`}>
                            {item.category}
                          </span>
                          {isSelected && (
                            <CornerDownLeft className="w-3.5 h-3.5 text-white/90" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer hints */}
            <div className="px-4 py-2.5 bg-surface-secondary border-t border-border flex items-center justify-between text-[11px] text-secondary font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border">↑</kbd>
                  <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border">↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-surface rounded border border-border">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <span>Press <kbd className="px-1 py-0.5 bg-surface rounded border border-border">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
