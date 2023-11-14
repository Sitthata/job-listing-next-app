import clientPromise from "@/app/connection/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("company");
    const joblist = await db.collection("joblist").find({}).toArray();
    return Response.json(joblist, {
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    });
  } catch (err) {
    console.log(err);
    return Response.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
