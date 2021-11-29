import React from "react";

const ProjectCatalyst = () => {
  const url = "https://drive.google.com/file/d/1E47HUA9Xikla1v9bvgxw-pR3_4kSnTye/view";

  return (
    <div className="flex h-96 my-4 overflow-y-scroll rounded-lg bg-darkblue-900 w3n-hover">
      <div className="flex flex-col p-4 text-xs text-darkblue-400 font-extralight">
        <a className="text-normal font-semibold hover:text-darkblue-600" href={url}>
          Upcoming Project Catalyst - Fund7
        </a>
        <div className="flex flex-row justify-between py-1 font-light">
          <div>
            <div className="font-normal">Funding Available:</div>
            <div>$8,000,000 up for grabs</div>
          </div>
          <div>
            <div className="font-normal">Registration Begins:</div>
            <div>18/Nov/2021, 11:00 UTC</div>
          </div>
        </div>
        <div className="font-normal py-1">Proposal Categories:</div>
        <div>Catalyst Natives: COTI & Adapay - $100,000 in COTI tokens</div>
        <div>Community Events - $200,000</div>
        <div>Boosting Cardano's DeFi - $500,000</div>
        <div>Lobbying for favorable legislation - $75,000</div>
        <div>Catalyst - Rapid Funding Mechanisms - $250,000</div>
        <div>Grow Latin America, Grow Cardano - $500,000</div>
        <div>Scale-UP Cardano's Community Hubs - $350,000</div>
        <div>Disarm Cyber Disinformation Attacks - $100,000</div>
        <div>DApps & Integrations - $250,000</div>
        <div>Gamers On-Chained - $250,000</div>
        <div>Connection Japan Community - $50,000</div>
        <div>Seeding Cardano's Grassroots DeFi</div>
        <div>New SPO Business Opporunities- $250,000</div>
        <div>DAOs ♥ Cardano - $500,000</div>
        <div>Miscellaneous Challenge $200,000</div>
        <div>Multilingual Resources - $100,000</div>
        <div>Global Sustainable Independant SPOs - $100,000</div>
        <div>A.I. SingularityNet a $5T Market - $500,000</div>
        <div>Mini/Low Budget DApps & Integrations - $200,000</div>
        <div>Improve and Grow Auditability - $500,000</div>
        <div>Accelerate Decentralized Identity - $425,000</div>
        <div>Catalyst Acelerator & Mentors - $500,000</div>
      </div>
    </div>
  );
};

export default ProjectCatalyst;
