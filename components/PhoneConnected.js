import styles from "../styles/PhoneConnected.module.css";

const PhoneConnected = () => {
  return (
    <div className={styles.phoneConnected}>
      <div className={styles.phoneConnected_body}>
        <h1>To chat with me enter "jhakal.surath@gmail.com" email</h1>
        <h1>To log out you can click your avatar</h1>
        <img src="https://c1.thejournal.ie/media/2015/09/whatsapp-web-phone-symbol-752x501.jpg" />
        <h1>Keep your phone connected</h1>
        <br />
        <p>
          WhatsApp connects to your phone to sync messages. To reduce data
          usage, connect you phone to Wi-Fi
        </p>
      </div>
      <div className={styles.greenLine}></div>
    </div>
  );
};

export default PhoneConnected;
