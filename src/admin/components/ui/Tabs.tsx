import React from 'react';

interface TabsProps {
  defaultValue: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <div className="space-y-4" data-active-tab={activeTab}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { activeTab, setActiveTab });
        }
        return child;
      })}
    </div>
  );
};

export const TabsList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex gap-2 p-1 bg-primary/5 rounded-lg">
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<{ 
  value: string;
  children: React.ReactNode;
  activeTab?: string;
  setActiveTab?: (value: string) => void;
}> = ({ value, children, activeTab, setActiveTab }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-colors ${
        activeTab === value 
          ? 'bg-white text-primary shadow-sm' 
          : 'text-primary-dark/70 hover:text-primary-dark'
      }`}
      onClick={() => setActiveTab?.(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<{
  value: string;
  children: React.ReactNode;
  activeTab?: string;
}> = ({ value, children, activeTab }) => {
  if (activeTab !== value) return null;
  return <div className="pt-4">{children}</div>;
};