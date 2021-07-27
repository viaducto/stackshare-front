const Tag = ({
  label,
  color,
  backgroundColor,
  borderColor,
}: {
  label: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
}) => (
  <div
    style={{
      display: 'flex',
      alignContent: 'center',
      alignItems: 'center',
      height: '1.375rem',
      backgroundColor: backgroundColor,
      border: `0.063rem solid ${borderColor}`,
      color: color,
      borderRadius: 2,
      width: 'fit-content',
      padding: '0.1rem 0.5rem',
      textAlign: 'center',
      verticalAlign: 'center',
      fontSize: '12px',
    }}
  >
    {label}
  </div>
);

export default Tag;
