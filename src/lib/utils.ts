import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Found Items Storage
export const saveFoundItem = (item: any) => {
  const existing = getFoundItems();
  const newItem = {
    ...item,
    id: Date.now().toString(),
    dateReported: new Date().toISOString(),
    status: 'active'
  };
  const updated = [...existing, newItem];
  localStorage.setItem('foundItems', JSON.stringify(updated));
  return newItem;
};

export const getFoundItems = () => {
  const saved = localStorage.getItem('foundItems');
  return saved ? JSON.parse(saved) : [];
};

export const removeFoundItem = (id: string) => {
  const existing = getFoundItems();
  const updated = existing.filter((item: any) => item.id !== id);
  localStorage.setItem('foundItems', JSON.stringify(updated));
};

// Lost Items Storage
export const saveLostItem = (item: any) => {
  const existing = getLostItems();
  const newItem = {
    ...item,
    id: Date.now().toString(),
    dateReported: new Date().toISOString(),
    status: 'active'
  };
  const updated = [...existing, newItem];
  localStorage.setItem('lostItems', JSON.stringify(updated));
  return newItem;
};

export const getLostItems = () => {
  const saved = localStorage.getItem('lostItems');
  return saved ? JSON.parse(saved) : [];
};

export const removeLostItem = (id: string) => {
  const existing = getLostItems();
  const updated = existing.filter((item: any) => item.id !== id);
  localStorage.setItem('lostItems', JSON.stringify(updated));
};

// Clear all data
export const clearAllData = () => {
  localStorage.removeItem('foundItems');
  localStorage.removeItem('lostItems');
};

// Export data for backup
export const exportData = () => {
  const foundItems = getFoundItems();
  const lostItems = getLostItems();
  const allData = { foundItems, lostItems };
  
  const dataStr = JSON.stringify(allData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `find-my-stuff-backup-${new Date().toISOString().split('T')[0]}.json`;
  link.click();
  
  URL.revokeObjectURL(url);
};

// Import data from backup
export const importData = (jsonData: string) => {
  try {
    const data = JSON.parse(jsonData);
    if (data.foundItems) {
      localStorage.setItem('foundItems', JSON.stringify(data.foundItems));
    }
    if (data.lostItems) {
      localStorage.setItem('lostItems', JSON.stringify(data.lostItems));
    }
    return true;
  } catch (error) {
    console.error('Failed to import data:', error);
    return false;
  }
};