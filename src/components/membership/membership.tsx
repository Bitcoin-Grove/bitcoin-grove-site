import "./membership.scss";

interface Props {
  className?: string;
}

interface MembershipTierProps {
  title: string,
  description: string;
  bullets: string[];
  price: number;
  images?: string[];
  spotsAvailable?: number;
}

const membershipTiers: MembershipTierProps[] = [
    {
      title: "Resident",
      spotsAvailable: 13,
      description:
        "As a Resident Member, you'll enjoy full access to our hackerspace, including exclusive events, workshops, and networking opportunities. You'll also have the chance to collaborate with like-minded individuals and industry leaders.",
      bullets: [
        "Unlimited 24/7 access to the Grove",
        "Basic legal, accounting, and graphic design services from Grove Partners",
        "The ability to book the conference room and studio at the Grove",
        "Priority access and discounted rates to Grove events",
        "Exclusive Grove branded merchandise",
        "The warm fuzzy feeling of supporting a grassroots bitcoin initiative",
      ],
      price: 450,
      images: ["/images/citadel_1.png", "/images/citadel_2.png"],
    }
  ];

const MembershipTier: React.FC<MembershipTierProps> = ({
  description,
  bullets,
  price,
  images = [],
}) => {
  return (
    <div className="membership-tier__ctn">
      <div className="membership-tier">
        <p className="membership-tier__description">{description}</p>
        <div className="membership-tier__price-panel">
          <span className="membership-tier__price-panel-text">Price</span>
          <span className="membership-tier__price">
            <p className="membership-tier__price-text">${price}</p>
            <p className="membership-tier__price-panel-text">/ month</p>
          </span>
          {<span className="membership-tier__available">Spots Available!</span>}
        </div>
        <h5 className="membership-tier__benefits">Benefits</h5>
        <ol className="membership-tier__list">
          {bullets.map((b) => (
            <li key={b} className="membership-tier__list-item">
              {b}
            </li>
          ))}
        </ol>
      </div>
      <div className="membership-tier__image">
        {images.map( image => <img key={image} src={image} alt={description} /> )}
      </div>
    </div>
  );
};

const Membership: React.FC<Props> = ({ className }) => {
  const signup = () => {
    window.location.href = "https://371ap9xb8m0.typeform.com/to/G0mNcoOG"
  }

  return (
    <div className={`membership ${className}`}>
      <h3 className="membership__title">Resident Membership</h3>
      <MembershipTier {...membershipTiers[0]} />
      <button onClick={signup} className="membership__join-button">Sign Up</button>
    </div>
  );
};

export default Membership;
