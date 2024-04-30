import store from "@/lib/store";
import { cn } from "@/lib/utils";

export default function ModalHeader({
  title,
  className,
  icon,
}: {
  title: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  const { closeModal } = store();

  return (
    <div className={cn("modal-header", className)}>
      {icon && <div className="icon-circle">{icon}</div>}
      <h3>{title}</h3>
      <button className="" onClick={() => closeModal()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "1.5rem", height: "1.5rem" }}
          viewBox="0 0 24 25"
          fill="none"
        >
          <mask
            id="mask0_340_11623"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="25"
          >
            <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_340_11623)">
            <path
              d="M8.22675 17.3365L7.16333 16.2731L10.9364 12.5L7.16333 8.7519L8.22675 7.68848L11.9999 11.4616L15.748 7.68848L16.8114 8.7519L13.0383 12.5L16.8114 16.2731L15.748 17.3365L11.9999 13.5634L8.22675 17.3365Z"
              fill="#7D828E"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
