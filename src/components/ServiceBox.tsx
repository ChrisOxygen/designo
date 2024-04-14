import Button from "../ui/Button";

import { LuChevronRight } from "react-icons/lu";

type ServiceBoxProps = {
  title: string;
};

function ServiceBox({ title }: ServiceBoxProps) {
  const displayTitle = title.toUpperCase();
  const link = `/${title.toLowerCase().replace(" ", "-")}`;
  const cssCLass = `service service__${title.toLowerCase().replace(" ", "-")}`;
  return (
    <div className={`${cssCLass}`}>
      <span className="bg-overlay"></span>
      <h3 className="service__title">{displayTitle}</h3>
      <Button className="no-bg-link" to={`${link}`}>
        VIEW PROJECTS
        <span className="icon">
          <LuChevronRight />
        </span>
      </Button>
    </div>
  );
}

export default ServiceBox;
