import FormattedDate from "./formattedDate.js"

const LabeledDateTimePanel = ({ label, dateTime }) =>
  dateTime === null ? null : (
      <dl className="date-panel">
      {label}:
      <FormattedDate dateTime={dateTime} />
      </dl>
  );

  export default LabeledDateTimePanel;