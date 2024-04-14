import Button from "../ui/Button";

import { LuChevronRight } from "react-icons/lu";

type InnerPageServiceBoxProps = {
  title: string;
};

function InnerPageServiceBox({ title }: InnerPageServiceBoxProps) {
  const displayTitle = title.toUpperCase();
  const link = `/${title.toLowerCase().replace(" ", "-")}`;
  const cssCLass = `inner-page-service inner-page-service__${title
    .toLowerCase()
    .replace(" ", "-")}`;
  return (
    <div className={`${cssCLass}`}>
      <span className="bg-overlay"></span>
      <h3 className="inner-page-service__title">{displayTitle}</h3>
      <Button className="no-bg-link" to={`${link}`}>
        VIEW PROJECTS
        <span className="icon">
          <LuChevronRight />
        </span>
      </Button>
    </div>
  );
}

export default InnerPageServiceBox;
