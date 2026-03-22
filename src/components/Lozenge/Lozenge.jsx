export default function Lozenge({ status }) {
  let styleClass = "lozenge-todo";
  if (status === "In Progress") styleClass = "lozenge-prog";
  if (status === "Done") styleClass = "lozenge-done";

  return (
    <span className={`ui-lozenge ${styleClass}`}>{status}</span>
  );
}
