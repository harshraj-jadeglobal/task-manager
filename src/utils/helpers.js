let _seq = 100;
export const nextKey = () => `TASK-${++_seq}`;

export const SEED = [
  { key: nextKey(), title: "Implement new dashboard widget",          priority: "High",   status: "In Progress", assignee: "AR", type: "Story",   created: Date.now() - 8.6e6 },
  { key: nextKey(), title: "Fix pagination bug on analytics table",   priority: "High",   status: "To Do",       assignee: "BK", type: "Bug",     created: Date.now() - 5.1e6 },
  { key: nextKey(), title: "Write integration tests for payment service",priority: "Medium", status: "To Do",       assignee: "CR", type: "Task",    created: Date.now() - 3.4e6 },
  { key: nextKey(), title: "Update documentation for REST endpoints", priority: "Medium", status: "Done",        assignee: "AR", type: "Task",    created: Date.now() - 2.9e6 },
  { key: nextKey(), title: "Migrate legacy queries to modern ORM",    priority: "Low",    status: "In Progress", assignee: "BK", type: "Story",   created: Date.now() - 1.8e6 },
  { key: nextKey(), title: "Design system audit: replace custom buttons",priority: "Low",    status: "Done",        assignee: "DL", type: "Task",    created: Date.now() - 9e5   },
  { key: nextKey(), title: "Set up alerts for latency threshold",     priority: "High",   status: "To Do",       assignee: "CR", type: "Bug",     created: Date.now() - 4e5   },
];

export const ago = ts => {
  const s = (Date.now() - ts) / 1000;
  if (s < 60)    return "Just now";
  if (s < 3600)  return `${~~(s/60)}m ago`;
  if (s < 86400) return `${~~(s/3600)}h ago`;
  return `${~~(s/86400)}d ago`;
};

const AV_COLORS = ["#0052CC","#00B8D9","#36B37E","#FF5630","#6554C0","#FF991F"];
export const avColor = name => AV_COLORS[name.charCodeAt(0) % AV_COLORS.length];
