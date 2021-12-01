export interface AlbumImage {
  "#text": string;
  size: "small" | "medium" | "large" | "extralarge";
}

export interface Album {
  name: string;
  artist: string;
  url: string;
  image: AlbumImage[];
}

export interface AlbumSearchResponse {
  results: {
    albummatches: {
      album: Album[];
    };
  };
}
