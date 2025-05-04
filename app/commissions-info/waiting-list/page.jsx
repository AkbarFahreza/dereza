"use client";

import { useEffect, useState } from "react";

export default function TrelloBoard() {
  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch("/api/trello");
        const cards = await res.json();
        setData(cards);
        const grouped = {};
        for (const card of cards) {
          const listName = card.idListName || card.listName || "Unknown";
          if (!grouped[listName]) grouped[listName] = [];
          grouped[listName].push(card);
        }

        setGroupedData(grouped);
      } catch (err) {
        console.error("Error fetching cards:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-column min-w-full sm:flex-row gap-6 flex-wrap rz-container">
      {Object.entries(groupedData).map(
        ([listName, cards]) =>
          listName !== "LEGEND" &&
          listName !== "UNSURE" &&
          listName !== "Finished ✅" && (
            <div key={listName} className="mb-6">
              <h2 className="typograph-heading-3 mb-4">{listName}</h2>
              <div id="waitlist-items">
                {cards.map((card, index) => {
                  if (index === 0) return null;
                  const labels = card.labels || [];
                  const fullPackage = labels.some(
                    (label) => label.name === "[YTLC] Full Package"
                  );
                  const basicPackage = labels.some(
                    (label) => label.name === "[YTLC] Basic Package"
                  );
                  const hasPrivacy = labels.some(
                    (label) => label.name !== "No Privacy"
                  );
                  const displayName = hasPrivacy
                    ? card.name.match(/^(.*?-\d{2})/)?.[1] || card.name
                    : card.name;

                  let bgColor = "";
                  if (fullPackage) bgColor = "bg-red-500";
                  else if (basicPackage) bgColor = "bg-[#216E4E]";

                  return (
                    <div
                      key={card.id}
                      className={`mb-2 p-2 border rounded-md relative overflow-hidden `}
                    >
                      <div
                        className={`absolute w-2 h-full ${bgColor} top-0 left-0`}
                      ></div>
                      <p className="typograph-subtext pl-2">{displayName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )
      )}
    </div>
  );
}
