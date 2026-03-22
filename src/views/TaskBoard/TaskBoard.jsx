import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Sidebar from '../../components/Navigation/Sidebar';
import DetailPanel from './DetailPanel';
import CreateModal from './CreateModal';
import TypeIcon from '../../components/Icons/TypeIcon';
import PriorityIcon from '../../components/Icons/PriorityIcon';
import Avatar from '../../components/Avatar/Avatar';
import { SEED, nextKey, ago } from '../../utils/helpers';
import '../../global.css'; 
import './TaskBoard.css';

export default function TaskBoard() {
  const [dark, setDark] = useState(false);
  const [tasks, setTasks] = useState(SEED);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [priFilter, setPriFilter] = useState("All");
  const [navActive, setNavActive] = useState("Board");
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  /* create form */
  const [newTitle, setNewTitle]   = useState("");
  const [newPri, setNewPri]       = useState("Medium");
  const [newType, setNewType]     = useState("Task");
  const [newStatus, setNewStatus] = useState("To Do");
  const [newAssignee, setNewAssignee] = useState("AR");
  const [formErr, setFormErr]     = useState(false);
  const titleRef = useRef(null);

  // Toggle Theme using CSS variables
  useEffect(() => {
    if (dark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [dark]);

  const visible = useMemo(() => {
    let list = tasks;
    if (filter !== "All")    list = list.filter(t => t.status === filter);
    if (priFilter !== "All") list = list.filter(t => t.priority === priFilter);
    if (search.trim())       list = list.filter(t =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.key.toLowerCase().includes(search.toLowerCase())
    );
    return list;
  }, [tasks, filter, priFilter, search]);

  const counts = useMemo(() => ({
    todo: tasks.filter(t => t.status === "To Do").length,
    prog: tasks.filter(t => t.status === "In Progress").length,
    done: tasks.filter(t => t.status === "Done").length,
  }), [tasks]);

  const createTask = useCallback(() => {
    if (!newTitle.trim()) { setFormErr(true); titleRef.current?.focus(); return; }
    const task = {
      key: nextKey(), title: newTitle.trim(),
      priority: newPri, status: newStatus, type: newType,
      assignee: newAssignee, created: Date.now(),
    };
    setTasks(p => [task, ...p]);
    setNewTitle(""); setFormErr(false); setShowModal(false);
  }, [newTitle, newPri, newStatus, newType, newAssignee]);

  const updateStatus = useCallback((key, status) =>
    setTasks(p => p.map(t => t.key === key ? {...t, status} : t)), []);

  const deleteTask = useCallback(key =>
    setTasks(p => p.filter(t => t.key !== key)), []);

  return (
    <div className="page-layout">
      <Sidebar navActive={navActive} setNavActive={setNavActive} />

      <div className="main-area">
        <header className="top-bar">
          <span className="breadcrumb-segment">Projects</span>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-proj">TaskFlow</span>
          <span className="breadcrumb-slash">/</span>
          <span className="breadcrumb-current">{navActive}</span>

          <div className="flex-spacer" />

          <div className="search-container">
            <svg className="search-icon" width="13" height="13" viewBox="0 0 14 14" fill="none">
              <circle cx="6" cy="6" r="4.5" stroke="var(--text-low)" strokeWidth="1.5"/>
              <path d="M10 10l2.5 2.5" stroke="var(--text-low)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input className="topbar-search" placeholder="Search tasks…" value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          <button
            onClick={() => setDark(d => !d)}
            className="theme-toggle-btn"
            title="Toggle theme"
          >
            {dark ? (
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM6.166 18.894a.75.75 0 01-1.06 1.06l-1.591-1.59a.75.75 0 111.06-1.061l1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 5.106a.75.75 0 011.06 1.06l-1.59 1.591a.75.75 0 11-1.061-1.06l1.59-1.591z"/></svg>
            ) : (
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-8.998z"/></svg>
            )}
          </button>

          <button className="ui-btn ui-btn-primary" onClick={() => { setShowModal(true); setTimeout(() => titleRef.current?.focus(), 80); }}>
            <span style={{ fontSize: 17, lineHeight: 1 }}>+</span> Create
          </button>
        </header>

        <div className="page-header">
          <div className="header-row">
            <div>
              <h1 className="header-title">Board</h1>
              <p className="header-subtitle">
                {tasks.length} issues · {counts.prog} in progress
              </p>
            </div>
            <div className="summary-chips">
              {[["To Do", counts.todo, "var(--stat-todo-bg)", "var(--stat-todo-fg)"], ["In Progress", counts.prog, "var(--stat-prog-bg)", "var(--stat-prog-fg)"], ["Done", counts.done, "var(--stat-done-bg)", "var(--stat-done-fg)"]].map(([s, n, bg, fg]) => (
                <div key={s} className="summary-chip" style={{ background: bg, color: fg }}>
                  <span>{n}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-bar">
            {["All","To Do","In Progress","Done"].map(f => (
              <button key={f} className={`filter-pill${filter === f ? " on" : ""}`} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
            <div className="filter-divider" />
            <span className="filter-label">Priority:</span>
            {["All","High","Medium","Low"].map(p => (
              <button key={p} className={`filter-pill${priFilter === p ? " on" : ""}`} onClick={() => setPriFilter(p)}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="content-area">
          <div className="table-container">
            {visible.length === 0 ? (
              <div className="empty-state">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="empty-state-icon">
                  <rect x="6" y="8" width="36" height="34" rx="4" stroke="var(--text-medium)" strokeWidth="2"/>
                  <path d="M16 20h16M16 28h10" stroke="var(--text-medium)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="empty-state-title">No issues found</div>
                <div className="empty-state-desc">
                  {search ? `No results for "${search}"` : "Try adjusting your filters or create a new issue."}
                </div>
              </div>
            ) : (
              <table className="issue-table">
                <thead>
                  <tr>
                    <th style={{ width: 32 }}></th>
                    <th style={{ width: 90 }}>Key</th>
                    <th>Summary</th>
                    <th style={{ width: 110 }}>Status</th>
                    <th style={{ width: 80 }}>Priority</th>
                    <th style={{ width: 80 }}>Assignee</th>
                    <th style={{ width: 90 }}>Created</th>
                    <th style={{ width: 80 }}></th>
                  </tr>
                </thead>
                <tbody>
                  {visible.map(task => (
                    <tr key={task.key} className={`issue-row${selected?.key === task.key ? " sel" : ""}`} onClick={() => setSelected(s => s?.key === task.key ? null : task)}>
                      <td><TypeIcon type={task.type} /></td>
                      <td><span className="issue-key">{task.key}</span></td>
                      <td>
                        <div className="issue-title">
                          <span>{task.title}</span>
                        </div>
                      </td>
                      <td onClick={e => e.stopPropagation()}>
                        <select
                          className="ui-select issue-select"
                          value={task.status}
                          onChange={e => updateStatus(task.key, e.target.value)}
                        >
                          <option>To Do</option>
                          <option>In Progress</option>
                          <option>Done</option>
                        </select>
                      </td>
                      <td>
                        <div className="issue-pri">
                          <PriorityIcon priority={task.priority} />
                          <span>{task.priority}</span>
                        </div>
                      </td>
                      <td><Avatar initials={task.assignee} size={22} /></td>
                      <td><span className="issue-date">{ago(task.created)}</span></td>
                      <td onClick={e => e.stopPropagation()}>
                        <button className="row-action" title="Delete issue" onClick={() => { deleteTask(task.key); if (selected?.key === task.key) setSelected(null); }}>
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 2l9 9M11 2L2 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <DetailPanel 
            selected={selected} 
            setSelected={setSelected} 
            updateStatus={updateStatus} 
            deleteTask={deleteTask} 
          />
        </div>
      </div>

      <CreateModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        titleRef={titleRef}
        newTitle={newTitle} setNewTitle={setNewTitle}
        newType={newType} setNewType={setNewType}
        newStatus={newStatus} setNewStatus={setNewStatus}
        newPri={newPri} setNewPri={setNewPri}
        newAssignee={newAssignee} setNewAssignee={setNewAssignee}
        formErr={formErr} setFormErr={setFormErr}
        createTask={createTask}
      />
    </div>
  );
}
