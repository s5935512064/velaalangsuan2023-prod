export {}; // This is here to prevent `PageProps` at the bottom from being exposed

declare global {
  interface ManagerKrathong {
    id: number;
    name: string;
    wish: string;
    profile: string;
    krathong_type: number;
  }

  interface IPost {
    created_time: string;
    from: {
      id: string;
      name: string;
    };
    full_picture: string;
    id: string;
    message: string;
    message_tags: {
      id: string;
      length: number;
      name: string;
      offset: number;
    }[];
    permalink_url: string;
    slug: string;
  }
}
