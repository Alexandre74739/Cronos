interface LabelProps {
  content: string;
}

export default function Label({ content }: LabelProps) {
  return (
    <label>
      <span className="label-text">{content}</span>
    </label>
  );
}
