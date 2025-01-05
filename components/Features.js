import styles from "./Features.module.css";

export default function Features({ id }) {
  const featuresData = [
    {
      image: "/kunal-aspire.png",
      title: "Kunal Aspiree",
      description: "A modern residential complex offering 2 and 3 BHK flats with world-class amenities.",
      builder: "Kunal Group",
      location: "Balewadi, Pune, Maharashtra",
      gmapLink: "https://www.google.com/maps?q=Kunal+Aspiree+Balewadi+Pune+Maharashtra",
    },
    {
      image: "/life-republic.png",
      title: "Life Republic",
      description: "A township offering 2, 3, and 4 BHK apartments with integrated living spaces.",
      builder: "Kolte Patil Developers",
      location: "Hinjewadi, Pune, Maharashtra",
      gmapLink: "https://www.google.com/maps?q=Life+Republic+Hinjewadi+Pune+Maharashtra",
    },
    {
      image: "/majestic-marbella.png",
      title: "Majestique Marbella",
      description: "Stylish 2 and 3 BHK apartments with premium amenities in a prime location.",
      builder: "Majestique Landmarks",
      location: "Kharadi, Pune, Maharashtra",
      gmapLink: "https://www.google.com/maps?q=Majestique+Marbella+Kharadi+Pune+Maharashtra",
    },
    {
      image: "/gera.png",
      title: "Gera's World of Joy",
      description: "A residential project offering 2, 3, and 4 BHK apartments with modern amenities.",
      builder: "Gera Developments Pvt. Ltd.",
      location: "Kharadi, Pune, Maharashtra",
      gmapLink: "https://www.google.com/maps?q=Gera's+World+of+Joy+Kharadi+Pune+Maharashtra",
    },
    {
      image: "/amanora.png",
      title: "Amanora Park Town",
      description: "A township offering 1, 2, 3, and 4 BHK apartments with integrated living spaces.",
      builder: "City Group",
      location: "Hadapsar, Pune, Maharashtra",
      gmapLink: "https://www.google.com/maps?q=Amanora+Park+Town+Hadapsar+Pune+Maharashtra",
    },
  ];

  return (
    <div id={id} className={styles.features}>
      <h2 className={styles.heading}>Our Properties</h2>
      <div className={styles.grid}>
        {featuresData.map((feature, index) => (
          <div key={index} className={styles.feature}>
            <img
              src={feature.image}
              alt={feature.title}
              className={styles.image}
            />
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
            <p className={styles.builder}>Builder: {feature.builder}</p>
            <p className={styles.location}>Location: {feature.location}</p>
            <a
              href={feature.gmapLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.gmapLink}
            >
              View on Google Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
