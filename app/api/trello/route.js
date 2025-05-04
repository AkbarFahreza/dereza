export async function GET() {
  const TRELLO_API_KEY = process.env.TRELLO_API_KEY;
  const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
  const BOARD_ID = process.env.TRELLO_BOARD_ID;

  try {
    // Fetch cards
    const cardsUrl = `https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
    const cardsRes = await fetch(cardsUrl, {
      next: { revalidate: 300 },
    });

    const cardsContentType = cardsRes.headers.get("content-type");

    if (!cardsRes.ok) {
      const text = await cardsRes.text();
      return Response.json(
        { error: text || "Trello cards API error" },
        { status: cardsRes.status }
      );
    }

    if (!cardsContentType?.includes("application/json")) {
      const text = await cardsRes.text();
      return Response.json(
        { error: "Invalid cards response format" },
        { status: 500 }
      );
    }

    const cards = await cardsRes.json();

    // Fetch lists
    const listsUrl = `https://api.trello.com/1/boards/${BOARD_ID}/lists?key=${TRELLO_API_KEY}&token=${TRELLO_TOKEN}`;
    const listsRes = await fetch(listsUrl, {
      next: { revalidate: 300 },
    });

    if (!listsRes.ok) {
      const text = await listsRes.text();
      return Response.json(
        { error: text || "Trello lists API error" },
        { status: listsRes.status }
      );
    }

    const lists = await listsRes.json();
    const listMap = Object.fromEntries(
      lists.map((list) => [list.id, list.name])
    );

    // Enrich cards with listName
    const enrichedCards = cards.map((card) => ({
      ...card,
      listName: listMap[card.idList] || "Unknown",
    }));

    return Response.json(enrichedCards);
  } catch (error) {
    console.error("Server Error:", error);
    return Response.json(
      { error: "Server error", message: error.message },
      { status: 500 }
    );
  }
}
