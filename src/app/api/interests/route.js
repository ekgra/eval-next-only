import connectToDatabase from "@/utils/db";
import Interest from "@/models/Interest";

// GET all interests
export async function GET(req) {
  try {
    await connectToDatabase();
    const interests = await Interest.find({});
    return new Response(JSON.stringify({ data: interests }), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: "Failed to fetch interests" }), { status: 500 });
  }
}


// POST a new interest
export async function POST(req) {
  try {
    const body = await req.json();
    await connectToDatabase();
    const newInterest = await Interest.create(body);
    return new Response(JSON.stringify({ data: newInterest }), { status: 201 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: "Failed to create interest" }), { status: 500 });
  }
}
