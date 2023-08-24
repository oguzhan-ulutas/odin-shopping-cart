import { v4 as uuidv4 } from "uuid";

const Star = ({ rating }) => {
  const { rate } = rating;

  const wholeStar = Math.floor(rate);
  const fractionalStar = rate % 1;

  const starArray = Array(wholeStar).fill(100);
  starArray.push(fractionalStar * 100);

  const stars = starArray.map((fillValue) => {
    return (
      <div key={uuidv4()}>
        <svg
          width={"3rem"}
          height={"3rem"}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient">
              <stop
                className="stop1"
                offset="0%"
                stopColor="rgb(223, 169, 39)"
              />
              <stop
                className="stop2"
                offset={`${fillValue}%`}
                stopColor="white"
              />
            </linearGradient>
          </defs>
          <polygon
            fill={fillValue === 100 ? "rgb(223, 169, 39)" : "url(#gradient)"}
            points="12,0 14.27,7 22,8.87 16,14 17.45,21 12,17 6.55,21 8,14 2,8.87 9.73,7"
          />
        </svg>
      </div>
    );
  });
  return <>{stars} </>;
};

export default Star;
