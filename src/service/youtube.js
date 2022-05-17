class Youtube {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=24&&regionCode=KR&key=${this.apiKey}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.apiKey}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({...item, id: item.id.videoId}));
  }
}

export default Youtube;
