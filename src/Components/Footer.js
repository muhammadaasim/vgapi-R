import "../App.css";
export default function Footer() {
  return (
    <div className="border-t border-gray-800">
      <div className="container flex flex-row justify-center items-center py-3">
        Powered By -
        <a target="_blank" href="https://www.igdb.com/api" rel="noreferrer">
          IGDB API
        </a>
      </div>
    </div>
  );
}
