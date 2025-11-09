export interface CardProps {
  title: string;
  description: string;
  image: string; // path relative to /public folder
}
export interface ButtonProps {
  label: string;
  onClick?: () => void;
}
