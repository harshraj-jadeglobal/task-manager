export default function PriorityIcon({ priority }) {
  const col = priority === "High" ? "var(--pri-high-fg)" : priority === "Medium" ? "var(--pri-med-fg)" : "var(--pri-low-fg)";
  
  if (priority === "High") return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ui-icon" title={priority}>
      <path d="M8 3l5 10H3L8 3z" fill={col}/>
    </svg>
  );

  if (priority === "Medium") return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ui-icon" title={priority}>
      <rect x="2" y="5" width="12" height="2.5" rx="1.2" fill={col}/>
      <rect x="2" y="9" width="12" height="2.5" rx="1.2" fill={col} opacity=".4"/>
    </svg>
  );

  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ui-icon" title={priority}>
      <rect x="2" y="5" width="12" height="2.5" rx="1.2" fill={col} opacity=".4"/>
      <rect x="2" y="9" width="12" height="2.5" rx="1.2" fill={col}/>
    </svg>
  );
}
