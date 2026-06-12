import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

/**
 * GET /api/get-posts
 * Proxy route สำหรับดึง CMS posts จาก martech API
 * Forward query params: category, tag, lang, search, sortBy, sortOrder, page, limit
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const CMS_BASE_URL = process.env.NEXT_URL_MARTECH || 'https://martech.ssdapp.net';
    const CMS_API_KEY = process.env.NEXT_API_MARTECH || '';

    // Forward allowed query params
    const allowedParams = ['category', 'tag', 'lang', 'search', 'sortBy', 'sortOrder', 'page', 'limit'];
    const params = new URLSearchParams();

    for (const key of allowedParams) {
      const value = searchParams.get(key);
      if (value) {
        params.set(key, value);
      }
    }

    const url = `${CMS_BASE_URL}/api/v1/posts?${params.toString()}`;

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CMS_API_KEY}`,
      },
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error fetching posts:', error?.message);

    // Handle 404 gracefully
    if (error.response && error.response.status === 404) {
      return NextResponse.json(error.response.data);
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
