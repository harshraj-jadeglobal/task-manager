import { useState } from 'react';
import NavItem from './NavItem';
import logoUrl from '../../assets/logo.png';
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
        <img src={logoUrl} alt="Logo" className="sidebar-image-logo" />
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
