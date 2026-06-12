import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const { blogId } = await request.json();

    const CMS_BASE_URL = process.env.NEXT_URL_MARTECH || 'https://martech.ssdapp.net';
    const CMS_API_KEY = process.env.NEXT_API_MARTECH || '';

    // Forward the request to the CMS API
    const response = await fetch(
      `${CMS_BASE_URL}/api/v1/posts/${blogId}/engagement`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CMS_API_KEY}`,
        },
        body: JSON.stringify({ action: "view" }),
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to increment view count" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      success: true,
      viewCount: data.data?.views || data.viewCount,
      likeCount: data.data?.likes || data.likeCount,
    });
  } catch (error) {
    console.error("Error incrementing view count:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
