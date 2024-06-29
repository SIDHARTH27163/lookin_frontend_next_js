
interface ButtonsProps {
  label: string;
  className: string;
}

export const Buttons: React.FC<ButtonsProps> = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};
