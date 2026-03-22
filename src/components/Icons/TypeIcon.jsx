export default function TypeIcon({ type }) {
  const col = type === "Bug" ? "var(--type-bug-col)" : type === "Story" ? "var(--type-story-col)" : "var(--type-task-col)";
  
  if (type === "Task") return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ui-icon">
      <rect x="2" y="2" width="12" height="12" rx="2" fill={col}/>
      <path d="M5 8h6M5 5h4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  if (type === "Bug") return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ui-icon">
      <circle cx="8" cy="8" r="5.5" fill={col}/>
      <path d="M6 7h4M8 5.5V7" stroke="#fff" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );

  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ui-icon">
      <rect x="2" y="2" width="12" height="12" rx="2" fill={col}/>
      <path d="M5 8.5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
