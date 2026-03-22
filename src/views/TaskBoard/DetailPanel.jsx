import TypeIcon from '../../components/Icons/TypeIcon';
import PriorityIcon from '../../components/Icons/PriorityIcon';
import Lozenge from '../../components/Lozenge/Lozenge';
import Avatar from '../../components/Avatar/Avatar';
import { ago } from '../../utils/helpers';

export default function DetailPanel({ selected, setSelected, updateStatus, deleteTask }) {
  if (!selected) return null;

  return (
    <div className="detail-panel">
      <div className="detail-panel-header">
        <div className="detail-panel-title">
          <TypeIcon type={selected.type} />
          <span className="detail-panel-key">{selected.key}</span>
        </div>
        <button className="detail-panel-close" onClick={() => setSelected(null)}>×</button>
      </div>
      
      <div className="detail-panel-body">
        <h2 className="detail-panel-heading">{selected.title}</h2>

        <div className="detail-prop">
          <span className="detail-prop-label">Status</span>
          <Lozenge status={selected.status} />
        </div>
        <div className="detail-prop">
          <span className="detail-prop-label">Priority</span>
          <div className="detail-prop-val-icon">
            <PriorityIcon priority={selected.priority} />
            <span>{selected.priority}</span>
          </div>
        </div>
        <div className="detail-prop">
          <span className="detail-prop-label">Type</span>
          <span className="detail-prop-val-text">{selected.type}</span>
        </div>
        <div className="detail-prop">
          <span className="detail-prop-label">Assignee</span>
          <div className="detail-prop-val-icon">
            <Avatar initials={selected.assignee} size={20} />
            <span>{selected.assignee}</span>
          </div>
        </div>
        <div className="detail-prop">
          <span className="detail-prop-label">Created</span>
          <span className="detail-prop-val-text">{ago(selected.created)}</span>
        </div>

        <div className="detail-actions">
          {["To Do", "In Progress", "Done"].map(s => (
            <button
              key={s}
              className={`ui-btn ${selected.status === s ? 'ui-btn-primary' : 'ui-btn-subtle'} btn-small`}
              onClick={() => {
                updateStatus(selected.key, s);
                setSelected(p => ({ ...p, status: s }));
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="detail-delete">
          <button className="ui-btn ui-btn-danger btn-small" onClick={() => { deleteTask(selected.key); setSelected(null); }}>
            Delete issue
          </button>
        </div>
      </div>
    </div>
  );
}
