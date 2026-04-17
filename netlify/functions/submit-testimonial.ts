export const handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Request body is required" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const { name, rating, text } = body;
  if (!name || !text || !rating) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, rating, and review text are required" }),
    };
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_KEY = process.env.SUPABASE_KEY;
  const SUPABASE_TABLE = process.env.SUPABASE_TABLE || "testimonials";

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Database not configured. Set SUPABASE_URL and SUPABASE_KEY in Netlify environment variables." }),
    };
  }

  const payload = {
    name,
    rating,
    text,
    date: new Date().toISOString(),
    published: false,
  };

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorText || "Failed to save testimonial" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Database request failed" }),
    };
  }
};
