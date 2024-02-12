const CertificateCard = (props) => {
  return (
    <div className="certificate-card">
      <div className="certificate-img">
        <img
          style={{
            objectFit: "cover",
          }}
          src={props.img}
          alt={props.name}
        />
      </div>
      <div className="project-title">
        <h2>{props.title}</h2>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
