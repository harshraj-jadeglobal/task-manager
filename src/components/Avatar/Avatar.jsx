import { avColor } from '../../utils/helpers';
import '../shared.css';

export default function Avatar({ initials, size = 24 }) {
  return (
    <span title={initials} className="ui-avatar" style={{
      width: size, height: size,
      fontSize: size * 0.42,
      background: avColor(initials)
    }}>
      {initials}
    </span>
  );
}
