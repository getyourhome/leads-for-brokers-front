import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

const ThirdStep = () => {
  return (
    <>
      <div className="form-control">
        <p>Como os corretores cadastrados podem te achar?</p>
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Nome:</label>
        <input
          type="text"
          name="property-location"
          id="property-location"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Email:</label>
        <input type="email" name="tenant-email" id="tenant-email" required />
      </div>
      <div className="form-control">
        <label htmlFor="property-location">Celular:</label>
        <input
          type="email"
          name="property-location"
          id="property-location"
          required
        />
      </div>
    </>
  );
};

export default ThirdStep;
