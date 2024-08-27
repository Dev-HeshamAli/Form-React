export default function Madal({ isVisible, errorMass = null }) {
  if (isVisible) {
    return (
      <div className="modal">
        <div className="modal-cont">
          <h1 style={{ color: errorMass ? "red" : "green" }}>
            {errorMass !== null
              ? errorMass
              : "The Form Has Been Submitted Successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
