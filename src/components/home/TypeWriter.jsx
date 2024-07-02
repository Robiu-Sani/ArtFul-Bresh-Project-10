import { Typewriter } from "react-simple-typewriter";

export default function TypeWriter() {
  return (
    <div className="App">
      <h1
        className="text-3xl text-center"
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={[
              "Brushstrokes of Creativity: Exploring the World of Painting",
              "Drawing from Within: The Art of Self-Expression",
              "Colorful Canvases: A Journey Through Painting Techniques",
              "Sketching Serenity: Finding Peace Through Drawing",
            ]}
            loop={20}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
}
