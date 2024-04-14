type PageHeaderProps = {
  title: string;
  desc: string;
};

function PageHeader({ title, desc }: PageHeaderProps) {
  return (
    <header className="page-header">
      <span className="bg-shape"></span>{" "}
      <div className=" box-container page-header__content-wrapper">
        <h2 className="page-header__title"> {title}</h2>{" "}
        <span className="page-header__desc"> {desc}</span>{" "}
      </div>
    </header>
  );
}

export default PageHeader;
