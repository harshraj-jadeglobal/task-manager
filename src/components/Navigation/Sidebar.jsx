import { useState } from 'react';
import NavItem from './NavItem';
import './Sidebar.css';

export default function Sidebar({ navActive, setNavActive }) {
  const [sideCollapsed, setSideCollapsed] = useState(false);

  const NAV_ITEMS = [
    { icon: "⊞", label: "Board" },
    { icon: "☰", label: "Backlog" },
    { icon: "◎", label: "Timeline" },
    { icon: "▦", label: "Reports" },
    { icon: "⚙", label: "Settings" },
  ];

  return (
    <nav className={`sidebar ${sideCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className={`sidebar-logo-row ${sideCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="sidebar-logo">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2L2 8l3 3 3-3 3 3 3-3L8 2z" fill="white" opacity=".9"/>
          </svg>
        </div>
        {!sideCollapsed && <span className="sidebar-brand">TaskFlow</span>}
      </div>

      <div className="sidebar-nav">
        {NAV_ITEMS.map(({ icon, label }) => (
          <NavItem
            key={label}
            icon={icon}
            label={label}
            collapsed={sideCollapsed}
            active={navActive === label}
            onClick={() => setNavActive(label)}
          />
        ))}
      </div>

      <div className="sidebar-collapse-toggle">
        <button
          onClick={() => setSideCollapsed(p => !p)}
          className="sidebar-collapse-btn"
          title={sideCollapsed ? "Expand" : "Collapse"}
        >
          {sideCollapsed ? "»" : "«"}
        </button>
      </div>
    </nav>
  );
}
