import { Paragraph } from '@jp-olvera/jp-viaducto-components';

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
      borderRadius: 2,
      width: 'fit-content',
      padding: '0.1rem 0.5rem',
      textAlign: 'center',
      verticalAlign: 'center',
      fontSize: '12px',
    }}
  >
    <Paragraph color={color}>{label}</Paragraph>
  </div>
);

export default Tag;
