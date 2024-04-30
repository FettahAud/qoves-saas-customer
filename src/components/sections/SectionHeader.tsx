export default function SectionHeader({
  title,
  des,
}: {
  title: string;
  des: string;
}) {
  return (
    <div className="header flex flex-col gap-4">
      <h3 className="title">{title}</h3>
      <span className="des">{des}</span>
    </div>
  );
}
