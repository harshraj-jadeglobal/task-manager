import { useEffect, useRef } from 'react';

export default function CreateModal({ 
  showModal, setShowModal, titleRef, newTitle, setNewTitle, 
  newType, setNewType, newStatus, setNewStatus, 
  newPri, setNewPri, newAssignee, setNewAssignee, 
  formErr, setFormErr, createTask 
}) {
  if (!showModal) return null;

  return (
    <div className="overlay" onClick={e => e.target === e.currentTarget && setShowModal(false)}>
      <div className="modal">
        <div className="modal-head">
          <h2 className="modal-title">Create issue</h2>
          <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Summary <span className="req">*</span></label>
            <input 
              ref={titleRef} 
              className={`ui-input ${formErr ? 'err' : ''}`} 
              placeholder="What needs to be done?" 
              value={newTitle} 
              onChange={e => { setNewTitle(e.target.value); setFormErr(false); }} 
              onKeyDown={e => e.key === "Enter" && createTask()} 
            />
            {formErr && <p className="form-err-msg">Summary is required.</p>}
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Issue type</label>
              <select className="ui-select w-full" value={newType} onChange={e => setNewType(e.target.value)}>
                <option>Task</option>
                <option>Bug</option>
                <option>Story</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Status</label>
              <select className="ui-select w-full" value={newStatus} onChange={e => setNewStatus(e.target.value)}>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Priority</label>
              <select className="ui-select w-full" value={newPri} onChange={e => setNewPri(e.target.value)}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Assignee</label>
              <select className="ui-select w-full" value={newAssignee} onChange={e => setNewAssignee(e.target.value)}>
                <option value="AR">AR</option>
                <option value="BK">BK</option>
                <option value="CR">CR</option>
                <option value="DL">DL</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button className="ui-btn ui-btn-subtle" onClick={() => setShowModal(false)}>Cancel</button>
            <button className="ui-btn ui-btn-primary" onClick={createTask}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
}
