/**
 * Displays tip with a lightbulb and some italic text
 */
function Tip({ children }) {
  return (
    <div className="tip">
      💡<em>{children}</em>
    </div>
  );
}

export default Tip;
