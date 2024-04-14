type PortfolioProjectProps = {
  title: string;
  description: string;
  image: string;
};

function PortfolioProject({
  title,
  description,
  image,
}: PortfolioProjectProps) {
  const imageURL = `${image}${title
    .toLocaleLowerCase()
    .split(" ")
    .join("-")}.jpg`;
  return (
    <div className="portfolio-project">
      <div className="portfolio-project__image">
        <img src={imageURL} alt="" />
      </div>
      <div className="portfolio-project__content">
        <h3 className="portfolio-project__title">{title}</h3>
        <p className="portfolio-project__desc">{description}</p>
      </div>
    </div>
  );
}

export default PortfolioProject;
