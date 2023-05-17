import React, { useState } from "react";
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
      price: 300,
      images: ["/images/ironside_1.jpeg", "/images/ironside_2.jpeg"],
    },
    {
      title: "Nomad",
      description:
        "Perfect for those who need a flexible arrangement, our Nomad membership offers access to our hackerspace on a per-visit basis. You'll still enjoy the benefits of our community, events, and workshops, but with the flexibility to come and go as you please.",
      bullets: [
        "24/7 access to the Grove for 7 days per month",
        "The ability to book the conference room and studio at the Grove",
        "Priority access and discounted rates to Grove events",
        "Exclusive Grove branded merchandise",
        "The warm fuzzy feeling of supporting a grassroots bitcoin initiative"
      ],
      price: 170,
      images: ["/images/ironside_3.jpeg", "/images/ironside_4.jpeg"],
    },
  ];

const MembershipTier: React.FC<MembershipTierProps> = ({
  description,
  bullets,
  price,
  spotsAvailable,
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
          {spotsAvailable && <span className="membership-tier__available">Only {spotsAvailable} Spots Available!</span>}
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
  let [selectedTier, setSelectedTier] = useState(0);

  const signup = () => {
    window.location.href = "https://371ap9xb8m0.typeform.com/to/c7qlaADg"
  }

  return (
    <div className={`membership ${className}`}>
      <h3 className="membership__title">Membership Tiers</h3>
      <div className="membership__tiers">
        {membershipTiers.map((m, index) => {
          return (
            <div
              className={`membership__tier ${
                index == selectedTier ? "membership__selected-tier" : ""
              }`}
              onClick={() => setSelectedTier(index)}
            >
              {m.title}
            </div>
          );
        })}
      </div>
      <MembershipTier {...membershipTiers[selectedTier]} />
      <button onClick={signup} className="membership__join-button">Sign Up</button>
    </div>
  );
};

export default Membership;
