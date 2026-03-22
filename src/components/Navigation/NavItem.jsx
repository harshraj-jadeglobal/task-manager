import './NavItem.css';

export default function NavItem({ icon, label, active, onClick, collapsed }) {
  return (
    <button
      onClick={onClick}
      title={collapsed ? label : undefined}
      className={`nav-item ${active ? 'active' : ''} ${collapsed ? 'collapsed' : 'expanded'}`}
    >
      <span className="nav-icon">{icon}</span>
      {!collapsed && <span className="nav-label">{label}</span>}
    </button>
  );
}
