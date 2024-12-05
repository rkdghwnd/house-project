type PremiumBrandBoxType = {
  logoImage: string;
  title: string;
  contentImages: string[];
  alts: string[];
};
const PremiumBrandBox = ({
  logoImage,
  title,
  contentImages,
  alts,
}: PremiumBrandBoxType) => {
  return (
    <article className="premium-brand-box">
      <div className="premium-brand-box-title">
        <img src={logoImage} alt="logo" />
        <span>{title}</span>
      </div>
      <div className="premium-brand-box-contents">
        <img src={contentImages[0]} alt={alts[0]} />
        <img src={contentImages[1]} alt={alts[1]} />
        <img src={contentImages[2]} alt={alts[2]} />
      </div>
    </article>
  );
};

export default PremiumBrandBox;
